import { Link } from "react-router-dom";
import { SectionHead } from "./Blocks";
import {
  approachPillars,
  caseStudies,
  caseStudyTemplate,
  confidentiality,
  packageNote,
  packages,
  publishCaseStudies,
  publishTestimonials,
  testimonials,
  trustIndicators,
} from "../engagement";

export function ApproachPillars({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section" : undefined} id="approach">
      <div className={compact ? "container" : undefined}>
        <SectionHead
          kicker="My approach"
          title="Five pillars that hold the work."
          deck="Clarity, evidence, relevance, positioning and integrity. The standard does not change with the instrument."
        />
        <ol className="pillar-grid">
          {approachPillars.map((pillar, index) => (
            <li key={pillar.title}>
              <span className="pillar__n">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PackagesSection({
  compact = false,
  showNote = true,
}: {
  compact?: boolean;
  showNote?: boolean;
}) {
  return (
    <section className={compact ? "section section--tint" : undefined} id="packages">
      <div className={compact ? "container" : undefined}>
        <SectionHead
          kicker="Packages"
          title="Three tiers of career-service engagement."
          deck="Each tier is scoped to the level of support required. Scope and pricing are discussed privately once the need is clear."
        />
        <div className="package-board">
          {packages.map((tier) => (
            <article
              key={tier.id}
              className={tier.featured ? "package-card package-card--featured" : "package-card"}
            >
              {tier.badge ? <p className="package-card__badge">{tier.badge}</p> : null}
              <p className="kicker">{tier.featured ? "Featured" : "Career service"}</p>
              <h3>{tier.title}</h3>
              <p className="package-card__summary">{tier.summary}</p>
              <ul className="include-list include-list--compact">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className={tier.featured ? "btn" : "btn btn--ghost"} to={tier.cta.href}>
                {tier.cta.label}
              </Link>
            </article>
          ))}
        </div>
        {showNote ? <p className="package-note">{packageNote}</p> : null}
        {compact ? (
          <p className="more-link">
            <Link className="text-link" to="/packages">
              View packages in full
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <SectionHead
          kicker="Trust"
          title="Professional Career Decisions Require Trust"
          deck="These indicators are the basis on which an engagement should be judged — before work begins, and throughout it."
        />
        <div className="trust-grid">
          {trustIndicators.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConfidentialitySection() {
  return (
    <section className="section section--tint" id="confidentiality">
      <div className="container confidentiality">
        <p className="kicker">Confidentiality</p>
        <h2 className="section-title">{confidentiality.headline}</h2>
        {confidentiality.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const ready = publishTestimonials && testimonials.length > 0;

  if (!ready) {
    return (
      <section className="section" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <p className="kicker">Client voice</p>
          <h2 id="testimonials-heading" className="section-title">
            Client Results & Experiences — Coming Soon
          </h2>
          <p className="deck">
            Verified client experiences will appear here when they have been provided. This practice
            does not publish invented testimonials.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead
          kicker="Client voice"
          title="Experiences shared by clients."
          deck="Each entry reflects a verified engagement. LinkedIn verification is included where the client has authorised it."
        />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.id}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>
                  {item.level} · {item.industry}
                </span>
                <span>{item.service}</span>
                {item.linkedIn ? (
                  <a href={item.linkedIn} rel="noopener noreferrer">
                    LinkedIn verification
                  </a>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection({ showTemplate = false }: { showTemplate?: boolean }) {
  const ready = publishCaseStudies && caseStudies.length > 0;

  if (!ready) {
    return (
      <section className="section section--tint" id="case-studies">
        <div className="container">
          <SectionHead
            kicker="Case studies"
            title="A structure ready for verified engagements."
            deck="Case studies will publish only when genuine profiles, challenges and outcomes have been supplied. No interviews, offers, salaries or placements are invented."
          />
          {showTemplate ? (
            <article className="case-card case-card--template" aria-label="Case study format">
              <p className="kicker">Format</p>
              <dl className="case-dl">
                <div>
                  <dt>Client profile</dt>
                  <dd>{caseStudyTemplate.profile}</dd>
                </div>
                <div>
                  <dt>Challenge</dt>
                  <dd>{caseStudyTemplate.challenge}</dd>
                </div>
                <div>
                  <dt>Assessment</dt>
                  <dd>{caseStudyTemplate.assessment}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{caseStudyTemplate.approach}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>Only include genuine outcomes supplied by the practice.</dd>
                </div>
              </dl>
            </article>
          ) : (
            <p className="deck">Verified case studies — coming when ready.</p>
          )}
          <p className="more-link">
            <Link className="text-link" to="/case-studies">
              Case studies page
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--tint" id="case-studies">
      <div className="container">
        <SectionHead
          kicker="Case studies"
          title="How positioning changed the reading."
          deck="Each study is drawn from a verified engagement."
        />
        <div className="case-grid">
          {caseStudies.map((study) => (
            <Link className="case-card" key={study.id} to={`/case-studies/${study.slug}`}>
              <p className="kicker">Client profile</p>
              <h3>{study.profile}</h3>
              <p>{study.challenge}</p>
              <span className="text-link">Read the study</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
