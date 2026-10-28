import { Link } from "react-router-dom";
import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import { usePageMeta } from "../hooks/usePageMeta";

export function Recruitment() {
  usePageMeta(
    "Independent Recruiting — Fakorede Joel",
    "Fakorede Joel sources, assesses, and considers candidates for genuine employment opportunities. Recruitment consideration never depends on purchasing career advisory.",
  );

  return (
    <>
      <PageHeader
        kicker="Independent recruiting"
        title="Genuine opportunities, considered properly."
        lede="I source, assess, and consider candidates for real employment opportunities. The work is independent. It stands apart from any career advisory a person may choose to buy."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="two">
            <article>
              <p className="kicker">For hiring leaders</p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                  margin: "10px 0 12px",
                }}
              >
                A mandate, described accurately.
              </h2>
              <div className="prose">
                <p>
                  A useful first conversation covers the role, the context, what success requires,
                  the stakeholders, the constraints, and the confidentiality of the search. I need
                  enough truth about the mandate to represent it without embroidery.
                </p>
                <p>
                  I will say if I am not the right recruiter for the search. Fit runs in both
                  directions: the candidate to the role, and the mandate to the way I work.
                </p>
                <p>
                  <Link className="text-link" to="/engage?intent=search">
                    Discuss a search
                  </Link>
                </p>
              </div>
            </article>
            <article>
              <p className="kicker">For professionals</p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.02em",
                  margin: "10px 0 12px",
                }}
              >
                Consideration rests on fit.
              </h2>
              <div className="prose">
                <p>
                  An introduction can be made directly. It is read against genuine opportunities,
                  not against a catalogue of aspirations. A current résumé or CV, the roles in
                  view, geography or sector where they matter, and any confidentiality constraint
                  are the useful contents of that note.
                </p>
                <p>
                  Purchasing résumé, LinkedIn, advisory, or positioning services is never a
                  condition of consideration. Buying advice does not place you in a process.
                  Declining advice does not remove you from one.
                </p>
                <p>
                  <Link className="text-link" to="/engage?intent=candidacy">
                    Introduce a candidacy
                  </Link>
                </p>
              </div>
            </article>
          </div>

          <div className="prose prose--wide">
            <p className="kicker">Separation</p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                letterSpacing: "-0.02em",
                margin: "10px 0 12px",
              }}
            >
              The two activities do not purchase each other.
            </h2>
            <p>
              If someone is in a recruitment conversation and also wishes to engage advisory
              services, the two are scoped and conducted separately. One is not a pathway into the
              other. Recommendations in either activity follow professional assessment and the
              information available. No interview, placement, or appointment is guaranteed.
            </p>
            <p>
              Search conversations reward specificity. Level, sector, recent mandate, and
              constraints help a recruiter more than a philosophy. I have written about that
              reading in the practice notes.{" "}
              <Link to="/perspectives/search-conversations">
                How to be understood by search professionals
              </Link>
            </p>
          </div>

          <Assurance />
        </div>
      </section>
      <CtaBand
        title="State whether you are hiring or wishing to be considered."
        text="The routes are different, and they stay different."
        primary={{ href: "/engage?intent=search", label: "Discuss a search" }}
        secondary={{ href: "/engage?intent=candidacy", label: "Introduce a candidacy" }}
      />
    </>
  );
}
