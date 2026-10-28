import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { advisoryServices } from "../content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Services() {
  usePageMeta(
    "Services — Fakorede Joel",
    "Independent recruiting for genuine opportunities, and separately engaged career advisory: executive strategy, résumé and CV positioning, LinkedIn, search, interviews, and board narratives.",
  );

  return (
    <>
      <PageHeader
        kicker="Services"
        title="Two practices. A single standard of evidence."
        lede="Recruitment serves a genuine mandate. Career advisory is purchased by the individual, for the individual’s own market position. They are named separately because they are conducted separately."
      />
      <section className="page-section">
        <div className="container">
          <div className="two" style={{ marginBottom: 64 }}>
            <Link className="practice" to="/recruitment">
              <p className="kicker">01</p>
              <h3>Independent recruiting</h3>
              <p>
                Sourcing, assessment, and consideration of candidates for real employment
                opportunities. A conversation for hiring leaders, and a direct route for
                professionals who wish to be considered on fit alone.
              </p>
              <span className="text-link">Recruitment</span>
            </Link>
            <Link className="practice" to="/advisory">
              <p className="kicker">02</p>
              <h3>Career advisory</h3>
              <p>
                Executive career strategy, market positioning, résumé and CV, LinkedIn, leadership
                branding, job search, opportunity assessment, interviews, and communication with
                search firms.
              </p>
              <span className="text-link">Advisory in detail</span>
            </Link>
          </div>

          <p className="kicker">Advisory instruments</p>
          <h2 className="section__head" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", margin: "10px 0 8px" }}>
            Positioning, then the documents.
          </h2>
          <p className="deck" style={{ marginBottom: 8 }}>
            Each instrument is available on its own or inside a wider advisory engagement. Scope
            and fees are agreed before work begins.
          </p>
          <div className="service-list">
            {advisoryServices.map((service, index) => (
              <Link className="service-block" to={`/advisory#${service.id}`} key={service.id}>
                <span className="service-block__num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p className="summary">{service.summary}</p>
              </Link>
            ))}
          </div>

          <div className="two" style={{ marginTop: 64 }}>
            <Link className="audience-card" to="/board">
              <p className="kicker">Board</p>
              <h3>Board and portfolio positioning</h3>
              <p>
                A distinct narrative for chairs, directors, and executives moving into
                non-executive work.
              </p>
              <span className="text-link">Board practice</span>
            </Link>
            <Link className="audience-card" to="/emerging">
              <p className="kicker">Separate practice area</p>
              <h3>Selected early careers</h3>
              <p>
                Entry-level and early-career positioning, kept in its own section so the executive
                work remains the center of the practice.
              </p>
              <span className="text-link">Emerging talent</span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
