import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta, engagementPath } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function EngagementPath() {
  usePageMeta(
    "Engagement Path — Joel Facco",
    "How assessment leads to recommendation, agreement and work. Payment is never charged simply for requesting an assessment.",
  );

  return (
    <>
      <PageHeader
        kicker="Onboarding architecture"
        title="From assessment to agreed work."
        lede="Assessment first. Written confirmation next. Payment only after fees and scope are agreed. Requesting an assessment never creates an automatic charge."
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
                  {step.id === "agreement" ? (
                    <p>
                      <Link to="/agreement">Request written confirmation</Link>
                    </p>
                  ) : null}
                  {step.id === "payment" ? (
                    <p>
                      <Link to="/payment">Open payment (after agreement)</Link>
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <div className="prose prose--wide">
            <p>
              Commercial terms, where advisory is involved, are confirmed in writing before payment.
              Read the{" "}
              <Link to="/career-advisory-terms">Career Advisory Terms</Link> template and the{" "}
              <Link to="/packages">packages</Link> overview. Public package prices are never
              invented — Stripe uses only Price IDs you configure after approving fees.
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
        secondary={{ href: "/agreement", label: "Request written confirmation" }}
        title="Begin with understanding — not a transaction."
        text="A career assessment clarifies direction and fit. Payment belongs after agreement, not before the first conversation."
      />
    </>
  );
}
