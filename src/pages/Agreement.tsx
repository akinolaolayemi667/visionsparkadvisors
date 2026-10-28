import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/Blocks";
import { practice } from "../config";
import { packages } from "../engagement";
import { openMailto, submitIntake } from "../lib/intake";
import { usePageMeta } from "../hooks/usePageMeta";

type Errors = Partial<Record<"name" | "email" | "tier" | "scope" | "ack", string>>;

const tierOptions = [
  ...packages.map((item) => ({ id: item.id, label: item.title })),
  { id: "custom", label: "Custom / combination (to be scoped)" },
];

export function Agreement() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [tier, setTier] = useState("");
  const [scope, setScope] = useState("");
  const [notes, setNotes] = useState("");
  const [ack, setAck] = useState(false);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [statusNote, setStatusNote] = useState("");
  const [copied, setCopied] = useState(false);

  usePageMeta(
    "Engagement Agreement — Joel Facco",
    "Request a written engagement confirmation. Fees and scope are agreed before payment; assessment requests never create a charge.",
  );

  const tierLabel = tierOptions.find((item) => item.id === tier)?.label || "—";

  const letter = useMemo(() => {
    return [
      "Engagement confirmation request",
      practice.brand,
      practice.name,
      "",
      `Name: ${name.trim() || "—"}`,
      `Email: ${email.trim() || "—"}`,
      `Organization: ${organization.trim() || "—"}`,
      `Selected tier: ${tierLabel}`,
      "",
      "Proposed scope:",
      scope.trim() || "—",
      "",
      notes.trim() ? `Additional notes:\n${notes.trim()}` : null,
      "",
      "Fee: to be confirmed in writing before payment.",
      "I understand that requesting this confirmation does not create a charge, that no interview or placement is guaranteed, and that career advisory is separate from recruitment consideration.",
      "I have read the Career Advisory Terms template.",
    ]
      .filter((line) => line !== null)
      .join("\n");
  }, [name, email, organization, tierLabel, scope, notes]);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please give your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please give a valid email.";
    }
    if (!tier) next.tier = "Please select a package or custom scope.";
    if (scope.trim().length < 20) {
      next.scope = "Briefly describe the scope you expect to confirm.";
    }
    if (!ack) next.ack = "Please confirm you have read the boundary statements.";
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (hp) {
      setSent(true);
      return;
    }
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setStatusNote("");
    const result = await submitIntake({
      type: "agreement-request",
      subject: `Engagement confirmation — ${name.trim()}`,
      name: name.trim(),
      replyTo: email.trim(),
      message: letter,
      honeypot: hp,
      fields: {
        Organization: organization.trim(),
        Tier: tierLabel,
      },
    });
    setSending(false);

    if (result.ok) {
      setSent(true);
      setFallback(false);
      return;
    }
    setFallback(true);
    setSent(true);
    setStatusNote(result.error);
  }

  async function copyLetter() {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    return (
      <>
        <PageHeader
          kicker="Agreement"
          title={fallback ? "Send the request to complete." : "Your confirmation request was sent."}
          lede={
            fallback
              ? "Direct delivery is temporarily unavailable. Copy the note or open email. A written fee and scope confirmation will still be required before payment."
              : "Joel Facco will reply with written scope and fee confirmation when appropriate. Payment is never taken for an assessment alone."
          }
        />
        <section className="page-section" style={{ paddingTop: 0 }}>
          <div className="container form-success">
            {statusNote ? <p className="field-error">{statusNote}</p> : null}
            {fallback ? <div className="letter">{letter}</div> : null}
            <div className="form-actions">
              {fallback && practice.email ? (
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    if (!openMailto(practice.email, `Engagement confirmation — ${name.trim()}`, letter)) {
                      void copyLetter();
                    }
                  }}
                >
                  Open email
                </button>
              ) : null}
              {fallback ? (
                <button className="btn btn--ghost" type="button" onClick={copyLetter}>
                  {copied ? "Copied" : "Copy request"}
                </button>
              ) : null}
              <Link className="btn btn--ghost" to="/payment">
                Payment (after agreement)
              </Link>
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => {
                  setSent(false);
                  setFallback(false);
                  setStatusNote("");
                }}
              >
                {fallback ? "Edit" : "Done"}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        kicker="Agreement"
        title="Confirm scope in writing before payment."
        lede="Use this page when a recommendation is clear and you are ready for a written engagement confirmation. Fees stay blank until agreed. Assessment requests never create a charge."
      />

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container agreement-layout">
          <form className="form" noValidate onSubmit={onSubmit}>
            <div className="hp" aria-hidden="true">
              <label>
                Website
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={hp}
                  onChange={(event) => setHp(event.target.value)}
                />
              </label>
            </div>
            <div className="form-row">
              <div className={errors.name ? "field is-invalid" : "field"}>
                <label htmlFor="ag-name">
                  Name <span className="hint">Required</span>
                </label>
                <input
                  id="ag-name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name ? <p className="field-error">{errors.name}</p> : null}
              </div>
              <div className={errors.email ? "field is-invalid" : "field"}>
                <label htmlFor="ag-email">
                  Email <span className="hint">Required</span>
                </label>
                <input
                  id="ag-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email ? <p className="field-error">{errors.email}</p> : null}
              </div>
            </div>
            <div className="field">
              <label htmlFor="ag-org">Organization (optional)</label>
              <input
                id="ag-org"
                autoComplete="organization"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
              />
            </div>
            <div className={errors.tier ? "field is-invalid" : "field"}>
              <label htmlFor="ag-tier">
                Package / scope direction <span className="hint">Required</span>
              </label>
              <select
                id="ag-tier"
                value={tier}
                onChange={(event) => setTier(event.target.value)}
              >
                <option value="">Select</option>
                {tierOptions.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.tier ? <p className="field-error">{errors.tier}</p> : null}
            </div>
            <div className={errors.scope ? "field is-invalid" : "field"}>
              <label htmlFor="ag-scope">
                Scope to confirm <span className="hint">Required</span>
              </label>
              <textarea
                id="ag-scope"
                rows={5}
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                placeholder="Level, materials, deliverables, and what success looks like for this engagement."
              />
              {errors.scope ? <p className="field-error">{errors.scope}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="ag-notes">Additional notes (optional)</label>
              <textarea
                id="ag-notes"
                rows={3}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </div>
            <p className="quiet-note">
              Fee line on the draft remains <strong>to be confirmed in writing</strong>. No public
              prices are invented here. Read the{" "}
              <Link to="/career-advisory-terms">Career Advisory Terms</Link>.
            </p>
            <label className="check">
              <input
                type="checkbox"
                checked={ack}
                onChange={(event) => setAck(event.target.checked)}
              />
              <span>
                I understand this request does not create a charge, does not guarantee interviews or
                placements, and that advisory is separate from recruitment consideration.
              </span>
            </label>
            {errors.ack ? <p className="field-error">{errors.ack}</p> : null}
            <div className="form-actions">
              <button className="btn" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Request written confirmation"}
              </button>
              <button
                className="btn btn--ghost"
                type="button"
                onClick={() => window.print()}
                disabled={!name.trim() || !scope.trim()}
              >
                Print draft
              </button>
            </div>
          </form>

          <aside className="agreement-draft" id="agreement-print">
            <p className="kicker">Draft engagement confirmation</p>
            <h2 className="section-title">Not binding until fees and scope are confirmed in writing</h2>
            <dl className="agreement-dl">
              <div>
                <dt>Practice</dt>
                <dd>
                  {practice.brand} — {practice.name}
                </dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>{name.trim() || "—"}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{email.trim() || "—"}</dd>
              </div>
              <div>
                <dt>Organization</dt>
                <dd>{organization.trim() || "—"}</dd>
              </div>
              <div>
                <dt>Package direction</dt>
                <dd>{tierLabel}</dd>
              </div>
              <div>
                <dt>Proposed scope</dt>
                <dd className="agreement-dl__block">{scope.trim() || "—"}</dd>
              </div>
              <div>
                <dt>Fee</dt>
                <dd>To be confirmed in writing before payment</dd>
              </div>
            </dl>
            <p className="quiet-note">
              Subject to the Career Advisory Terms template. No interview, placement, Board
              appointment, executive appointment, or employment outcome is guaranteed. Purchasing
              advisory is never required for recruitment consideration.
            </p>
            <div className="agreement-signs">
              <p>Client acknowledgement: ______________________ Date: ________</p>
              <p>Practice confirmation: ______________________ Date: ________</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
