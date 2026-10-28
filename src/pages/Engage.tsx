import { Link, useSearchParams } from "react-router-dom";
import { EnquiryForm } from "../components/EnquiryForm";
import { usePageMeta } from "../hooks/usePageMeta";

const paths = [
  { intent: "advisory", label: "Career advisory" },
  { intent: "search", label: "A search mandate" },
  { intent: "candidacy", label: "A candidacy" },
  { intent: "board", label: "Board" },
  { intent: "emerging", label: "Early career" },
];

const copy: Record<string, { title: string; text: string }> = {
  default: {
    title: "Begin a confidential enquiry.",
    text: "Say which conversation you need. Advisory is engaged by you. A search is a hiring conversation. A candidacy is a request to be considered for genuine opportunities. They are read differently.",
  },
  advisory: {
    title: "Request an advisory conversation.",
    text: "Advisory is engaged by you, independently. Tell me the level, the market, and what you want to be clearer about — a narrative, a document, a search, a board profile, or a decision.",
  },
  search: {
    title: "Discuss a search.",
    text: "If you are hiring, describe the role, the organization, and the context a recruiter would need. This is a conversation about a genuine mandate. It is separate from any advisory service.",
  },
  candidacy: {
    title: "Introduce a candidacy.",
    text: "If you wish to be considered for opportunities, send a concise introduction. Consideration is based on fit. It does not depend on purchasing advisory, résumé, or LinkedIn services.",
  },
  board: {
    title: "A board or portfolio conversation.",
    text: "Share the context — chair, non-executive, committee, or a first board — and what you want to clarify. Board positioning uses different evidence from an operating CV.",
  },
  emerging: {
    title: "An early-career enquiry.",
    text: "This part of the practice is for selected entry-level and early-career professionals. Tell me the stage you are at and the decision in front of you.",
  },
};

export function Engage() {
  const [params] = useSearchParams();
  const intent = params.get("intent") ?? "default";
  const active = copy[intent] ? intent : "default";
  const content = copy[active];

  usePageMeta(
    "Contact — Fakorede Joel",
    "Request a confidential conversation with Fakorede Joel about executive career advisory, a search mandate, or a candidacy. The routes are separate.",
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
                to={`/engage?intent=${path.intent}`}
                aria-current={active === path.intent ? "page" : undefined}
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
              <Link to="/principles">Read the principles</Link> before you write, if you have not
              already.
            </p>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
