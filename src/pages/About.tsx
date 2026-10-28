import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

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
  {
    title: "Scope before work",
    text: "Advisory fees and deliverables are agreed before the work begins. Recruitment is not sold as a package with them.",
  },
];

export function About() {
  usePageMeta(
    "About Fakorede Joel — Executive Career Strategist",
    "Fakorede Joel is an executive career strategist and independent recruiter. He positions leadership for competitive markets and recruits separately for genuine opportunities.",
  );

  return (
    <>
      <PageHeader
        kicker="Independent practice"
        title={practice.name}
        lede="I help executives, senior leaders, and professionals strengthen how their experience, leadership value, achievements, and career potential are positioned in competitive employment markets."
      />
      <section className="page-section">
        <div className="container stack">
          <div>
            <p className="role" style={{ marginBottom: 8 }}>
              Primary positioning
            </p>
            <p className="lede" style={{ color: "var(--ink)" }}>
              {practice.role}
            </p>
            <p className="kicker" style={{ marginTop: 36 }}>
              Extended positioning
            </p>
            <ul className="role-list">
              {practice.extendedRole.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="prose prose--wide">
            <p className="pull" style={{ marginTop: 0 }}>
              {practice.statement}
            </p>
            <p>
              The practice sits where executive search, executive career strategy, and leadership
              positioning meet. I recruit independently for genuine opportunities. Separately,
              individuals engage me to position a career: the narrative, the résumé or CV, LinkedIn,
              the search, the interview, and the judgment around an opportunity.
            </p>
            <p>
              I work from both sides of the hiring equation. Candidates need their leadership value
              to be recognizable. Recruiters, hiring leaders, search professionals, and boards need
              that value in a form they can assess. A narrative that satisfies only one of those
              readings does not hold.
            </p>
            <p>
              A fuller professional history is shared directly, when it is relevant to a
              conversation or a mandate. It is shared in confidence. The public face of this
              practice is the work and the standard, not a constructed corporate identity and not a
              list of borrowed claims.
            </p>
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
              The sequence I align is experience, leadership value, career narrative, résumé or CV,
              LinkedIn, target opportunities, search strategy, interview positioning, and market
              communication.
            </p>
            <p>
              <Link className="text-link" to="/approach">
                The approach
              </Link>
              {" · "}
              <Link className="text-link" to="/principles">
                Principles
              </Link>
              {" · "}
              <Link className="text-link" to="/perspectives">
                Perspectives
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand
        title="If the fit is real, the next step is a direct conversation."
        text="Say whether you need advisory, a search, or to be considered. I will answer on that basis."
      />
    </>
  );
}
