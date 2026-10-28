import { Link } from "react-router-dom";
import { Assurance, Chain, CtaBand, PageHeader, SectionHead } from "../components/Blocks";
import { dimensions } from "../content";
import { usePageMeta } from "../hooks/usePageMeta";

const groups = [...new Set(dimensions.map((item) => item.group))];

export function Approach() {
  usePageMeta(
    "The Positioning Approach — Fakorede Joel",
    "Positioning turns a record of experience into a narrative a hiring leader, a board, or a search professional can trust. Strong experience alone does not guarantee a strong market position.",
  );

  return (
    <>
      <PageHeader
        kicker="Approach"
        title="Experience becomes a market position."
        lede="Strong experience alone does not guarantee strong market positioning. The work is to make leadership value legible — credible to the person who lived it, and usable to the person who must decide."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              A résumé or CV is one part of a professional’s market positioning. It is an
              instrument. The position itself is the alignment of experience, leadership value,
              career narrative, documents, public profile, target opportunities, search strategy,
              interview, and the way the career is discussed.
            </p>
            <p>
              Many highly accomplished people understate the things a market uses to judge
              seniority: scale, scope, leadership, transformation, commercial impact, strategic
              influence, organizational complexity, enterprise value, and governance. The record
              contains them. The telling does not. My role is to turn that record into a compelling,
              credible, evidence-based narrative.
            </p>
            <p>
              Claims stay inside what the evidence supports. A contribution is described as a
              contribution. Ownership is described as ownership. That restraint is what allows the
              rest of the story to be believed in a reference, a board conversation, or an
              interview.
            </p>
            <p>
              I use résumé and CV according to the market in view. The positioning standard does
              not change with the label on the document.
            </p>
          </div>

          <div>
            <SectionHead
              kicker="The sequence"
              title="From the record to the market."
              deck="Each step has a job. When they disagree, a careful reader trusts none of them fully."
            />
            <Chain />
          </div>

          <div>
            <SectionHead
              kicker="A lens for leadership value"
              title="What I listen for."
              deck="Not every career needs every dimension. The work is to reveal the ones that are true and material. Where a dimension is absent, it is left absent."
            />
            {groups.map((group) => (
              <section key={group} aria-labelledby={group.replace(/\s+/g, "-")}>
                <h3 className="kicker group-label" id={group.replace(/\s+/g, "-")}>
                  {group}
                </h3>
                <div className="dims">
                  {dimensions
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <article className="dim" key={item.title}>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>

          <div className="prose prose--wide">
            <p className="kicker">Both readings</p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                letterSpacing: "-0.03em",
                margin: "10px 0 16px",
              }}
            >
              Advisory clarifies. Recruitment decides fit.
            </h2>
            <p>
              Advisory helps a professional present leadership value with precision. Recruitment
              asks whether that account fits a genuine opportunity. I do both, and I keep them
              apart. A person may be considered for a role without ever buying advisory services.
              A person may buy advisory services and never be in a recruitment process with me.
            </p>
            <p>
              Federal and public-sector careers are read on their own terms: policy, stewardship,
              regulation, delivery, and political interface. The translation respects the
              institution. It does not borrow a commercial costume.
            </p>
            <p>
              <Link className="text-link" to="/perspectives">
                Perspectives on positioning
              </Link>
            </p>
          </div>

          <Assurance />
        </div>
      </section>
      <CtaBand
        title="If the narrative and the record are out of step, start there."
        text="A first conversation establishes whether this is advisory, a search, or a candidacy — and whether I am the right person."
      />
    </>
  );
}
