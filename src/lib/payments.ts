export type CheckoutPayload = {
  email: string;
  agreementRef: string;
  packageId: string;
};

export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; error: string; code?: string };

export async function createCheckoutSession(
  payload: CheckoutPayload,
): Promise<CheckoutResult> {
  try {
    const response = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      url?: string;
      error?: string;
      code?: string;
    };

    if (response.ok && data.ok && data.url) {
      return { ok: true, url: data.url };
    }

    return {
      ok: false,
      error: data.error || "Could not start checkout.",
      code: data.code,
    };
  } catch {
    return {
      ok: false,
      error: "Network error while starting checkout.",
      code: "NETWORK",
    };
  }
}
