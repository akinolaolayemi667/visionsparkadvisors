import { Link } from "react-router-dom";
import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import { advisoryServices } from "../content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Advisory() {
  usePageMeta(
    "Career Advisory — Fakorede Joel",
    "Candidate-paid executive career advisory: strategy, résumé and CV positioning, LinkedIn, job search, interviews, and board narratives. Independent of recruitment consideration.",
  );

  return (
    <>
      <PageHeader
        kicker="Candidate-paid advisory"
        title="Positioning, engaged on your own account."
        lede="Individuals engage this work independently. It covers the market narrative of a career: the strategy, the instruments, and the conversations that follow. It is never a condition of being considered for a role."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              The work combines executive career strategy, career-market positioning, résumé and CV
              positioning, leadership branding, LinkedIn positioning, executive job-search strategy,
              opportunity assessment, interview positioning, communication with recruiters and
              search firms, Board and C-suite positioning, and broader professional counsel.
            </p>
            <p>
              Each engagement starts from the career in front of me. Where a document is part of
              the scope, it is written from that evidence and for a defined market. I do not add
              achievements that cannot be defended.
            </p>
            <p>
              A typical shape is a positioning point of view and the instruments that were agreed:
              a résumé or CV, a LinkedIn narrative, a search plan, an interview position, or a
              board biography. The shape follows the need. An employment outcome does not follow
              by promise. No interview, placement, or appointment is guaranteed.
            </p>
          </div>

          <div>
            <p className="kicker">How an advisory engagement proceeds</p>
            <ol className="steps" style={{ marginTop: 18 }}>
              <li className="step">
                <span>01</span>
                <h3>Conversation</h3>
                <p>
                  Context, level, confidentiality, and what you want to be clearer about. I will
                  say if I am not the right adviser.
                </p>
              </li>
              <li className="step">
                <span>02</span>
                <h3>Scope</h3>
                <p>
                  The work is defined before it begins. Fees are discussed privately once that
                  scope is clear. There is no public rate card.
                </p>
              </li>
              <li className="step">
                <span>03</span>
                <h3>Assessment</h3>
                <p>
                  The record, the current materials, and the market you have in view. What is
                  strong, what is underspecified, and what should stay unclaimed.
                </p>
              </li>
              <li className="step">
                <span>04</span>
                <h3>Instruments</h3>
                <p>
                  The narrative, then the documents and the conversations. You remain the authority
                  on the facts. I am accountable for the clarity and the discipline of the telling.
                </p>
              </li>
            </ol>
          </div>

          <div>
            {advisoryServices.map((service, index) => (
              <article className="service-block" id={service.id} key={service.id}>
                <span className="service-block__num">{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.title}</h2>
                <div>
                  <p className="summary">{service.summary}</p>
                  <p>{service.body}</p>
                  {service.id === "board-csuite" ? (
                    <p>
                      <Link className="text-link" to="/board">
                        Board positioning in full
                      </Link>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <p className="quiet-note">
            Early-career work is described separately, so this page can stay at executive altitude.{" "}
            <Link to="/emerging">Emerging talent</Link>
          </p>

          <Assurance />
        </div>
      </section>
      <CtaBand
        title="Begin with the decision in front of you."
        text="Name the level, the market, and what you want clarified. Advisory is scoped after that conversation."
        primary={{ href: "/engage?intent=advisory", label: "Request advisory" }}
        secondary={{ href: "/services", label: "All services" }}
      />
    </>
  );
}
