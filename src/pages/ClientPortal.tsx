import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta, portalCapabilities } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function ClientPortal() {
  usePageMeta(
    "Client Portal — Joel Facco",
    "Future-ready structure for a secure client portal. Not live until a secure platform is connected.",
  );

  return (
    <>
      <PageHeader
        kicker="Future capability"
        title="A secure client portal — when the platform is ready."
        lede="This page reserves the architecture. It is not a live login, and it does not collect portal credentials. Complexity will only be added when a secure system can support it."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              Engaged clients today correspond directly. When a portal is introduced, access will
              follow a confirmed advisory or recruitment engagement — never as a substitute for
              asking whether the practice is the right fit.
            </p>
          </div>
          <div>
            <p className="kicker">Intended capabilities</p>
            <ul className="include-list">
              {portalCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="quiet-note">
            Until then, start with an{" "}
            <Link to="/assessment">assessment</Link>, review the{" "}
            <Link to="/engagement-path">engagement path</Link>, or{" "}
            <Link to="/contact">send a confidential note</Link>.
          </p>
        </div>
      </section>
      <CtaBand primary={cta.assessment} secondary={cta.conversation} />
    </>
  );
}
