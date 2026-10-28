import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { practice } from "../config";
import { openMailto, submitIntake } from "../lib/intake";

const arrangements = ["On-site", "Hybrid", "Remote", "Flexible / to be discussed"];
const seniorities = [
  "C-Suite / Chief Officer",
  "President / Managing Director",
  "EVP / SVP / VP",
  "General Manager / Country or Regional Leader",
  "Director / Senior Director",
  "Senior Manager / Manager",
  "Specialist / Professional",
  "Board / Non-Executive",
  "Other / multiple levels",
];
const timelines = [
  "Immediate",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Exploratory / market mapping",
];

type Errors = Partial<
  Record<
    | "name"
    | "company"
    | "position"
    | "email"
    | "requirement"
    | "roleTitle"
    | "location"
    | "arrangement"
    | "seniority"
    | "timeline"
    | "message"
    | "ack",
    string
  >
>;

function cleanLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function EmployerForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [location, setLocation] = useState("");
  const [arrangement, setArrangement] = useState("");
  const [seniority, setSeniority] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [ack, setAck] = useState(false);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState("");
  const [ready, setReady] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [statusNote, setStatusNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const letter = useMemo(() => {
    return [
      "Hiring requirement enquiry",
      practice.name,
      "",
      `Name: ${name || "—"}`,
      `Company: ${company || "—"}`,
      `Position: ${position || "—"}`,
      `Email: ${email || "—"}`,
      `Hiring requirement: ${requirement || "—"}`,
      `Role title: ${roleTitle || "—"}`,
      `Location: ${location || "—"}`,
      `Work arrangement: ${arrangement || "—"}`,
      `Seniority: ${seniority || "—"}`,
      `Timeline: ${timeline || "—"}`,
      "",
      message.trim(),
      "",
      "I understand that recruitment consideration is separate from candidate-paid career advisory, and that no interview, placement, Board appointment, executive appointment, or employment outcome is guaranteed.",
    ].join("\n");
  }, [
    name,
    company,
    position,
    email,
    requirement,
    roleTitle,
    location,
    arrangement,
    seniority,
    timeline,
    message,
  ]);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please give your name.";
    if (company.trim().length < 2) next.company = "Please give the company or organization.";
    if (position.trim().length < 2) next.position = "Please give your position.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please give a work email where you can be reached.";
    }
    if (requirement.trim().length < 12) {
      next.requirement = "Briefly describe the hiring requirement.";
    }
    if (roleTitle.trim().length < 2) next.roleTitle = "Please give the role title.";
    if (location.trim().length < 2) next.location = "Please give a location or market.";
    if (!arrangement) next.arrangement = "Please select a work arrangement.";
    if (!seniority) next.seniority = "Please select the seniority.";
    if (!timeline) next.timeline = "Please select a timeline.";
    if (message.trim().length < 20) {
      next.message = "A short paragraph on context, constraints or success criteria is enough.";
    }
    if (!ack) next.ack = "Please confirm you have read the boundary statement.";
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (hp) {
      setSent(true);
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
    setSending(true);
    setStatusNote("");
    setCopied(false);
    setCopyFailed(false);

    const result = await submitIntake({
      type: "hiring-requirement",
      subject: `Hiring requirement — ${cleanLine(roleTitle || company)}`,
      name: name.trim(),
      replyTo: email.trim(),
      message: letter,
      honeypot: hp,
      fields: {
        Company: company.trim(),
        Position: position.trim(),
        RoleTitle: roleTitle.trim(),
        Location: location.trim(),
        Timeline: timeline,
      },
    });

    setSending(false);

    if (result.ok) {
      setSent(true);
      setFallback(false);
      setReady(true);
      return;
    }

    setFallback(true);
    setSent(true);
    setReady(true);
    setStatusNote(result.error);
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
    if (
      !openMailto(
        practice.email,
        `Hiring requirement — ${cleanLine(roleTitle || company)}`,
        letter,
      )
    ) {
      void copyLetter();
    }
  }

  if (ready && sent) {
    return (
      <div className="form-success">
        <h2>
          {fallback
            ? "Almost there — send the note to complete."
            : "Your hiring note has been sent."}
        </h2>
        <p className="deck">
          {fallback
            ? "Direct delivery is temporarily unavailable. Copy the note or open email. It will be read personally and treated as confidential."
            : "It will be read personally and treated as confidential. Recruitment consideration remains separate from candidate-paid career advisory."}
        </p>
        {statusNote ? <p className="field-error">{statusNote}</p> : null}
        {fallback ? <div className="letter">{letter}</div> : null}
        <div className="form-actions">
          {fallback && practice.email ? (
            <button className="btn" type="button" onClick={sendEmail}>
              Open email
            </button>
          ) : null}
          {fallback ? (
            <button className="btn btn--ghost" type="button" onClick={copyLetter}>
              {copied ? "Copied" : "Copy note"}
            </button>
          ) : null}
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => {
              setReady(false);
              setSent(false);
              setFallback(false);
            }}
          >
            {fallback ? "Edit" : "Done"}
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
          <label htmlFor="employer-name">
            Name <span className="hint">Required</span>
          </label>
          <input
            id="employer-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? <p className="field-error">{errors.name}</p> : null}
        </div>
        <div className={errors.company ? "field is-invalid" : "field"}>
          <label htmlFor="employer-company">
            Company <span className="hint">Required</span>
          </label>
          <input
            id="employer-company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          {errors.company ? <p className="field-error">{errors.company}</p> : null}
        </div>
      </div>
      <div className="form-row">
        <div className={errors.position ? "field is-invalid" : "field"}>
          <label htmlFor="employer-position">
            Position <span className="hint">Your role</span>
          </label>
          <input
            id="employer-position"
            type="text"
            autoComplete="organization-title"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          />
          {errors.position ? <p className="field-error">{errors.position}</p> : null}
        </div>
        <div className={errors.email ? "field is-invalid" : "field"}>
          <label htmlFor="employer-email">
            Email <span className="hint">Required</span>
          </label>
          <input
            id="employer-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>
      </div>
      <div className={errors.requirement ? "field is-invalid" : "field"}>
        <label htmlFor="employer-requirement">Hiring requirement</label>
        <input
          id="employer-requirement"
          type="text"
          value={requirement}
          onChange={(event) => setRequirement(event.target.value)}
        />
        {errors.requirement ? <p className="field-error">{errors.requirement}</p> : null}
      </div>
      <div className="form-row">
        <div className={errors.roleTitle ? "field is-invalid" : "field"}>
          <label htmlFor="employer-role">Role title</label>
          <input
            id="employer-role"
            type="text"
            value={roleTitle}
            onChange={(event) => setRoleTitle(event.target.value)}
          />
          {errors.roleTitle ? <p className="field-error">{errors.roleTitle}</p> : null}
        </div>
        <div className={errors.location ? "field is-invalid" : "field"}>
          <label htmlFor="employer-location">Location</label>
          <input
            id="employer-location"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          {errors.location ? <p className="field-error">{errors.location}</p> : null}
        </div>
      </div>
      <div className="form-row">
        <div className={errors.arrangement ? "field is-invalid" : "field"}>
          <label htmlFor="employer-arrangement">Work arrangement</label>
          <select
            id="employer-arrangement"
            required
            value={arrangement}
            onChange={(event) => setArrangement(event.target.value)}
          >
            <option value="">Select</option>
            {arrangements.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.arrangement ? <p className="field-error">{errors.arrangement}</p> : null}
        </div>
        <div className={errors.seniority ? "field is-invalid" : "field"}>
          <label htmlFor="employer-seniority">Seniority</label>
          <select
            id="employer-seniority"
            required
            value={seniority}
            onChange={(event) => setSeniority(event.target.value)}
          >
            <option value="">Select</option>
            {seniorities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.seniority ? <p className="field-error">{errors.seniority}</p> : null}
        </div>
      </div>
      <div className={errors.timeline ? "field is-invalid" : "field"}>
        <label htmlFor="employer-timeline">Timeline</label>
        <select
          id="employer-timeline"
          required
          value={timeline}
          onChange={(event) => setTimeline(event.target.value)}
        >
          <option value="">Select</option>
          {timelines.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.timeline ? <p className="field-error">{errors.timeline}</p> : null}
      </div>
      <div className={errors.message ? "field is-invalid" : "field"}>
        <label htmlFor="employer-message">
          Message <span className="hint">Context, constraints, success criteria</span>
        </label>
        <textarea
          id="employer-message"
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
            I understand that recruitment consideration is separate from candidate-paid career
            advisory, and that no interview, placement, Board appointment, executive appointment, or
            employment outcome is guaranteed.
          </span>
        </label>
        {errors.ack ? <p className="field-error">{errors.ack}</p> : null}
      </div>
      <div className="form-actions">
        <button className="btn" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send hiring enquiry"}
        </button>
        <p className="form-note">
          Read the <Link to="/privacy">privacy note</Link> and the{" "}
          <Link to="/principles">principles</Link>.
        </p>
      </div>
    </form>
  );
}
