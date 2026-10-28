import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { practice } from "../config";

const contexts = [
  "Chief executive / C-suite",
  "President / Managing Director",
  "Vice President / General Manager / Business Unit Leader",
  "Senior Director / Director",
  "Board chair / Board director / Non-executive",
  "Senior manager / Functional leader",
  "Federal or public-sector professional",
  "High-potential / mid-career professional",
  "Early-career professional",
  "Hiring leader",
  "Other",
];

const natures = [
  "Career assessment",
  "Reply to professional outreach",
  "Executive career positioning",
  "Résumé / CV positioning",
  "LinkedIn positioning",
  "Executive job search strategy",
  "Executive & Board positioning",
  "Opportunity assessment",
  "Interview positioning",
  "Schedule an initial consultation",
  "Discuss my next career move",
  "Recruitment — discuss a talent requirement",
  "Recruitment — please consider my candidacy / submit résumé",
  "Emerging talent",
  "A general conversation",
];

const intentToNature: Record<string, string> = {
  assessment: "Career assessment",
  advisory: "Career assessment",
  outreach: "Reply to professional outreach",
  contactout: "Reply to professional outreach",
  positioning: "Executive career positioning",
  resume: "Résumé / CV positioning",
  linkedin: "LinkedIn positioning",
  "search-strategy": "Executive job search strategy",
  "job-search": "Executive job search strategy",
  talent: "Recruitment — discuss a talent requirement",
  search: "Recruitment — discuss a talent requirement",
  candidacy: "Recruitment — please consider my candidacy / submit résumé",
  board: "Executive & Board positioning",
  "executive-board": "Executive & Board positioning",
  emerging: "Emerging talent",
  interview: "Interview positioning",
  opportunity: "Opportunity assessment",
};

type Errors = Partial<Record<"name" | "email" | "context" | "nature" | "message" | "ack", string>>;

function cleanLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function EnquiryForm() {
  const [params] = useSearchParams();
  const intent = params.get("intent") ?? "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [context, setContext] = useState("");
  const [nature, setNature] = useState("");
  const [message, setMessage] = useState("");
  const [ack, setAck] = useState(false);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  useEffect(() => {
    const mapped = intentToNature[intent];
    if (mapped) setNature(mapped);
    if (intent === "search" || intent === "talent") setContext("Hiring leader");
  }, [intent]);

  const letter = useMemo(() => {
    return [
      "Confidential enquiry",
      practice.name,
      "",
      `Nature: ${nature || "—"}`,
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      `Organization: ${organization || "—"}`,
      `Context: ${context || "—"}`,
      "",
      message.trim(),
      "",
      "I understand that career advisory is an independent professional service, separate from recruitment consideration, and that no interview, placement, Board appointment, executive appointment, or employment outcome is guaranteed.",
    ].join("\n");
  }, [name, email, organization, context, nature, message]);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please give your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please give an email address where you can be reached.";
    }
    if (!context) next.context = "Please select the context that fits best.";
    if (!nature) next.nature = "Please select the nature of the enquiry.";
    if (message.trim().length < 20) {
      next.message = "A few sentences of context are enough — at least a short paragraph.";
    }
    if (!ack) next.ack = "Please confirm you have read the boundary statement.";
    return next;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (hp) {
      setReady(true);
      return;
    }
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      setSummary("Please complete the highlighted fields.");
      setReady(false);
      return;
    }
    setSummary("");
    setReady(true);
    setCopied(false);
    setCopyFailed(false);
  }

  async function copyLetter() {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    }
  }

  function sendEmail() {
    if (!practice.email) return;
    const subject = encodeURIComponent(`Confidential enquiry — ${cleanLine(nature)}`);
    const body = encodeURIComponent(letter);
    const href = `mailto:${practice.email}?subject=${subject}&body=${body}`;
    if (href.length > 1900) {
      void copyLetter();
      return;
    }
    window.location.href = href;
  }

  if (ready) {
    return (
      <div className="form-success">
        <h2>Your note is ready to send.</h2>
        <p className="deck">
          It will be read personally and treated as confidential. Sending it is the step that
          places the enquiry.
          {practice.email
            ? " Open your email, or copy the note if the mail draft does not appear."
            : " Copy the note and send it through your direct channel to Fakorede Joel."}
        </p>
        <div className="letter">{letter}</div>
        <div className="form-actions">
          {practice.email ? (
            <button className="btn" type="button" onClick={sendEmail}>
              Open email
            </button>
          ) : null}
          <button className="btn btn--ghost" type="button" onClick={copyLetter}>
            {copied ? "Copied" : "Copy note"}
          </button>
          <button className="btn btn--ghost" type="button" onClick={() => setReady(false)}>
            Edit
          </button>
        </div>
        {copyFailed ? (
          <p className="field-error" role="alert">
            Copy was blocked by the browser. Select the note above and copy it manually.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      {summary ? (
        <p className="form-summary" role="alert">
          {summary}
        </p>
      ) : null}
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
          <label htmlFor="name">
            Name <span className="hint">Required</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? <p className="field-error">{errors.name}</p> : null}
        </div>
        <div className={errors.email ? "field is-invalid" : "field"}>
          <label htmlFor="email">
            Email <span className="hint">Required</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="organization">
          Organization <span className="hint">Optional</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
        />
      </div>
      <div className="form-row">
        <div className={errors.context ? "field is-invalid" : "field"}>
          <label htmlFor="context">Professional context</label>
          <select
            id="context"
            required
            value={context}
            onChange={(event) => setContext(event.target.value)}
          >
            <option value="">Select</option>
            {contexts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.context ? <p className="field-error">{errors.context}</p> : null}
        </div>
        <div className={errors.nature ? "field is-invalid" : "field"}>
          <label htmlFor="nature">Nature of enquiry</label>
          <select
            id="nature"
            required
            value={nature}
            onChange={(event) => setNature(event.target.value)}
          >
            <option value="">Select</option>
            {natures.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.nature ? <p className="field-error">{errors.nature}</p> : null}
        </div>
      </div>
      <div className={errors.message ? "field is-invalid" : "field"}>
        <label htmlFor="message">
          Message <span className="hint">Context, level, and what you want clarified</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        {errors.message ? <p className="field-error">{errors.message}</p> : null}
      </div>
      <div>
        <label className="check">
          <input
            type="checkbox"
            checked={ack}
            onChange={(event) => setAck(event.target.checked)}
          />
          <span>
            I understand that career advisory is an independent professional service, separate from
            recruitment consideration, and that no interview, placement, Board appointment,
            executive appointment, or employment outcome is guaranteed.
          </span>
        </label>
        {errors.ack ? <p className="field-error">{errors.ack}</p> : null}
      </div>
      <div className="form-actions">
        <button className="btn" type="submit">
          Compose enquiry
        </button>
        <p className="form-note">
          Read the <Link to="/privacy">privacy note</Link> and the{" "}
          <Link to="/principles">principles</Link>.
        </p>
      </div>
    </form>
  );
}
