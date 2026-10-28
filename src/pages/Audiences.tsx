import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { audiences } from "../content";
import { usePageMeta } from "../hooks/usePageMeta";

export function Audiences() {
  usePageMeta(
    "Audiences — Fakorede Joel",
    "Executive career strategy and independent recruiting for C-suite and senior leaders, board directors, public-sector professionals, and a separate path for selected early careers.",
  );

  return (
    <>
      <PageHeader
        kicker="Audiences"
        title="Senior by standard. Specific by situation."
        lede="The practice is built for executives, board directors, and senior leaders. It also serves directors, public-sector professionals, high-potential leaders, and — in a separate section — selected early careers."
      />
      <section className="page-section">
        <div className="container">
          {audiences.map((group) => (
            <article className="audience-group" id={group.id} key={group.id} style={{ padding: "40px 0" }}>
              <p className="kicker">{group.kicker}</p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  letterSpacing: "-0.03em",
                  margin: "10px 0 12px",
                }}
              >
                {group.title}
              </h2>
              <p className="deck">{group.text}</p>
              <ul className="people">
                {group.people.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
              <div className="inline-links">
                {group.links.map((link) => (
                  <Link className="text-link" key={link.href} to={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
          <div className="prose prose--wide" style={{ marginTop: 24 }}>
            <p>
              Federal and public-sector professionals bring a different kind of weight: policy,
              stewardship, regulation, service delivery, and political interface. The positioning
              work translates that contribution into language a decision-maker can assess on the
              institution’s own terms.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
