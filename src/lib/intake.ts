export type IntakeAttachment = {
  filename: string;
  contentBase64: string;
  contentType?: string;
};

export type IntakePayload = {
  type: string;
  subject: string;
  name: string;
  replyTo: string;
  message: string;
  fields?: Record<string, string>;
  honeypot?: string;
  attachment?: IntakeAttachment | null;
};

export type IntakeResult =
  | { ok: true }
  | { ok: false; error: string; code?: string; fallback?: boolean };

export async function fileToBase64(file: File): Promise<IntakeAttachment> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return {
    filename: file.name,
    contentBase64: btoa(binary),
    contentType: file.type || "application/octet-stream",
  };
}

export async function submitIntake(payload: IntakePayload): Promise<IntakeResult> {
  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      code?: string;
    };

    if (response.ok && data.ok) return { ok: true };

    if (response.status === 503 || data.code === "NOT_CONFIGURED") {
      return {
        ok: false,
        error: data.error || "Intake is not configured yet.",
        code: "NOT_CONFIGURED",
        fallback: true,
      };
    }

    return {
      ok: false,
      error: data.error || "Could not send your message.",
      code: data.code,
      fallback: true,
    };
  } catch {
    return {
      ok: false,
      error: "Network error while sending. You can still copy or open email.",
      code: "NETWORK",
      fallback: true,
    };
  }
}

export function openMailto(to: string, subject: string, body: string) {
  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (href.length > 1900) return false;
  window.location.href = href;
  return true;
}
