import { Link } from "react-router-dom";
import { Assurance, SectionHead } from "../components/Blocks";
import {
  FullBleedHero,
  IntersectionEcosystem,
  MarketVocabulary,
  OutreachTrustStrip,
} from "../components/Signature";
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
  WorkMethodSection,
} from "../components/TrustSections";
import { cta, practice } from "../config";
import { audienceCards, services } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(
    "VisionSpark Advisors — Fakorede Joel | Executive Career Strategist & Independent Recruiter",
    "VisionSpark Advisors sits at the intersection of recruitment, executive career positioning, résumé/CV strategy, LinkedIn and job-search strategy — evidence-led and confidential.",
    { path: "/" },
  );

  return (
    <>
      <FullBleedHero />
      <OutreachTrustStrip />
      <IntersectionEcosystem />
      <MarketVocabulary />

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
                className={card.dominant ? "audience-tile audience-tile--dominant reveal" : "audience-tile reveal"}
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
            deck="Each service is an instrument of the same narrative — or, for employers, a separate recruitment practice."
          />
          <div className="service-board">
            {services.map((service) => (
              <article
                key={service.id}
                className={
                  service.premium
                    ? "service-card service-card--premium reveal"
                    : service.employer
                      ? "service-card service-card--employer reveal"
                      : "service-card reveal"
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
      <WorkMethodSection />
      <TestimonialsSection />
      <CaseStudiesSection />

      <section className="section">
        <div className="container resource-band reveal">
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

      <section className="section section--tint" id="two-practices">
        <div className="container">
          <SectionHead
            kicker="Two practices"
            title="Advisory and recruitment, held apart."
            deck="When someone receives outreach and checks this site, the separation should be unmistakable."
          />
          <div className="practices">
            <Link className="practice reveal" to="/executive-career-positioning">
              <p className="kicker">Candidate-paid advisory</p>
              <h3>Career positioning</h3>
              <p>
                Assessment, résumé/CV, LinkedIn, job-search strategy, interview positioning and
                Board narratives — engaged independently by the individual.
              </p>
              <span className="text-link">Request a Career Assessment</span>
            </Link>
            <Link className="practice reveal" to="/recruitment">
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

      <section className="cta-band cta-band--finale" id="begin">
        <div className="container cta-band__inner">
          <div>
            <p className="kicker kicker--on-dark">{practice.tagline}</p>
            <h2>Your Experience Has Value. Make Sure the Market Can See It.</h2>
            <p>
              Whether you&apos;re preparing for your next executive move, repositioning for greater
              responsibility, exploring Board opportunities or simply ensuring your professional
              narrative reflects the level at which you operate, the first step is understanding how
              your current positioning is working.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link className="btn btn--light" to={cta.assessment.href}>
              {cta.assessment.label}
            </Link>
            <Link className="btn btn--ghost-light" to={cta.explorePositioning.href}>
              {cta.explorePositioning.label}
            </Link>
          </div>
          <p className="cta-band__employer">
            Hiring? <Link to={cta.talent.href}>Discuss a Talent Requirement →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
