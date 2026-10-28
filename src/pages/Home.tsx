import { Link } from "react-router-dom";
import { CtaBand, Chain, SectionHead } from "../components/Blocks";
import { practice } from "../config";
import { dimensions, engagementSteps, featuredTitles, homeAudiences } from "../content";
import { usePageMeta } from "../hooks/usePageMeta";

const featured = featuredTitles
  .map((title) => dimensions.find((item) => item.title === title))
  .filter((item): item is (typeof dimensions)[number] => Boolean(item));

export function Home() {
  usePageMeta(
    "Fakorede Joel — Executive Career Strategist & Independent Recruiter",
    "Fakorede Joel helps executives, senior leaders, and selected professionals position experience, leadership value, and career potential. Independent recruiting and career advisory are separate practices.",
  );

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="kicker">{practice.name}</p>
            <h1 className="hero__title">
              <span>Positioning leadership.</span>
              <span>Connecting talent.</span>
              <span className="em">Creating career momentum.</span>
            </h1>
            <p className="role">Executive Career Strategist · Independent Recruiter</p>
            <p className="lede">
              I help executives, senior leaders, and professionals strengthen how their experience,
              leadership value, achievements, and career potential are positioned in competitive
              markets.
            </p>
            <div className="hero__actions">
              <Link className="btn" to="/engage?intent=advisory">
                Request a conversation
              </Link>
              <Link className="text-link" to="/approach">
                The positioning approach
              </Link>
            </div>
            <p className="hero__quiet">
              Hiring for a role? <Link to="/engage?intent=search">Discuss a search mandate</Link>
            </p>
          </div>
          <aside className="panel" aria-label="Practice index">
            <p className="panel__label">The practice</p>
            <ol>
              <li>
                <span>01</span> Executive career strategy
              </li>
              <li>
                <span>02</span> Independent recruiting
              </li>
              <li>
                <span>03</span> Résumé and CV positioning
              </li>
              <li>
                <span>04</span> LinkedIn positioning
              </li>
              <li>
                <span>05</span> Board and C-suite positioning
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="band" aria-label="Areas of practice">
        <div className="container">
          <p>{practice.supporting}</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            kicker="01 — The hiring equation"
            title="Both sides of the decision, held in one practice."
            deck="I understand what a candidate needs to communicate, and what recruiters, hiring leaders, search professionals, and decision-makers need to understand."
          />
          <div className="split">
            <div className="split__col">
              <p className="kicker">From the candidate</p>
              <h3>A true account of leadership value</h3>
              <p>
                The substance of a career: judgment, scope, and the difference a leader made.
                Context, constraints, and consequence — told so the person who lived the work
                still recognizes it.
              </p>
            </div>
            <div className="split__col">
              <p className="kicker">From the decision-maker</p>
              <h3>Evidence that can be assessed</h3>
              <p>
                Whether the record supports the role. Scale, accountability, stakeholders, and the
                conditions under which results were achieved. Enough clarity to advance a
                conversation, or to decline one fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="container">
          <p className="kicker kicker--light">02 — Positioning philosophy</p>
          <blockquote>Strong experience alone does not guarantee strong market positioning.</blockquote>
          <p className="deck">
            Accomplished professionals often describe a career as a list of duties. Markets respond
            to evidence of value: scale, scope, commercial or institutional impact, governance, and
            the complexity a leader has actually held. My role is to turn experience into a
            compelling, credible, evidence-based market narrative.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link className="text-link text-link--light" to="/approach">
              Read the approach
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="03 — The sequence"
            title="A résumé is one part of a market position."
            deck="The work aligns the full sequence, so the document, the public profile, the search, and the interview tell the same truth."
          />
          <Chain />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            kicker="04 — What often stays implicit"
            title="The market reads for what the duties leave out."
            deck="These are dimensions I listen for. A career rarely needs all of them. It does need the ones that are true, stated at the right altitude."
          />
          <div className="dims">
            {featured.map((item) => (
              <article className="dim" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="more-link">
            <Link className="text-link" to="/approach">
              The full positioning lens
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="05 — Two practices"
            title="Recruitment and advisory, held apart."
            deck="They meet different needs. They are engaged separately. One is never the price of the other."
          />
          <div className="practices">
            <Link className="practice" to="/recruitment">
              <p className="kicker">Recruitment</p>
              <h3>Genuine opportunities</h3>
              <p>
                I source, assess, and consider candidates for real employment opportunities. The
                obligation is to the role, and to a fair reading of fit.
              </p>
              <span className="text-link">How recruiting works</span>
            </Link>
            <Link className="practice" to="/advisory">
              <p className="kicker">Candidate-paid advisory</p>
              <h3>Positioning, engaged independently</h3>
              <p>
                Individuals engage me for résumé and CV positioning, LinkedIn, job-search strategy,
                interview preparation, and broader career counsel.
              </p>
              <span className="text-link">Advisory services</span>
            </Link>
          </div>
          <p className="quiet-note">
            Purchasing advisory, résumé, LinkedIn, or positioning services is never a condition of
            being considered for a genuine opportunity.{" "}
            <Link to="/principles">The professional boundaries</Link>
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            kicker="06 — Who the work serves"
            title="Executive in character. Specific in audience."
            deck="The practice is built for senior leadership and remains available, with the same discretion, to directors, public-sector professionals, and selected earlier careers."
          />
          <div className="audience-grid">
            {homeAudiences.map((item) => (
              <Link className="audience-card" to={item.href} key={item.title}>
                <p className="kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="text-link">{item.label}</span>
              </Link>
            ))}
          </div>
          <p className="quiet-note">
            Entry-level and early-career work sits in its own section, so the executive standard of
            the practice stays clear. <Link to="/emerging">Emerging talent</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="07 — An engagement"
            title="How the work proceeds."
            deck="Fees, where advisory is involved, are discussed once the scope is clear. Nothing is started on assumption."
          />
          <ol className="steps">
            {engagementSteps.map((step) => (
              <li className="step" key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="quiet-note">
            No interview, placement, Board appointment, or executive appointment is guaranteed.
            Recommendations follow professional assessment and the information available.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
