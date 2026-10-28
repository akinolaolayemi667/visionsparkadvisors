import { Link } from "react-router-dom";
import { Assurance, CtaBand, SectionHead } from "../components/Blocks";
import {
  BeforeAfterPositioning,
  CandidateJourney,
  PositioningDiagnostic,
} from "../components/PositioningSections";
import {
  ApproachPillars,
  CaseStudiesSection,
  ConfidentialitySection,
  PackagesSection,
  TestimonialsSection,
  TrustSection,
} from "../components/TrustSections";
import { cta, practice } from "../config";
import { audienceCards, authorityFlow, services } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "Fakorede Joel — Executive Career Strategist & Independent Recruiter",
    "Position your experience for the opportunities you’re ready to lead. Executive career strategy, resume/CV and LinkedIn positioning, job-search advisory, and independent recruitment.",
  );

  return (
    <>
      <section className="hero hero--portrait">
        <div className="hero__media" aria-hidden={!practice.portraitAvailable}>
          {practice.portraitAvailable ? (
            <img
              src={practice.portrait}
              alt={`Professional portrait of ${practice.name}`}
              width={900}
              height={1100}
            />
          ) : (
            <div className="hero__placeholder">
              <span className="hero__placeholder-mark" />
              <p>
                {practice.name}
                <span>Professional portrait</span>
              </p>
            </div>
          )}
        </div>
        <div className="hero__copy">
          <p className="kicker">{practice.name}</p>
          <h1 className="hero__title">
            Position Your Experience for the Opportunities You’re Ready to Lead.
          </h1>
          <p className="role">{practice.supporting}</p>
          <div className="hero__prose">
            <p className="lede">
              Strong careers deserve strong positioning.
            </p>
            <p>
              I work with executives, senior leaders and professionals to translate experience,
              leadership scope and measurable impact into clear market positioning — while helping
              organizations identify talent capable of delivering meaningful business outcomes.
            </p>
            <p>
              From executive résumé/CV strategy and LinkedIn positioning to job-search advisory and
              independent recruitment, my work sits at the intersection of talent, opportunity and
              positioning.
            </p>
          </div>
          <div className="hero__actions">
            <Link className="btn" to={cta.assessment.href}>
              {cta.assessment.label}
            </Link>
            <Link className="btn btn--ghost" to={cta.services.href}>
              {cta.services.label}
            </Link>
          </div>
          <p className="hero__quiet">
            Looking for talent?{" "}
            <Link to={cta.talent.href}>Discuss a Search Requirement →</Link>
          </p>
          <p className="trust-marks" aria-label="Practice standards">
            {practice.trustMarks.map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="section section--tint" id="authority">
        <div className="container">
          <SectionHead
            kicker="Authority"
            title="Experience Is Valuable. Positioning Determines How That Value Is Understood."
            deck="A successful career can still be undersold by weak positioning."
          />
          <div className="prose prose--wide authority-copy">
            <p>
              A professional may have held P&L leadership, delivered revenue growth, led operational
              excellence or business transformation, expanded into new markets, advised Boards, or
              managed complex stakeholder environments — yet none of that matters if enterprise
              value and strategic judgment are difficult for the reader to identify.
            </p>
            <p>
              My work helps connect what you have accomplished with what the market needs to
              understand about you: commercial impact, governance exposure, change leadership and
              the evidence of organizational leadership that decision-makers actually assess.
            </p>
          </div>
          <ol className="flow" aria-label="Positioning sequence">
            {authorityFlow.map((step, index) => (
              <li key={step.title}>
                <span className="flow__n">{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="audiences">
        <div className="container">
          <SectionHead
            kicker="Who I work with"
            title="Career Positioning Across Leadership Levels"
            deck="The practice is executive in character. Audiences are named specifically so the right people recognize themselves."
          />
          <div className="audience-board">
            {audienceCards.map((card) => (
              <article
                key={card.id}
                className={card.dominant ? "audience-tile audience-tile--dominant" : "audience-tile"}
              >
                <p className="kicker">{card.dominant ? "Primary" : "Also served"}</p>
                <h3>{card.title}</h3>
                <p className="audience-tile__people">{card.people}</p>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="services">
        <div className="container">
          <SectionHead
            kicker="Core services"
            title="One Career. One Narrative. One Integrated Positioning Strategy."
            deck="Executive career positioning involves considerably more than résumé writing. Each service is an instrument of the same narrative — or, for employers, a separate recruitment practice."
          />
          <div className="service-board">
            {services.map((service) => (
              <article
                key={service.id}
                className={
                  service.premium
                    ? "service-card service-card--premium"
                    : service.employer
                      ? "service-card service-card--employer"
                      : "service-card"
                }
              >
                <p className="kicker">{service.kicker}</p>
                <h3>{service.title}</h3>
                <p className="service-card__summary">{service.summary}</p>
                <ul className="include-list include-list--compact">
                  {service.includes.slice(0, 6).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="text-link" to={service.cta.href}>
                  {service.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApproachPillars compact />
      <PackagesSection compact />
      <CandidateJourney compact />
      <PositioningDiagnostic compact />
      <BeforeAfterPositioning />
      <TrustSection />
      <ConfidentialitySection />
      <TestimonialsSection />
      <CaseStudiesSection showTemplate />

      <section className="section">
        <div className="container resource-band">
          <SectionHead
            kicker="Resource"
            title="The Executive Positioning Checklist"
            deck="Fifteen questions to determine whether your résumé, LinkedIn and career narrative reflect your actual leadership value."
          />
          <Link className="btn" to={cta.checklist.href}>
            {cta.checklist.label}
          </Link>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            kicker="Two practices"
            title="Advisory and recruitment, held apart."
            deck="When someone receives outreach and checks this site, the separation should be unmistakable — and the professionalism should reinforce the original communication."
          />
          <div className="practices">
            <Link className="practice" to="/executive-career-positioning">
              <p className="kicker">Candidate-paid advisory</p>
              <h3>Career positioning</h3>
              <p>
                Assessment, résumé/CV, LinkedIn, job-search strategy, interview positioning and
                Board narratives — engaged independently by the individual.
              </p>
              <span className="text-link">Request a Career Assessment</span>
            </Link>
            <Link className="practice" to="/recruitment">
              <p className="kicker">Independent recruitment</p>
              <h3>Talent requirements</h3>
              <p>
                Organizations and hiring decision-makers engage me to identify, assess and engage
                professionals for genuine employment opportunities.
              </p>
              <span className="text-link">Discuss a Talent Requirement</span>
            </Link>
          </div>
          <Assurance />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
