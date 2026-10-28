import { Link } from "react-router-dom";
import { cta, practice } from "../config";

const ecosystem = [
  {
    title: "Recruitment",
    text: "Genuine mandates. Fit-led consideration. Never tied to purchasing advice.",
    href: "/recruitment",
  },
  {
    title: "Executive Career Positioning",
    text: "How leadership value should be understood before documents are rewritten.",
    href: "/executive-career-positioning",
  },
  {
    title: "Resume/CV Strategy",
    text: "The document as a market instrument — altitude, evidence, selection.",
    href: "/resume-cv",
  },
  {
    title: "LinkedIn Positioning",
    text: "A public narrative that agrees with the private materials.",
    href: "/linkedin",
  },
  {
    title: "Job Search Strategy",
    text: "Targeted market engagement — not broadcast applications.",
    href: "/job-search-strategy",
  },
];

const marketLenses = [
  { term: "Positioning", gloss: "How the career is read at the level being pursued." },
  { term: "Alignment", gloss: "Fit between narrative, evidence and target opportunities." },
  { term: "Market Readiness", gloss: "Whether materials survive a serious first read." },
  { term: "Leadership Narrative", gloss: "The selected story that holds across every instrument." },
  { term: "Evidence-Led Impact", gloss: "Claims a reference or interview can defend." },
  { term: "Search Strategy", gloss: "Judgment about which conversations deserve attention." },
];

export function FullBleedHero() {
  return (
    <section className="hero-bleed" aria-label="VisionSpark Advisors">
      <div className="hero-bleed__media" aria-hidden={!practice.portraitAvailable}>
        {practice.portraitAvailable ? (
          <img
            src={practice.portrait}
            alt=""
            width={1600}
            height={2000}
            decoding="async"
            {...{ fetchPriority: "high" as const }}
          />
        ) : null}
        <div className="hero-bleed__shade" />
      </div>
      <div className="container hero-bleed__content reveal">
        {practice.logoAvailable ? (
          <img
            className="hero-bleed__logo"
            src={practice.logo}
            alt={practice.brand}
            width={320}
            height={105}
            decoding="async"
          />
        ) : (
          <p className="kicker kicker--on-dark">{practice.brand}</p>
        )}
        <h1 className="hero-bleed__title">
          Position Your Experience for the Opportunities You’re Ready to Lead.
        </h1>
        <p className="hero-bleed__lede">
          Executive career strategy and independent recruitment — held apart, evidence-led, and
          built for how serious markets actually read leadership.
        </p>
        <div className="hero-bleed__actions">
          <Link className="btn btn--light" to={cta.assessment.href}>
            {cta.assessment.label}
          </Link>
          <Link className="btn btn--ghost-light" to={cta.explorePositioning.href}>
            {cta.explorePositioning.label}
          </Link>
        </div>
        <p className="hero-bleed__quiet">
          {practice.name} · {practice.role}
          {" · "}
          <Link to={cta.talent.href}>Hiring? Discuss a Talent Requirement →</Link>
        </p>
      </div>
    </section>
  );
}

export function OutreachTrustStrip() {
  return (
    <aside className="trust-strip reveal" aria-label="Outreach verification">
      <div className="container trust-strip__inner">
        <p>
          <strong>Received a message from me?</strong> Verify who contacted you, how sourcing works,
          and how recruitment stays separate from career advisory.
        </p>
        <Link className="btn btn--ghost btn--small" to={cta.outreach.href}>
          Verify outreach
        </Link>
      </div>
    </aside>
  );
}

export function IntersectionEcosystem() {
  return (
    <section className="section section--ink ecosystem" id="intersection">
      <div className="container">
        <div className="section__head reveal">
          <p className="kicker kicker--light">The differentiator</p>
          <h2 className="section-title section-title--light">
            Recruitment × Positioning × Resume/CV × LinkedIn × Search
          </h2>
          <p className="deck deck--light">
            {practice.brandMessage}
          </p>
        </div>
        <div className="ecosystem__ring reveal" aria-hidden="true">
          <span>One career</span>
          <span>One narrative</span>
          <span>Five instruments</span>
        </div>
        <ul className="ecosystem__grid">
          {ecosystem.map((item, index) => (
            <li key={item.title} className="reveal" style={{ animationDelay: `${index * 60}ms` }}>
              <Link to={item.href}>
                <span className="ecosystem__n">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="ecosystem__note">
          Looking beyond a document is the point. The complete professional positioning ecosystem is
          what makes {practice.brand} distinct — and what keeps advisory separate from recruitment
          consideration.
        </p>
      </div>
    </section>
  );
}

export function MarketVocabulary() {
  return (
    <section className="section section--tint" id="vocabulary">
      <div className="container">
        <div className="section__head reveal">
          <p className="kicker">How this practice speaks</p>
          <h2>A vocabulary built for executives — not résumé slogans.</h2>
          <p className="deck">
            No “guaranteed interviews.” No “beat the ATS.” The language matches the altitude of the
            work.
          </p>
        </div>
        <dl className="vocab-grid">
          {marketLenses.map((item) => (
            <div key={item.term} className="reveal">
              <dt>{item.term}</dt>
              <dd>{item.gloss}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
