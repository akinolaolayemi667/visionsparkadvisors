import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import {
  ApproachPillars,
  ConfidentialitySection,
  PackagesSection,
  TrustSection,
} from "../components/TrustSections";
import { cta } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function Packages() {
  usePageMeta(
    "Packages — Joel Facco",
    "Career Foundation, Executive Positioning, and Executive Search Strategy Partnership. Scope and pricing depend on career level, materials, complexity and engagement requirements.",
  );

  return (
    <>
      <PageHeader
        kicker="Packages"
        title="Choose the depth of positioning support."
        lede="Three career-service tiers. No public rate card — scope and pricing are discussed once the level of work is clear."
      />

      <section className="page-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <PackagesSection showNote />
          <p className="quiet-note">
            Purchasing a package is never a condition of recruitment consideration. No interview,
            placement or appointment is guaranteed.{" "}
            <Link to="/principles">Read the principles</Link>
          </p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <ApproachPillars />
        </div>
      </section>

      <TrustSection />
      <ConfidentialitySection />

      <CtaBand
        title="If you are unsure which tier fits, start with a conversation."
        text="Describe the level, the materials you already have, and what you want clarified."
        primary={cta.assessment}
        secondary={cta.executive}
      />
    </>
  );
}
