import { Link } from "react-router-dom";
import { Assurance, CtaBand, IncludeList, PageHeader } from "../components/Blocks";
import { cta } from "../config";
import { services } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

const service = services.find((item) => item.id === "recruitment")!;

export function Recruitment() {
  usePageMeta(
    "Independent Recruitment — Fakorede Joel",
    "Organizations and hiring decision-makers engage Fakorede Joel to identify, assess and engage professionals for genuine employment opportunities.",
  );

  return (
    <>
      <PageHeader
        kicker="Independent recruitment"
        title="Talent requirements, considered properly."
        lede={service.summary}
      />
      <section className="page-section">
        <div className="container stack">
          <div className="two">
            <article>
              <p className="kicker">For organizations</p>
              <h2 className="section-title">A mandate, described accurately.</h2>
              <div className="prose">
                <p>{service.body}</p>
                <p>
                  A useful first conversation covers the role, the context, what success requires,
                  the stakeholders, the constraints, and the confidentiality of the search.
                </p>
                <p>
                  <Link className="text-link" to={cta.talent.href}>
                    {cta.talent.label}
                  </Link>
                </p>
              </div>
            </article>
            <article>
              <p className="kicker">For professionals</p>
              <h2 className="section-title">Consideration rests on fit.</h2>
              <div className="prose">
                <p>
                  An introduction can be made directly. It is read against genuine opportunities.
                  Purchasing résumé, LinkedIn, advisory or positioning services is never a
                  condition of consideration.
                </p>
                <p>
                  <Link className="text-link" to="/contact?intent=candidacy">
                    Submit a résumé/CV for consideration
                  </Link>
                </p>
              </div>
            </article>
          </div>

          <div>
            <p className="kicker">Areas of support</p>
            <IncludeList items={service.includes} />
          </div>

          <Assurance />
        </div>
      </section>
      <CtaBand
        title="State whether you are hiring or wishing to be considered."
        text="The routes are different, and they stay different."
        primary={cta.talent}
        secondary={{ href: "/contact?intent=candidacy", label: "Submit a Résumé/CV" }}
      />
    </>
  );
}
