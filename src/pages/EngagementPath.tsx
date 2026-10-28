import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta, engagementPath } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function EngagementPath() {
  usePageMeta(
    "Engagement Path — Fakorede Joel",
    "How assessment leads to recommendation, agreement and work. Payment is never charged simply for requesting an assessment.",
  );

  return (
    <>
      <PageHeader
        kicker="Onboarding architecture"
        title="From assessment to agreed work."
        lede="The site is structured so payment and secure delivery can be integrated later. Requesting an assessment never creates an automatic charge."
      />
      <section className="page-section">
        <div className="container stack">
          <ol className="path-steps">
            {engagementPath.map((step, index) => (
              <li key={step.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="prose prose--wide">
            <p>
              Commercial terms, where advisory is involved, are confirmed in writing before payment.
              Read the{" "}
              <Link to="/career-advisory-terms">Career Advisory Terms</Link> template and the{" "}
              <Link to="/packages">packages</Link> overview. Pricing appears only when you supply
              approved figures — none are invented here.
            </p>
            <p>
              A secure client portal is reserved for a later phase. See{" "}
              <Link to="/client-portal">Client portal (future)</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBand
        primary={cta.assessment}
        secondary={cta.explorePositioning}
        title="Begin with understanding — not a transaction."
        text="A career assessment clarifies direction and fit. Payment belongs after agreement, not before the first conversation."
      />
    </>
  );
}
