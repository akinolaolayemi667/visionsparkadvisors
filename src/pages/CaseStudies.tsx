import { Link, useParams } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta } from "../config";
import {
  caseStudies,
  caseStudyTemplate,
  publishCaseStudies,
} from "../engagement";
import { usePageMeta } from "../hooks/usePageMeta";
import { NotFound } from "./NotFound";

export function CaseStudies() {
  const ready = publishCaseStudies && caseStudies.length > 0;

  usePageMeta(
    "Case Studies — VisionSpark Advisors",
    ready
      ? "Selected VisionSpark Advisors engagements: Board biographies, executive CVs and LinkedIn positioning — deliverables described without inventing appointments."
      : "Case studies will publish when genuine client profiles, challenges and outcomes have been supplied.",
    { path: "/case-studies" },
  );

  return (
    <>
      <PageHeader
        kicker="Case studies"
        title={ready ? "How positioning changed the reading." : "Verified studies — coming when ready."}
        lede={
          ready
            ? "Each study reflects real positioning work. Outcomes name deliverables produced — not invented interviews, offers or board appointments."
            : "This page is structured for future case studies. No interviews, job offers, salaries or placement results are fabricated."
        }
      />

      <section className="page-section">
        <div className="container stack">
          {ready ? (
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
          ) : (
            <article className="case-card case-card--template">
              <p className="kicker">Future format</p>
              <h2 className="section-title" style={{ marginTop: 8 }}>
                How a study will be written
              </h2>
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
          )}
        </div>
      </section>

      <CtaBand primary={cta.assessment} secondary={cta.talent} />
    </>
  );
}

export function CaseStudyArticle() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  usePageMeta(
    study ? `${study.profile} — Case Study` : "Case study not found — Fakorede Joel",
    study?.challenge ?? "This case study is not published.",
  );

  if (!publishCaseStudies || !study) return <NotFound />;

  return (
    <article className="article">
      <div className="narrow">
        <p className="kicker">Case study</p>
        <h1>{study.profile}</h1>
        <dl className="case-dl" style={{ marginTop: 36 }}>
          <div>
            <dt>Challenge</dt>
            <dd>{study.challenge}</dd>
          </div>
          <div>
            <dt>Assessment</dt>
            <dd>{study.assessment}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{study.approach}</dd>
          </div>
          {study.outcome ? (
            <div>
              <dt>Outcome</dt>
              <dd>{study.outcome}</dd>
            </div>
          ) : null}
        </dl>
        <footer className="article__end">
          <Link className="btn" to={cta.assessment.href}>
            {cta.assessment.label}
          </Link>
          <div className="article__nav">
            <Link to="/case-studies">All case studies</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
