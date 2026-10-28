import { Link } from "react-router-dom";
import { Assurance, CtaBand, IncludeList, PageHeader } from "../components/Blocks";
import { BeforeAfterPositioning, PositioningDiagnostic } from "../components/PositioningSections";
import { cta } from "../config";
import { services, type Service } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

export function ServicePage({ service }: { service: Service }) {
  usePageMeta(
    `${service.title} — Fakorede Joel`,
    service.summary,
  );

  const related = services.filter((item) => item.id !== service.id).slice(0, 3);
  const showPositioningExtras = service.id === "positioning" || service.id === "resume";

  return (
    <>
      <PageHeader kicker={service.kicker} title={service.title} lede={service.summary} />
      <section className="page-section" style={showPositioningExtras ? { paddingBottom: 0 } : undefined}>
        <div className="container stack">
          <div className="prose prose--wide">
            <p>{service.body}</p>
            {!service.employer ? (
              <p>
                Purchasing this service is never a condition of being considered for a genuine
                recruitment opportunity. No interview, placement or appointment is guaranteed.
              </p>
            ) : (
              <p>
                Recruitment consideration never depends on whether a candidate has purchased career
                advisory services. No interview, placement or appointment is guaranteed.
              </p>
            )}
            {showPositioningExtras ? (
              <p>
                See also the{" "}
                <Link to="/how-it-works#journey">candidate journey</Link>,{" "}
                <Link to="/how-it-works#diagnostic">positioning diagnostic</Link>, and{" "}
                <Link to="/how-it-works#before-after">before vs after</Link> examples.
              </p>
            ) : null}
          </div>

          <div>
            <p className="kicker">What this engagement can include</p>
            <IncludeList items={service.includes} />
          </div>

          <div className="hero__actions">
            <Link
              className="btn"
              to={
                service.employer
                  ? cta.talent.href
                  : `/contact?intent=${service.id === "resume" ? "resume" : service.id === "linkedin" ? "linkedin" : service.id === "job-search" ? "search-strategy" : service.id === "executive-board" ? "board" : "assessment"}`
              }
            >
              {service.employer ? cta.talent.label : cta.assessment.label}
            </Link>
            <Link className="text-link" to={service.cta.href === service.path ? "/how-it-works" : service.cta.href}>
              How the work proceeds
            </Link>
          </div>

          {!service.employer ? <Assurance /> : null}

          <div>
            <p className="kicker">Related</p>
            <div className="related-grid">
              {related.map((item) => (
                <Link className="related-card" key={item.id} to={item.path}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showPositioningExtras ? (
        <>
          <PositioningDiagnostic />
          <BeforeAfterPositioning />
        </>
      ) : null}
      <CtaBand
        title={
          service.employer
            ? "Describe the mandate, and the conversation can begin."
            : "If this is the work in front of you, start with an assessment."
        }
        primary={service.employer ? cta.talent : cta.assessment}
        secondary={service.employer ? cta.assessment : cta.talent}
      />
    </>
  );
}

export function PositioningPage() {
  return <ServicePage service={services.find((s) => s.id === "positioning")!} />;
}
export function ResumePage() {
  return <ServicePage service={services.find((s) => s.id === "resume")!} />;
}
export function LinkedInPage() {
  return <ServicePage service={services.find((s) => s.id === "linkedin")!} />;
}
export function JobSearchPage() {
  return <ServicePage service={services.find((s) => s.id === "job-search")!} />;
}
export function ExecutiveBoardPage() {
  return <ServicePage service={services.find((s) => s.id === "executive-board")!} />;
}
