import { Link } from "react-router-dom";
import { Assurance, CtaBand, IncludeList, PageHeader } from "../components/Blocks";
import { BeforeAfterPositioning, PositioningDiagnostic } from "../components/PositioningSections";
import { cta } from "../config";
import { services, type Service } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

function primaryFor(service: Service) {
  if (service.employer) return cta.talent;
  if (service.id === "resume") return cta.resumeAssessment;
  if (service.id === "linkedin") return cta.linkedin;
  if (service.id === "job-search") return cta.searchStrategy;
  if (service.id === "positioning") return cta.executive;
  return cta.assessment;
}

export function ServicePage({ service }: { service: Service }) {
  usePageMeta(`${service.title} — Joel Facco`, service.summary, {
    path: service.path,
  });

  const related = services.filter((item) => item.id !== service.id).slice(0, 3);
  const showPositioningExtras = service.id === "positioning" || service.id === "resume";
  const primary = primaryFor(service);

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
                <Link to="/how-it-works#diagnostic">positioning diagnostic</Link>,{" "}
                <Link to="/how-it-works#before-after">before vs after</Link> examples, and the{" "}
                <Link to="/career-advisory-terms">Career Advisory Terms</Link>.
              </p>
            ) : null}
          </div>

          <div>
            <p className="kicker">What this engagement can include</p>
            <IncludeList items={service.includes} />
          </div>

          <div className="hero__actions">
            <Link className="btn" to={primary.href}>
              {primary.label}
            </Link>
            <Link className="text-link" to="/how-it-works">
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
            : "If this is the work in front of you, take one clear next step."
        }
        primary={primary}
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
