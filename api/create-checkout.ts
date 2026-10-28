import type { VercelRequest, VercelResponse } from "@vercel/node";

type Body = {
  email?: string;
  agreementRef?: string;
  packageId?: string;
};

const ALLOWED_PACKAGES = ["foundation", "executive", "partnership"] as const;
type PackageId = (typeof ALLOWED_PACKAGES)[number];

function readBody(req: VercelRequest): Body {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as Body;
    } catch {
      return {};
    }
  }
  return (req.body ?? {}) as Body;
}

function priceFor(packageId: PackageId): string | undefined {
  const map: Record<PackageId, string | undefined> = {
    foundation: process.env.STRIPE_PRICE_FOUNDATION,
    executive: process.env.STRIPE_PRICE_EXECUTIVE,
    partnership: process.env.STRIPE_PRICE_PARTNERSHIP,
  };
  const value = map[packageId]?.trim();
  return value || undefined;
}

function siteOrigin(): string {
  return (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://visionsparkadvisors.vercel.app")
    .trim()
    .replace(/\/$/, "");
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

  const secret = process.env.STRIPE_SECRET_KEY?.trim() || "";
  if (!secret) {
    return res.status(503).json({
      ok: false,
      error: "Online checkout is not configured.",
      code: "NOT_CONFIGURED",
    });
  }

  const body = readBody(req);
  const email = (body.email || "").trim().slice(0, 200);
  const agreementRef = (body.agreementRef || "").trim().slice(0, 120);
  const packageId = (body.packageId || "").trim() as PackageId;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Email is invalid." });
  }
  if (agreementRef.length < 4) {
    return res.status(400).json({ ok: false, error: "Agreement reference is required." });
  }
  if (!ALLOWED_PACKAGES.includes(packageId)) {
    return res.status(400).json({ ok: false, error: "Unknown package." });
  }

  const priceId = priceFor(packageId);
  if (!priceId) {
    return res.status(503).json({
      ok: false,
      error: "No Stripe price is configured for that package yet.",
      code: "NOT_CONFIGURED",
    });
  }

  const origin = siteOrigin();
  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("success_url", `${origin}/payment?status=success`);
  params.set("cancel_url", `${origin}/payment?status=cancel`);
  params.set("customer_email", email);
  params.set("client_reference_id", agreementRef);
  params.set("line_items[0][price]", priceId);
  params.set("line_items[0][quantity]", "1");
  params.set("metadata[agreement_ref]", agreementRef);
  params.set("metadata[package_id]", packageId);
  params.set(
    "payment_intent_data[description]",
    `VisionSpark Advisors — ${packageId} (${agreementRef})`,
  );

  try {
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = (await response.json()) as { id?: string; url?: string; error?: { message?: string } };

    if (!response.ok || !data.url) {
      console.error("Stripe checkout error", data);
      return res.status(502).json({
        ok: false,
        error: data.error?.message || "Stripe rejected the checkout session.",
        code: "PROVIDER_ERROR",
      });
    }

    return res.status(200).json({ ok: true, url: data.url, id: data.id });
  } catch (error) {
    console.error("Checkout failure", error);
    return res.status(500).json({
      ok: false,
      error: "Could not start checkout.",
      code: "SEND_FAILED",
    });
  }
}
