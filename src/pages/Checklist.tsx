import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/Blocks";
import { checklistMeta, checklistQuestions } from "../content/checklist";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

const levels = [
  "C-suite / Chief executive",
  "President / Managing Director",
  "Vice President / General Manager / BU Leader",
  "Senior Director / Director",
  "Board / Non-executive",
  "Senior manager / Functional leader",
  "Other",
];

type Errors = Partial<
  Record<"firstName" | "lastName" | "email" | "level" | "targetRole" | "consent", string>
>;

export function Checklist() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("vsa-checklist") === "1",
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  usePageMeta(
    `${checklistMeta.title} — Fakorede Joel`,
    checklistMeta.subtitle,
  );

  const requestNote = useMemo(
    () =>
      [
        "Executive Positioning Checklist request",
        practice.name,
        "",
        `Name: ${firstName.trim()} ${lastName.trim()}`.trim(),
        `Email: ${email.trim()}`,
        `Current/most recent level: ${level}`,
        `Target role: ${targetRole.trim()}`,
        "",
        "Consent: I agree that this information may be used to provide the checklist and to follow up once about related career positioning resources. It will not be sold. Advisory purchase is never required for recruitment consideration.",
      ].join("\n"),
    [firstName, lastName, email, level, targetRole],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (hp) {
      setUnlocked(true);
      return;
    }
    const next: Errors = {};
    if (firstName.trim().length < 1) next.firstName = "Required.";
    if (lastName.trim().length < 1) next.lastName = "Required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
    if (!level) next.level = "Required.";
    if (targetRole.trim().length < 2) next.targetRole = "Required.";
    if (!consent) next.consent = "Consent is required to receive the checklist.";
    setErrors(next);
    if (Object.keys(next).length) return;

    sessionStorage.setItem("vsa-checklist", "1");
    setUnlocked(true);
    setNotice(
      "Your checklist is below. A copy of your request details stays on this device unless you choose to send it.",
    );

    if (practice.email) {
      const subject = encodeURIComponent("Executive Positioning Checklist request");
      const body = encodeURIComponent(requestNote);
      const href = `mailto:${practice.email}?subject=${subject}&body=${body}`;
      if (href.length <= 1900) {
        // Optional notify — user can dismiss mail client
      }
    }
  }

  return (
    <>
      <PageHeader
        kicker="Resource"
        title={checklistMeta.title}
        lede={checklistMeta.subtitle}
      />

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container checklist-layout">
          {!unlocked ? (
            <form className="form checklist-form" noValidate onSubmit={onSubmit}>
              <p className="deck">
                Fifteen diagnostic questions for executives and senior leaders. Complete the fields
                below to view the checklist. No purchase is required.
              </p>
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
                <div className={errors.firstName ? "field is-invalid" : "field"}>
                  <label htmlFor="cl-first">First name</label>
                  <input
                    id="cl-first"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  {errors.firstName ? <p className="field-error">{errors.firstName}</p> : null}
                </div>
                <div className={errors.lastName ? "field is-invalid" : "field"}>
                  <label htmlFor="cl-last">Last name</label>
                  <input
                    id="cl-last"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  {errors.lastName ? <p className="field-error">{errors.lastName}</p> : null}
                </div>
              </div>
              <div className={errors.email ? "field is-invalid" : "field"}>
                <label htmlFor="cl-email">Email</label>
                <input
                  id="cl-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email ? <p className="field-error">{errors.email}</p> : null}
              </div>
              <div className={errors.level ? "field is-invalid" : "field"}>
                <label htmlFor="cl-level">Current / most recent level</label>
                <select
                  id="cl-level"
                  value={level}
                  onChange={(event) => setLevel(event.target.value)}
                >
                  <option value="">Select</option>
                  {levels.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.level ? <p className="field-error">{errors.level}</p> : null}
              </div>
              <div className={errors.targetRole ? "field is-invalid" : "field"}>
                <label htmlFor="cl-target">Target role</label>
                <input
                  id="cl-target"
                  value={targetRole}
                  onChange={(event) => setTargetRole(event.target.value)}
                />
                {errors.targetRole ? <p className="field-error">{errors.targetRole}</p> : null}
              </div>
              <label className="check">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                />
                <span>
                  I agree that my name, email, level and target role may be used to provide this
                  checklist and for a single professional follow-up about related positioning
                  resources. Information will not be sold. Purchasing advisory is never required for
                  recruitment consideration. See the <Link to="/privacy">privacy note</Link>.
                </span>
              </label>
              {errors.consent ? <p className="field-error">{errors.consent}</p> : null}
              <div className="form-actions">
                <button className="btn" type="submit">
                  View the checklist
                </button>
              </div>
            </form>
          ) : (
            <div className="checklist-result">
              {notice ? <p className="deck">{notice}</p> : null}
              <article className="checklist-doc" id="checklist-print">
                <p className="kicker">Downloadable resource</p>
                <h2 className="section-title">{checklistMeta.title}</h2>
                <p className="deck">{checklistMeta.subtitle}</p>
                <ol className="checklist-ol">
                  {checklistQuestions.map((question) => (
                    <li key={question}>
                      <span />
                      <p>{question}</p>
                    </li>
                  ))}
                </ol>
                <p className="quiet-note">
                  Use these questions as a private diagnostic. They do not replace a professional
                  assessment, and they do not guarantee interviews or outcomes.
                </p>
              </article>
              <div className="form-actions">
                <button className="btn" type="button" onClick={() => window.print()}>
                  Print / save as PDF
                </button>
                <Link className="btn btn--ghost" to="/assessment">
                  Request a Career Assessment
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
