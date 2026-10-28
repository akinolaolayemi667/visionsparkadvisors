import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";
import { publishWorkSamples, workSamples, workSamplesIntro } from "../workSamples";

export function SampleWorks() {
  const ready = publishWorkSamples && workSamples.length > 0;

  usePageMeta(
    "Sample Works — VisionSpark Advisors",
    ready
      ? "Authorised résumé, Board biography and positioning samples from Joel Facco’s practice."
      : "Sample works will publish when authorised demonstration materials are supplied.",
    { path: "/sample-works" },
  );

  return (
    <>
      <PageHeader
        kicker={workSamplesIntro.kicker}
        title={
          ready
            ? workSamplesIntro.title
            : "Sample works — coming when authorised materials are ready."
        }
        lede={workSamplesIntro.deck}
      />

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container">
          {ready ? (
            <ul className="sample-grid">
              {workSamples.map((sample) => (
                <li key={sample.id} className="sample-card">
                  <p className="kicker">{sample.instrument}</p>
                  <h2>{sample.client}</h2>
                  <p>{sample.summary}</p>
                  <div className="sample-card__actions">
                    {sample.pdf ? (
                      <a
                        className="btn"
                        href={sample.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF sample
                      </a>
                    ) : null}
                    {sample.caseStudySlug ? (
                      <Link
                        className={sample.pdf ? "btn btn--ghost" : "btn"}
                        to={`/case-studies/${sample.caseStudySlug}`}
                      >
                        Read engagement write-up
                      </Link>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="deck">No authorised sample works are published yet.</p>
          )}
          <p className="quiet-note" style={{ marginTop: 28 }}>
            Samples illustrate document architecture and positioning method. They do not guarantee
            interviews, placements or Board appointments. Purchasing advisory is never required for
            recruitment consideration.
          </p>
        </div>
      </section>

      <CtaBand primary={cta.assessment} secondary={cta.resumeAssessment} />
    </>
  );
}
