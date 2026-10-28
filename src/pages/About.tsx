import { Link } from "react-router-dom";
import { CtaBand } from "../components/Blocks";
import { Portrait } from "../components/Portrait";
import { cta, practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

const groundings = [
  "Clarity",
  "Evidence",
  "Relevance",
  "Integrity",
  "Confidentiality",
];

const expectations = [
  {
    title: "A direct reading",
    text: "What the record supports, what it does not yet show, and which markets can hear it.",
  },
  {
    title: "Discretion",
    text: "Career enquiries and hiring mandates are treated as confidential. Names are not published as proof of the practice.",
  },
  {
    title: "Separation",
    text: "Advisory and recruitment are identified at the start and kept distinct in scope and purpose.",
  },
  {
    title: "A clear no",
    text: "I decline work that would require invented evidence, and searches I am not equipped to conduct properly.",
  },
];

export function About() {
  usePageMeta(
    "About — VisionSpark Advisors | Joel Facco",
    "VisionSpark Advisors — where talent, positioning and opportunity meet. Joel Facco works at the intersection of recruitment, executive career positioning, résumé/CV strategy, LinkedIn and job-search strategy.",
    { path: "/about" },
  );

  return (
    <>
      <header className="page-header">
        <div className="container about-hero">
          <div className="about-hero__copy">
            <p className="kicker">{practice.brand}</p>
            <h1>Where Talent, Positioning and Opportunity Meet</h1>
            <p className="lede">
              I work at the intersection of recruitment, career strategy and professional
              positioning.
            </p>
            <p className="role" style={{ marginTop: 28 }}>
              {practice.name} · {practice.role}
            </p>
          </div>
          <div className="about-hero__media">
            <Portrait className="about-placeholder" width={720} height={900} />
          </div>
        </div>
      </header>

      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              Through conversations with professionals at different stages of their careers, I
              repeatedly see the same challenge: highly capable people often have considerably more
              value than their professional materials communicate.
            </p>
            <p>
              A strong career history does not automatically create a strong market narrative.
              Enterprise leadership, P&L accountability, transformation, governance or stakeholder
              influence may be present in the work — and still remain difficult for a hiring
              leader, recruiter or Board to identify on the page.
            </p>
            <p className="pull">
              That is why my work extends beyond identifying opportunities.
            </p>
            <p>
              I help professionals understand how their experience is being communicated, identify
              gaps between their capabilities and market presentation, and develop stronger
              positioning around the opportunities they want to pursue.
            </p>
            <p>
              My work can include independent recruitment, résumé/CV strategy, LinkedIn
              positioning, executive career strategy and job-search advisory. Whether I am assessing
              talent for an opportunity or helping a professional strengthen their career
              positioning, my approach is grounded in clarity, evidence, relevance, integrity and
              confidentiality.
            </p>
            <p>
              This is an independent practice. I do not present it as a multinational search firm.
              A fuller professional history is shared directly when a conversation or mandate calls
              for it — in confidence, without invented credentials, awards, placements or
              testimonials.
            </p>
          </div>

          <p className="trust-marks trust-marks--emphasis" aria-label="Working principles">
            {groundings.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>

          <div>
            <p className="kicker">Extended positioning</p>
            <ul className="role-list">
              {practice.extendedRole.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">What you can expect</p>
            <div className="dims" style={{ marginTop: 18 }}>
              {expectations.map((item) => (
                <article className="dim" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="prose">
            <p>
              <Link className="text-link" to="/how-it-works">
                How it works
              </Link>
              {" · "}
              <Link className="text-link" to="/executive-board">
                Executive & Board
              </Link>
              {" · "}
              <Link className="text-link" to="/recruitment">
                Recruitment
              </Link>
              {" · "}
              <Link className="text-link" to="/principles">
                Principles
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <p className="kicker">Core brand message</p>
          <h2 className="section-title" style={{ maxWidth: "18em" }}>
            Recruitment · Positioning · Résumé/CV · LinkedIn · Search
          </h2>
          <p className="deck" style={{ maxWidth: "40rem" }}>
            {practice.brandMessage}
          </p>
          <ul className="include-list include-list--compact" style={{ marginTop: 18 }}>
            {practice.differentiator.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Start a conversation."
        text="If the fit is real, the next step is a direct, confidential exchange — advisory or recruitment, clearly identified."
        primary={cta.conversation}
        secondary={cta.assessment}
      />
    </>
  );
}
