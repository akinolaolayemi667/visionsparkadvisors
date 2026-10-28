import { FormEvent, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/Blocks";
import { packages } from "../engagement";
import { createCheckoutSession } from "../lib/payments";
import { usePageMeta } from "../hooks/usePageMeta";

type Errors = Partial<Record<"email" | "agreementRef" | "packageId", string>>;

export function Payment() {
  const [params] = useSearchParams();
  const status = params.get("status");
  const [email, setEmail] = useState("");
  const [agreementRef, setAgreementRef] = useState("");
  const [packageId, setPackageId] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [summary, setSummary] = useState("");

  usePageMeta(
    "Payment — Fakorede Joel",
    "Secure payment for agreed advisory engagements only. Requesting an assessment never creates a charge.",
  );

  const statusMessage = useMemo(() => {
    if (status === "success") {
      return "If payment completed, Stripe will confirm by email. Keep your agreement reference for records.";
    }
    if (status === "cancel") {
      return "Checkout was cancelled. No charge was completed. You can return when ready, or wait for a private invoice link.";
    }
    return "";
  }, [status]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter the email used on the written agreement.";
    }
    if (agreementRef.trim().length < 4) {
      next.agreementRef = "Enter the agreement reference from your written confirmation.";
    }
    if (!packageId) next.packageId = "Select the agreed package.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setSummary("");
    const result = await createCheckoutSession({
      email: email.trim(),
      agreementRef: agreementRef.trim(),
      packageId,
    });
    setSending(false);

    if (result.ok) {
      window.location.href = result.url;
      return;
    }

    setSummary(
      result.code === "NOT_CONFIGURED"
        ? "Online checkout is not active yet. Use the invoice or payment link provided with your written agreement, or reply on that thread."
        : result.error,
    );
  }

  return (
    <>
      <PageHeader
        kicker="Payment"
        title="Payment follows written agreement."
        lede="This page never charges for a career assessment. Checkout opens only for an agreed package after scope and fees are confirmed in writing."
      />

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container stack" style={{ maxWidth: "40rem" }}>
          {statusMessage ? <p className="deck">{statusMessage}</p> : null}

          <div className="prose prose--wide">
            <p>
              If you do not yet have a written confirmation,{" "}
              <Link to="/agreement">request an engagement confirmation</Link> first. Package
              overview: <Link to="/packages">packages</Link>. Terms template:{" "}
              <Link to="/career-advisory-terms">Career Advisory Terms</Link>.
            </p>
          </div>

          <form className="form" noValidate onSubmit={onSubmit}>
            {summary ? (
              <p className="form-summary" role="alert">
                {summary}
              </p>
            ) : null}
            <div className={errors.email ? "field is-invalid" : "field"}>
              <label htmlFor="pay-email">
                Email on the agreement <span className="hint">Required</span>
              </label>
              <input
                id="pay-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}
            </div>
            <div className={errors.agreementRef ? "field is-invalid" : "field"}>
              <label htmlFor="pay-ref">
                Agreement reference <span className="hint">Required</span>
              </label>
              <input
                id="pay-ref"
                value={agreementRef}
                onChange={(event) => setAgreementRef(event.target.value)}
                placeholder="From your written confirmation"
              />
              {errors.agreementRef ? <p className="field-error">{errors.agreementRef}</p> : null}
            </div>
            <div className={errors.packageId ? "field is-invalid" : "field"}>
              <label htmlFor="pay-package">
                Agreed package <span className="hint">Required</span>
              </label>
              <select
                id="pay-package"
                value={packageId}
                onChange={(event) => setPackageId(event.target.value)}
              >
                <option value="">Select</option>
                {packages.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.packageId ? <p className="field-error">{errors.packageId}</p> : null}
            </div>
            <p className="quiet-note">
              Amounts are never typed by the visitor. When Stripe Price IDs are configured on the
              server, checkout uses only those agreed catalogue prices.
            </p>
            <div className="form-actions">
              <button className="btn" type="submit" disabled={sending}>
                {sending ? "Opening checkout…" : "Continue to secure checkout"}
              </button>
              <Link className="btn btn--ghost" to="/assessment">
                Request an assessment instead
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
