import { Link, useSearchParams } from "react-router-dom";
import { EnquiryForm } from "../components/EnquiryForm";
import { usePageMeta } from "../hooks/usePageMeta";

const paths = [
  { intent: "assessment", label: "Career assessment" },
  { intent: "resume", label: "Resume/CV" },
  { intent: "linkedin", label: "LinkedIn" },
  { intent: "search-strategy", label: "Job search" },
  { intent: "board", label: "Executive & Board" },
  { intent: "talent", label: "Talent requirement" },
  { intent: "candidacy", label: "Submit résumé/CV" },
  { intent: "emerging", label: "Early career" },
];

const copy: Record<string, { title: string; text: string }> = {
  default: {
    title: "Begin a confidential enquiry.",
    text: "Say which conversation you need. A career assessment is advisory, engaged by you. A talent requirement is a hiring conversation. A résumé submission is a request to be considered for genuine opportunities. They are read differently.",
  },
  assessment: {
    title: "Request a career assessment.",
    text: "Share your level, the market you have in view, and what you want clarified — direction, narrative, documents, search, or a decision. Scope and fees are agreed before advisory work begins.",
  },
  resume: {
    title: "Enquire about Resume/CV positioning.",
    text: "This is strategic positioning of the document as a market instrument — not résumé writing for its own sake. Tell me the level and the opportunities in view.",
  },
  linkedin: {
    title: "Enquire about LinkedIn positioning.",
    text: "A public narrative that should agree with your résumé/CV and make leadership value discoverable. Share the altitude of the career and what feels inconsistent today.",
  },
  "search-strategy": {
    title: "Enquire about job-search strategy.",
    text: "Target roles, companies, search-firm engagement, outreach and interview positioning. Say where the search stands and what needs clarifying.",
  },
  board: {
    title: "An Executive & Board conversation.",
    text: "Share the context — C-Suite, chair, non-executive, committee, or a first board — and what you want to clarify.",
  },
  talent: {
    title: "Discuss a talent requirement.",
    text: "If you are hiring, describe the role, the organization, and the context a recruiter would need. For a full employer enquiry form, use the Recruitment page. This route remains separate from any advisory service.",
  },
  candidacy: {
    title: "Submit a résumé/CV for consideration.",
    text: "If you wish to be considered for opportunities, send a concise introduction. Consideration is based on fit. It does not depend on purchasing advisory services.",
  },
  emerging: {
    title: "An early-career enquiry.",
    text: "This part of the practice is for selected entry-level and early-career professionals. Tell me the stage you are at and the decision in front of you.",
  },
  advisory: {
    title: "Request a career assessment.",
    text: "Share your level, the market you have in view, and what you want clarified. Scope and fees are agreed before advisory work begins.",
  },
  search: {
    title: "Discuss a talent requirement.",
    text: "If you are hiring, describe the role, the organization, and the context a recruiter would need.",
  },
};

export function Contact() {
  const [params] = useSearchParams();
  const intent = params.get("intent") ?? "default";
  const active = copy[intent] ? intent : "default";
  const content = copy[active];

  usePageMeta(
    "Contact — Fakorede Joel",
    "Request a career assessment, discuss a talent requirement, or submit a résumé/CV. Confidential correspondence with Fakorede Joel.",
  );

  return (
    <section className="page-section" style={{ paddingTop: 48 }}>
      <div className="container engage-grid">
        <div className="engage-intro">
          <p className="kicker">Correspondence</p>
          <h1>{content.title}</h1>
          <p className="lede">{content.text}</p>
          <nav className="intent-switch" aria-label="Nature of enquiry">
            {paths.map((path) => (
              <Link
                key={path.intent}
                to={`/contact?intent=${path.intent}`}
                aria-current={active === path.intent || (active === "advisory" && path.intent === "assessment") || (active === "search" && path.intent === "talent") ? "page" : undefined}
              >
                {path.label}
              </Link>
            ))}
          </nav>
          <div className="prose">
            <p>What happens next is straightforward.</p>
            <p>You send the note. I read it personally.</p>
            <p>
              If I can be useful, I propose a conversation. Scope, the separation of services, and
              fees — where advisory is involved — are agreed before work begins.
            </p>
            <p>If I am not the right person, I will say so.</p>
            <p>
              {active === "talent" || active === "search" ? (
                <>
                  Prefer the structured employer form?{" "}
                  <Link to="/recruitment#hiring-enquiry">Discuss Your Hiring Requirement</Link>
                  {" · "}
                </>
              ) : null}
              <Link to="/faq">Read the FAQ</Link>
              {" · "}
              <Link to="/principles">Principles</Link>
            </p>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
