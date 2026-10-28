import { Link } from "react-router-dom";
import { AssessmentForm } from "../components/AssessmentForm";
import { usePageMeta } from "../hooks/usePageMeta";

export function Assessment() {
  usePageMeta(
    "Career Assessment — Fakorede Joel",
    "Request a structured career assessment. Share professional context, direction, challenges and materials. Scope and fees are agreed before advisory work begins.",
  );

  return (
    <section className="page-section" style={{ paddingTop: 48 }}>
      <div className="container engage-grid">
        <div className="engage-intro">
          <p className="kicker">Career assessment</p>
          <h1>A structured start to positioning work.</h1>
          <p className="lede">
            Five short steps. The request is composed in your browser and sent only when you choose
            to send it. Scope and fees for any advisory engagement are agreed before work begins.
          </p>
          <div className="prose">
            <p>
              This is candidate-paid advisory territory — separate from recruitment consideration.
              Completing the form does not create consideration for a role, and declining advisory
              does not remove it.
            </p>
            <p>
              Prefer a shorter note?{" "}
              <Link to="/contact?intent=assessment">Use the general contact form</Link>
              {" · "}
              <Link to="/executive-positioning-checklist">Executive Positioning Checklist</Link>
              {" · "}
              <Link to="/faq">FAQ</Link>
            </p>
          </div>
        </div>
        <AssessmentForm />
      </div>
    </section>
  );
}
