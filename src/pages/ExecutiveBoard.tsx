import { Link } from "react-router-dom";
import { Assurance, CtaBand } from "../components/Blocks";
import { cta } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

const evaluation = [
  "Enterprise leadership",
  "Strategic judgment",
  "Commercial impact",
  "Transformation",
  "Governance",
  "Stakeholder influence",
  "Risk",
  "Organizational leadership",
  "Market growth",
  "Capital allocation",
  "P&L responsibility",
  "Value creation",
  "Succession readiness",
];

const sections = [
  {
    id: "c-suite",
    title: "C-Suite Positioning",
    text: "Chief executives and functional C-suite leaders are read for enterprise leadership, P&L accountability, corporate strategy and the capacity to create enterprise value. The narrative establishes level quickly: scale, decision authority, commercial strategy, and the conditions under which results were achieved — including turnaround, restructuring, market expansion or international growth where those belong to the record.",
  },
  {
    id: "board",
    title: "Board Positioning",
    text: "Board chairs, non-executive and independent directors are assessed differently from operating executives. Governance literacy, risk management, Board engagement and the quality of challenge matter more than a reprinted executive CV. Proximity to a Board is not the same as having done a director’s work. Where committee contribution, shareholder value oversight or succession planning is real, it is stated exactly.",
  },
  {
    id: "biography",
    title: "Board Biography",
    text: "A Board biography is short, calm and usable by a nominations committee or search firm. It concentrates judgment, sector context, governance exposure and independence — not a catalogue of operational duties. It must agree with the Board-ready résumé/CV and with LinkedIn.",
  },
  {
    id: "resume",
    title: "Executive Resume/CV",
    text: "At this altitude, the document is an instrument of enterprise positioning. Leadership narrative, achievement architecture and quantified impact sit beside role and competency alignment. ATS-aware structure and keyword strategy support discoverability; they never replace evidence. Claims stay inside what a reference or interview can defend.",
  },
  {
    id: "linkedin",
    title: "Executive LinkedIn",
    text: "The public profile should make strategic leadership and commercial or institutional weight legible to readers who were not sent a CV. Headline, About and Experience stay consistent with the private materials. Recruiter discoverability matters; slogan language does not.",
  },
  {
    id: "narrative",
    title: "Leadership Narrative",
    text: "The selected story that holds across every instrument: experience, leadership value, career narrative, résumé/CV, LinkedIn, target opportunities and interview positioning. Cross-functional leadership, change leadership, digital transformation, M&A or post-merger integration appear only where the evidence supports them.",
  },
  {
    id: "search",
    title: "Executive Search Strategy",
    text: "A deliberate approach to the market: target-role and target-company strategy, executive search firm engagement, recruiter conversations, outreach messaging and opportunity evaluation. At C-Suite and Board level, a scatter of applications lowers the temperature of the conversations it hopes to start.",
  },
];

export function ExecutiveBoard() {
  usePageMeta(
    "Executive & Board Positioning — Joel Facco",
    "Positioning leadership for the C-Suite, Boardroom and beyond — enterprise leadership, governance, commercial impact and Board-ready narratives.",
  );

  return (
    <>
      <header className="page-header page-header--premium">
        <div className="container">
          <p className="kicker">Executive & Board</p>
          <h1>Positioning Leadership for the C-Suite, Boardroom and Beyond</h1>
          <p className="lede">
            At senior leadership level, career positioning changes. Decision-makers are no longer
            assessing only technical capability.
          </p>
        </div>
      </header>

      <section className="section section--dark">
        <div className="container">
          <p className="kicker kicker--light">What they are evaluating</p>
          <h2 className="section-title section-title--light">
            Enterprise weight, stated with evidence.
          </h2>
          <ul className="eval-grid">
            {evaluation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              My work at this level concentrates how enterprise leadership, strategic judgment and
              commercial impact are communicated — alongside governance, stakeholder influence and
              succession readiness where they form part of the record. The aim is a compelling,
              credible market narrative. No Board appointment or executive appointment is
              guaranteed.
            </p>
          </div>

          <div className="premium-sections">
            {sections.map((section, index) => (
              <article className="premium-block" id={section.id} key={section.id}>
                <span className="premium-block__n">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="hero__actions">
            <Link className="btn" to={cta.executive.href}>
              {cta.executive.label}
            </Link>
            <Link className="btn btn--ghost" to={cta.board.href}>
              {cta.board.label}
            </Link>
          </div>

          <Assurance />
        </div>
      </section>

      <CtaBand
        title="If the next conversation is C-Suite or Board, start with the evidence you already have."
        text="Share the level, the market and what you want clarified. Scope is agreed before advisory work begins."
        primary={cta.executive}
        secondary={cta.board}
      />
    </>
  );
}
