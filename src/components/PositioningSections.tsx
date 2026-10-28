import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHead } from "./Blocks";
import { cta } from "../config";
import {
  candidateJourney,
  comparisonExamples,
  diagnosticAreas,
  type ComparisonExample,
} from "../positioning";

export function CandidateJourney({ compact = false }: { compact?: boolean }) {
  const steps = compact ? candidateJourney.slice(0, 5) : candidateJourney;

  return (
    <section className={compact ? "section" : undefined} id="journey">
      <div className={compact ? "container" : undefined}>
        <SectionHead
          kicker="Candidate journey"
          title="A Structured Approach to Career Positioning"
          deck="Seven deliberate stages — from discovery through market execution and, where included, interview and decision support."
        />
        <ol className="journey">
          {steps.map((step) => (
            <li className="journey__step" key={step.n}>
              <div className="journey__head">
                <span className="journey__n">Step {step.n}</span>
                <h3>{step.title}</h3>
                <p className="journey__verb">{step.verb}</p>
              </div>
              {step.text ? <p className="journey__text">{step.text}</p> : null}
              {step.marks ? (
                <p className="journey__marks" aria-label="Execution qualities">
                  {step.marks.map((mark) => (
                    <span key={mark}>{mark}</span>
                  ))}
                </p>
              ) : null}
              {step.items.length ? (
                <ul className="journey__items">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
        {compact ? (
          <p className="more-link">
            <Link className="text-link" to="/how-it-works#journey">
              The full candidate journey
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function PositioningDiagnostic({ compact = false }: { compact?: boolean }) {
  const areas = compact ? diagnosticAreas.slice(0, 6) : diagnosticAreas;

  return (
    <section className={compact ? "section section--tint" : "section section--tint"} id="diagnostic">
      <div className="container">
        <SectionHead
          kicker="Executive positioning diagnostic"
          title="What Does Your Current Positioning Say About You?"
          deck="A career assessment begins by reading the materials as a hiring leader, recruiter or Board would — for level, scope, evidence and fit."
        />
        <div className="diagnostic-grid">
          {areas.map((area, index) => (
            <article className="diagnostic-card" key={area.title}>
              <span className="diagnostic-card__n">{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.question}</p>
            </article>
          ))}
        </div>
        <div className="diagnostic-cta">
          <p>
            If several of these questions are hard to answer from your current materials, that is
            usually where the work begins.
          </p>
          <Link className="btn" to={cta.assessment.href}>
            {cta.assessment.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ComparisonPanel({ example }: { example: ComparisonExample }) {
  const baseId = useId();
  const [side, setSide] = useState<"before" | "after">("before");

  return (
    <div className="compare">
      <div className="compare__switch" role="tablist" aria-label={`${example.label} comparison`}>
        <button
          type="button"
          role="tab"
          id={`${baseId}-before-tab`}
          aria-selected={side === "before"}
          aria-controls={`${baseId}-panel`}
          className={side === "before" ? "is-active" : undefined}
          onClick={() => setSide("before")}
        >
          Before
        </button>
        <button
          type="button"
          role="tab"
          id={`${baseId}-after-tab`}
          aria-selected={side === "after"}
          aria-controls={`${baseId}-panel`}
          className={side === "after" ? "is-active" : undefined}
          onClick={() => setSide("after")}
        >
          After — example style
        </button>
      </div>
      <div
        className="compare__panel"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={side === "before" ? `${baseId}-before-tab` : `${baseId}-after-tab`}
      >
        <p className="compare__label">{side === "before" ? "Before" : "After — example style"}</p>
        <blockquote className={side === "after" ? "compare__quote compare__quote--after" : "compare__quote"}>
          {side === "before" ? example.before : example.after}
        </blockquote>
        <p className="compare__note">{example.note}</p>
      </div>
      <div className="compare__both" aria-hidden="true">
        <div>
          <p className="compare__label">Before</p>
          <p>{example.before}</p>
        </div>
        <div>
          <p className="compare__label">After — example style</p>
          <p>{example.after}</p>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterPositioning() {
  const [activeId, setActiveId] = useState(comparisonExamples[0].id);
  const active = comparisonExamples.find((item) => item.id === activeId) ?? comparisonExamples[0];

  return (
    <section className="section" id="before-after">
      <div className="container">
        <SectionHead
          kicker="Before vs after positioning"
          title="Same experience. Different legibility."
          deck="This is not about exaggerating experience. It is about presenting real experience with appropriate context, scale, evidence and strategic relevance."
        />
        <div className="compare-shell">
          <div className="compare-examples" role="tablist" aria-label="Example categories">
            {comparisonExamples.map((example) => (
              <button
                key={example.id}
                type="button"
                role="tab"
                aria-selected={example.id === activeId}
                className={example.id === activeId ? "is-active" : undefined}
                onClick={() => setActiveId(example.id)}
              >
                {example.label}
              </button>
            ))}
          </div>
          <ComparisonPanel key={active.id} example={active} />
        </div>
        <aside className="compare-ethics">
          <p className="kicker">Evidence standard</p>
          <h3>Never fabricate metrics.</h3>
          <p>
            Placeholders such as [X], [scope/budget] and [measurable business outcome] stand in for
            the client’s verified figures. Where the evidence is thin, the narrative stays thin. A
            claim that cannot survive a reference or an interview is a liability, not a position.
          </p>
        </aside>
      </div>
    </section>
  );
}
