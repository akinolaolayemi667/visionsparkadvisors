import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { practice } from "../config";
import { fileToBase64, openMailto, submitIntake } from "../lib/intake";

const steps = [
  "Professional information",
  "Career direction",
  "Current challenges",
  "Resume/CV",
  "Engagement interest",
] as const;

const challenges = [
  "Not getting interviews",
  "Resume/CV positioning",
  "LinkedIn visibility",
  "Executive positioning",
  "Board positioning",
  "Career direction",
  "Interview positioning",
  "Recruiter engagement",
  "Networking",
  "Career transition",
  "Other",
] as const;

const engagementOptions = [
  "Resume/CV only",
  "LinkedIn",
  "Executive positioning",
  "Board positioning",
  "Job-search strategy",
  "Full career positioning",
  "Not sure — recommend the best option",
] as const;

const seniorityOptions = [
  "C-suite / Chief executive",
  "President / Managing Director",
  "Vice President / General Manager / BU Leader",
  "Senior Director / Director",
  "Board / Non-executive",
  "Senior manager / Functional leader",
  "Other",
];

const workModes = ["Remote", "Hybrid", "On-site", "Flexible / open"] as const;

type Errors = Record<string, string>;

function cleanLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [region, setRegion] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [targetSeniority, setTargetSeniority] = useState("");
  const [targetIndustry, setTargetIndustry] = useState("");
  const [targetGeography, setTargetGeography] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [activelySearching, setActivelySearching] = useState("");
  const [openToOpportunities, setOpenToOpportunities] = useState("");
  const [preparingFuture, setPreparingFuture] = useState("");
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [challengeOther, setChallengeOther] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileNote, setFileNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [engagement, setEngagement] = useState("");
  const [ack, setAck] = useState(false);
  const [hp, setHp] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [statusNote, setStatusNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  const letter = useMemo(() => {
    const challengeLine = [
      ...selectedChallenges.filter((item) => item !== "Other"),
      selectedChallenges.includes("Other") && challengeOther.trim()
        ? `Other: ${challengeOther.trim()}`
        : selectedChallenges.includes("Other")
          ? "Other"
          : null,
    ]
      .filter(Boolean)
      .join("; ");

    return [
      "Career assessment request",
      practice.name,
      "",
      `Name: ${fullName || "—"}`,
      `Email: ${email || "—"}`,
      `LinkedIn: ${linkedin || "—"}`,
      `Current/most recent role: ${role || "—"}`,
      `Industry: ${industry || "—"}`,
      `Country/region: ${region || "—"}`,
      "",
      `Target role: ${targetRole || "—"}`,
      `Target seniority: ${targetSeniority || "—"}`,
      `Target industry: ${targetIndustry || "—"}`,
      `Target geography: ${targetGeography || "—"}`,
      `Work mode preference: ${workMode || "—"}`,
      `Actively searching: ${activelySearching || "—"}`,
      `Open to opportunities: ${openToOpportunities || "—"}`,
      `Preparing for future move: ${preparingFuture || "—"}`,
      "",
      `Current challenges: ${challengeLine || "—"}`,
      `Resume/CV file: ${fileName || "Not attached in form — will attach when sending"}`,
      fileNote ? `File note: ${fileNote}` : null,
      "",
      `Engagement interest: ${engagement || "—"}`,
      "",
      "I understand that career advisory is an independent professional service, separate from recruitment consideration, and that no interview, placement, Board appointment, executive appointment, or employment outcome is guaranteed.",
      "I consent to this information being used to respond to my assessment request and to discuss possible scope. I have read the privacy note.",
    ]
      .filter((line) => line !== null)
      .join("\n");
  }, [
    fullName,
    email,
    linkedin,
    role,
    industry,
    region,
    targetRole,
    targetSeniority,
    targetIndustry,
    targetGeography,
    workMode,
    activelySearching,
    openToOpportunities,
    preparingFuture,
    selectedChallenges,
    challengeOther,
    fileName,
    fileNote,
    engagement,
  ]);

  function toggleChallenge(item: string) {
    setSelectedChallenges((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  }

  function validateStep(index: number): Errors {
    const next: Errors = {};
    if (index === 0) {
      if (firstName.trim().length < 1) next.firstName = "Required.";
      if (lastName.trim().length < 1) next.lastName = "Required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email.";
      if (role.trim().length < 2) next.role = "Required.";
      if (industry.trim().length < 2) next.industry = "Required.";
      if (region.trim().length < 2) next.region = "Required.";
    }
    if (index === 1) {
      if (targetRole.trim().length < 2) next.targetRole = "Required.";
      if (!targetSeniority) next.targetSeniority = "Required.";
      if (!workMode) next.workMode = "Required.";
      if (!activelySearching) next.activelySearching = "Required.";
      if (!openToOpportunities) next.openToOpportunities = "Required.";
      if (!preparingFuture) next.preparingFuture = "Required.";
    }
    if (index === 2) {
      if (!selectedChallenges.length) next.challenges = "Select at least one.";
      if (selectedChallenges.includes("Other") && challengeOther.trim().length < 2) {
        next.challengeOther = "Please briefly describe.";
      }
    }
    if (index === 3) {
      if (!fileName) next.file = "Add a résumé/CV file name, or note that you will attach it when sending.";
    }
    if (index === 4) {
      if (!engagement) next.engagement = "Select an option.";
      if (!ack) next.ack = "Please confirm before submitting.";
    }
    return next;
  }

  function goNext() {
    const next = validateStep(step);
    setErrors(next);
    if (Object.keys(next).length) return;
    setStep((value) => Math.min(value + 1, steps.length - 1));
  }

  function goBack() {
    setErrors({});
    setStep((value) => Math.max(value - 1, 0));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (hp) {
      setSent(true);
      return;
    }
    const next = validateStep(4);
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setStatusNote("");
    setCopied(false);
    setCopyFailed(false);

    let attachment = null;
    if (resumeFile) {
      try {
        attachment = await fileToBase64(resumeFile);
      } catch {
        setSending(false);
        setStatusNote("Could not read the résumé/CV file. Try a smaller PDF or DOC.");
        return;
      }
    }

    const result = await submitIntake({
      type: "career-assessment",
      subject: `Career assessment — ${cleanLine(fullName)}`,
      name: fullName,
      replyTo: email.trim(),
      message: letter,
      honeypot: hp,
      attachment,
      fields: {
        TargetRole: targetRole,
        Engagement: engagement,
        Region: region,
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
    const body = `${letter}\n\n(If your résumé/CV was not embedded, please attach: ${fileName || "your current résumé/CV"})`;
    if (!openMailto(practice.email, `Career assessment — ${cleanLine(fullName)}`, body)) {
      void copyLetter();
    }
  }

  if (ready && sent) {
    return (
      <div className="form-success">
        <h2>
          {fallback
            ? "Almost there — send the request to complete."
            : "Your assessment request has been sent."}
        </h2>
        <p className="deck">
          {fallback
            ? `Direct delivery is temporarily unavailable. Copy the request or open email${fileName ? ` and attach ${fileName}` : ""}. The request is read personally and treated as confidential.`
            : "It will be read personally and treated as confidential. Scope and fees for any advisory work are agreed before engagement begins."}
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
              {copied ? "Copied" : "Copy request"}
            </button>
          ) : null}
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => {
              setReady(false);
              setSent(false);
              setFallback(false);
              setStep(4);
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
    <form className="form form--wizard" noValidate onSubmit={onSubmit}>
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

      <ol className="wizard-steps" aria-label="Assessment steps">
        {steps.map((label, index) => (
          <li key={label} className={index === step ? "is-active" : index < step ? "is-done" : undefined}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <fieldset className="wizard-panel">
          <legend>Professional information</legend>
          <div className="form-row">
            <div className={errors.firstName ? "field is-invalid" : "field"}>
              <label htmlFor="af-first">Full name — first</label>
              <input
                id="af-first"
                value={firstName}
                autoComplete="given-name"
                onChange={(event) => setFirstName(event.target.value)}
              />
              {errors.firstName ? <p className="field-error">{errors.firstName}</p> : null}
            </div>
            <div className={errors.lastName ? "field is-invalid" : "field"}>
              <label htmlFor="af-last">Last</label>
              <input
                id="af-last"
                value={lastName}
                autoComplete="family-name"
                onChange={(event) => setLastName(event.target.value)}
              />
              {errors.lastName ? <p className="field-error">{errors.lastName}</p> : null}
            </div>
          </div>
          <div className={errors.email ? "field is-invalid" : "field"}>
            <label htmlFor="af-email">Email</label>
            <input
              id="af-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email ? <p className="field-error">{errors.email}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="af-linkedin">
              LinkedIn URL <span className="hint">Optional</span>
            </label>
            <input
              id="af-linkedin"
              type="url"
              inputMode="url"
              placeholder="https://www.linkedin.com/in/…"
              value={linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
            />
          </div>
          <div className={errors.role ? "field is-invalid" : "field"}>
            <label htmlFor="af-role">Current / most recent role</label>
            <input id="af-role" value={role} onChange={(event) => setRole(event.target.value)} />
            {errors.role ? <p className="field-error">{errors.role}</p> : null}
          </div>
          <div className="form-row">
            <div className={errors.industry ? "field is-invalid" : "field"}>
              <label htmlFor="af-industry">Industry</label>
              <input
                id="af-industry"
                value={industry}
                onChange={(event) => setIndustry(event.target.value)}
              />
              {errors.industry ? <p className="field-error">{errors.industry}</p> : null}
            </div>
            <div className={errors.region ? "field is-invalid" : "field"}>
              <label htmlFor="af-region">Country / region</label>
              <input
                id="af-region"
                value={region}
                onChange={(event) => setRegion(event.target.value)}
              />
              {errors.region ? <p className="field-error">{errors.region}</p> : null}
            </div>
          </div>
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset className="wizard-panel">
          <legend>Career direction</legend>
          <div className={errors.targetRole ? "field is-invalid" : "field"}>
            <label htmlFor="af-target-role">Target role</label>
            <input
              id="af-target-role"
              value={targetRole}
              onChange={(event) => setTargetRole(event.target.value)}
            />
            {errors.targetRole ? <p className="field-error">{errors.targetRole}</p> : null}
          </div>
          <div className={errors.targetSeniority ? "field is-invalid" : "field"}>
            <label htmlFor="af-seniority">Target seniority</label>
            <select
              id="af-seniority"
              value={targetSeniority}
              onChange={(event) => setTargetSeniority(event.target.value)}
            >
              <option value="">Select</option>
              {seniorityOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.targetSeniority ? (
              <p className="field-error">{errors.targetSeniority}</p>
            ) : null}
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="af-target-industry">
                Target industry <span className="hint">Optional</span>
              </label>
              <input
                id="af-target-industry"
                value={targetIndustry}
                onChange={(event) => setTargetIndustry(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="af-target-geo">
                Target geography <span className="hint">Optional</span>
              </label>
              <input
                id="af-target-geo"
                value={targetGeography}
                onChange={(event) => setTargetGeography(event.target.value)}
              />
            </div>
          </div>
          <div className={errors.workMode ? "field is-invalid" : "field"}>
            <label htmlFor="af-mode">Remote / hybrid / on-site preference</label>
            <select
              id="af-mode"
              value={workMode}
              onChange={(event) => setWorkMode(event.target.value)}
            >
              <option value="">Select</option>
              {workModes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.workMode ? <p className="field-error">{errors.workMode}</p> : null}
          </div>
          <div className="form-row form-row--triple">
            <YesNo
              id="af-active"
              label="Actively searching?"
              value={activelySearching}
              error={errors.activelySearching}
              onChange={setActivelySearching}
            />
            <YesNo
              id="af-open"
              label="Open to opportunities?"
              value={openToOpportunities}
              error={errors.openToOpportunities}
              onChange={setOpenToOpportunities}
            />
            <YesNo
              id="af-future"
              label="Preparing for future move?"
              value={preparingFuture}
              error={errors.preparingFuture}
              onChange={setPreparingFuture}
            />
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="wizard-panel">
          <legend>Current challenges</legend>
          <p className="field-hint">Select all that apply.</p>
          <div className="check-grid">
            {challenges.map((item) => (
              <label className="check" key={item}>
                <input
                  type="checkbox"
                  checked={selectedChallenges.includes(item)}
                  onChange={() => toggleChallenge(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          {errors.challenges ? <p className="field-error">{errors.challenges}</p> : null}
          {selectedChallenges.includes("Other") ? (
            <div className={errors.challengeOther ? "field is-invalid" : "field"}>
              <label htmlFor="af-other">Other — briefly</label>
              <input
                id="af-other"
                value={challengeOther}
                onChange={(event) => setChallengeOther(event.target.value)}
              />
              {errors.challengeOther ? (
                <p className="field-error">{errors.challengeOther}</p>
              ) : null}
            </div>
          ) : null}
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset className="wizard-panel">
          <legend>Resume/CV upload</legend>
          <p className="deck">
            Select your current résumé or CV. The file stays on your device until you send the
            composed request by email and attach it there. This site does not upload documents to a
            server.
          </p>
          <div className={errors.file ? "field is-invalid" : "field"}>
            <label htmlFor="af-file">Resume/CV file</label>
            <input
              id="af-file"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) {
                  setFileName("");
                  setFileNote("");
                  setResumeFile(null);
                  return;
                }
                setResumeFile(file);
                setFileName(file.name);
                setFileNote(`${Math.round(file.size / 1024)} KB · ${file.type || "document"}`);
              }}
            />
            {fileName ? (
              <p className="field-hint">
                Selected: {fileName}
                {fileNote ? ` (${fileNote})` : ""}.
                {resumeFile
                  ? " This file will be included with your request when possible."
                  : " Attach this file if you send by email."}
              </p>
            ) : null}
            {errors.file ? <p className="field-error">{errors.file}</p> : null}
          </div>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => {
              setResumeFile(null);
              setFileName("Will attach when sending");
              setFileNote("No file selected in browser — candidate will attach manually.");
              setErrors((current) => {
                const next = { ...current };
                delete next.file;
                return next;
              });
            }}
          >
            I will attach the file when sending
          </button>
        </fieldset>
      ) : null}

      {step === 4 ? (
        <fieldset className="wizard-panel">
          <legend>Engagement interest</legend>
          <div className={errors.engagement ? "field is-invalid" : "field"}>
            <div className="radio-grid">
              {engagementOptions.map((item) => (
                <label className="check" key={item}>
                  <input
                    type="radio"
                    name="engagement"
                    checked={engagement === item}
                    onChange={() => setEngagement(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            {errors.engagement ? <p className="field-error">{errors.engagement}</p> : null}
          </div>
          <label className="check">
            <input
              type="checkbox"
              checked={ack}
              onChange={(event) => setAck(event.target.checked)}
            />
            <span>
              I understand that career advisory is separate from recruitment consideration, that no
              interview or placement is guaranteed, and that this information will be used only to
              respond to my assessment request, in line with the{" "}
              <Link to="/privacy">privacy note</Link>.
            </span>
          </label>
          {errors.ack ? <p className="field-error">{errors.ack}</p> : null}
        </fieldset>
      ) : null}

      <div className="form-actions wizard-actions">
        {step > 0 ? (
          <button className="btn btn--ghost" type="button" onClick={goBack}>
            Back
          </button>
        ) : null}
        {step < steps.length - 1 ? (
          <button className="btn" type="button" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button className="btn" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Request My Assessment"}
          </button>
        )}
      </div>
      {statusNote && !sent ? (
        <p className="field-error" role="alert">
          {statusNote}
        </p>
      ) : null}
    </form>
  );
}

function YesNo({
  id,
  label,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className={error ? "field is-invalid" : "field"}>
      <p className="field-label" id={`${id}-label`}>
        {label}
      </p>
      <div className="yesno" role="group" aria-labelledby={`${id}-label`}>
        {["Yes", "No"].map((option) => (
          <label className="check check--inline" key={option}>
            <input
              type="radio"
              name={id}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}
