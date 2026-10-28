import type { VercelRequest, VercelResponse } from "@vercel/node";

type Attachment = {
  filename: string;
  contentBase64: string;
  contentType?: string;
};

type EnquiryBody = {
  type?: string;
  subject?: string;
  replyTo?: string;
  name?: string;
  message?: string;
  fields?: Record<string, string>;
  honeypot?: string;
  attachment?: Attachment | null;
};

const MAX_ATTACHMENT_BYTES = 4.2 * 1024 * 1024;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 8;

/** Soft per-instance rate limit (resets on cold starts). */
const recentHits = new Map<string, number[]>();

function clientKey(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded || "";
  const ip = raw.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  return ip.slice(0, 80);
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const prior = (recentHits.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (prior.length >= RATE_MAX) {
    recentHits.set(key, prior);
    return true;
  }
  prior.push(now);
  recentHits.set(key, prior);
  return false;
}

function readBody(req: VercelRequest): EnquiryBody {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as EnquiryBody;
    } catch {
      return {};
    }
  }
  return (req.body ?? {}) as EnquiryBody;
}

async function sendResend(
  apiKey: string,
  payload: Record<string, unknown>,
): Promise<{ ok: true } | { ok: false; status: number; detail: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    return { ok: false, status: response.status, detail };
  }
  return { ok: true };
}

function confirmationText(name: string, type: string): string {
  const who = name && name !== "Website visitor" ? name.split(" ")[0] : "there";
  return [
    `Dear ${who},`,
    "",
    "Thank you for writing to VisionSpark Advisors.",
    "",
    `This confirms that your ${type.replace(/-/g, " ")} was received. It will be read personally and treated as confidential.`,
    "",
    "Requesting an assessment or sending an enquiry does not create a paid engagement, and no interview, placement, Board appointment, executive appointment, or employment outcome is guaranteed. Career advisory remains separate from recruitment consideration.",
    "",
    "If a reply is appropriate, you will hear from Fakorede Joel on this thread.",
    "",
    "VisionSpark Advisors",
    "Fakorede Joel",
  ].join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  if (isRateLimited(clientKey(req))) {
    return res.status(429).json({
      ok: false,
      error: "Too many submissions from this network. Please try again later.",
      code: "RATE_LIMITED",
    });
  }

  const body = readBody(req);

  if (body.honeypot) {
    return res.status(200).json({ ok: true, skipped: true });
  }

  const to = process.env.CONTACT_TO || process.env.ENQUIRY_TO || "";
  const apiKey = process.env.RESEND_API_KEY || "";
  const from =
    process.env.RESEND_FROM || "VisionSpark Advisors <onboarding@resend.dev>";
  const siteUrl = (process.env.SITE_URL || "https://visionsparkadvisors.vercel.app").replace(
    /\/$/,
    "",
  );

  if (!to || !apiKey) {
    return res.status(503).json({
      ok: false,
      error: "Intake is not configured. Set RESEND_API_KEY and CONTACT_TO on Vercel.",
      code: "NOT_CONFIGURED",
    });
  }

  const type = (body.type || "enquiry").trim().slice(0, 80);
  const name = (body.name || "Website visitor").trim().slice(0, 120);
  const replyTo = (body.replyTo || "").trim().slice(0, 200);
  const subjectBase = (body.subject || `VisionSpark Advisors — ${type}`).trim().slice(0, 160);
  const message = (body.message || "").trim().slice(0, 20000);
  const fields = body.fields && typeof body.fields === "object" ? body.fields : {};

  if (!message || message.length < 10) {
    return res.status(400).json({ ok: false, error: "Message is too short." });
  }

  if (replyTo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
    return res.status(400).json({ ok: false, error: "Reply email is invalid." });
  }

  const fieldLines = Object.entries(fields)
    .filter(([, value]) => String(value || "").trim())
    .map(([key, value]) => `${key}: ${String(value).trim()}`)
    .join("\n");

  const text = [
    `Type: ${type}`,
    `From: ${name}`,
    replyTo ? `Reply-To: ${replyTo}` : null,
    "",
    fieldLines || null,
    fieldLines ? "" : null,
    message,
    "",
    "—",
    "Sent via VisionSpark Advisors website intake.",
    "Career advisory remains separate from recruitment consideration.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const payload: Record<string, unknown> = {
    from,
    to: [to],
    subject: subjectBase,
    text,
  };

  if (replyTo) payload.reply_to = replyTo;

  if (body.attachment?.filename && body.attachment.contentBase64) {
    const raw = body.attachment.contentBase64.replace(/^data:[^;]+;base64,/, "");
    const approxBytes = Math.floor((raw.length * 3) / 4);
    if (approxBytes > MAX_ATTACHMENT_BYTES) {
      return res.status(400).json({
        ok: false,
        error: "Attachment is too large. Please keep files under about 4 MB.",
      });
    }
    payload.attachments = [
      {
        filename: body.attachment.filename.slice(0, 180),
        content: raw,
      },
    ];
  }

  try {
    const primary = await sendResend(apiKey, payload);

    if (!primary.ok) {
      console.error("Resend error", primary.status, primary.detail);
      return res.status(502).json({
        ok: false,
        error: "Email provider rejected the message. Try again shortly.",
        code: "PROVIDER_ERROR",
      });
    }

    if (replyTo) {
      const confirm = await sendResend(apiKey, {
        from,
        to: [replyTo],
        subject: `We received your message — VisionSpark Advisors`,
        text: confirmationText(name, type),
        headers: {
          "X-Entity-Ref": "visionspark-intake-ack",
        },
      });
      if (!confirm.ok) {
        console.error("Confirmation email failed", confirm.status, confirm.detail);
      }
    }

    return res.status(200).json({ ok: true, siteUrl });
  } catch (error) {
    console.error("Intake failure", error);
    return res.status(500).json({
      ok: false,
      error: "Could not send the enquiry.",
      code: "SEND_FAILED",
    });
  }
}
