import { Link } from "react-router-dom";
import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import {
  BeforeAfterPositioning,
  CandidateJourney,
  PositioningDiagnostic,
} from "../components/PositioningSections";
import {
  ApproachPillars,
  ConfidentialitySection,
  TrustSection,
} from "../components/TrustSections";
import { cta } from "../config";
import { howItWorksSteps } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

export function HowItWorks() {
  usePageMeta(
    "How It Works — Joel Facco",
    "A structured approach to career positioning: discovery, diagnostic assessment, strategy, career assets, search, market execution, and interview support.",
  );

  return (
    <>
      <PageHeader
        kicker="How it works"
        title="Clear from the first conversation."
        lede="Whether you are requesting a career assessment or discussing a talent requirement, the process is deliberate, confidential and separated by purpose."
      />

      <section className="page-section" style={{ paddingBottom: 0 }}>
        <div className="container stack">
          <div>
            <p className="kicker">Engagement overview</p>
            <h2 className="section-title">How an engagement begins</h2>
            <ol className="steps" style={{ marginTop: 18 }}>
              {howItWorksSteps.map((step) => (
                <li className="step" key={step.n}>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="two">
            <article className="path-card">
              <p className="kicker">If you are a professional</p>
              <h2 className="section-title">Request a career assessment</h2>
              <p>
                Share your level, the market you have in view, and what you want clarified. Scope
                and fees are agreed before advisory work begins.
              </p>
              <Link className="btn" to={cta.assessment.href}>
                {cta.assessment.label}
              </Link>
            </article>
            <article className="path-card">
              <p className="kicker">If you are hiring</p>
              <h2 className="section-title">Discuss a talent requirement</h2>
              <p>
                Describe the mandate and the context a recruiter would need. Recruitment is a
                separate activity from candidate-paid advisory.
              </p>
              <Link className="btn btn--ghost" to={cta.talent.href}>
                {cta.talent.label}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ApproachPillars />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <CandidateJourney />
        </div>
      </section>

      <PositioningDiagnostic />
      <BeforeAfterPositioning />
      <TrustSection />
      <ConfidentialitySection />

      <section className="section">
        <div className="container">
          <Assurance />
          <p className="quiet-note">
            Looking for engagement tiers? <Link to="/packages">View packages</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
