import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { faqs } from "../faq";
import { usePageMeta } from "../hooks/usePageMeta";

export function Faq() {
  usePageMeta(
    "FAQ — Joel Facco",
    "Answers on outreach, confidentiality, career assessment, Board positioning, guarantees, and how recruitment differs from career advisory.",
  );

  return (
    <>
      <PageHeader
        kicker="FAQ"
        title="Questions a careful reader usually asks."
        lede="Trust is easier when the answers are plain. If yours is not here, send it through the contact page."
      />
      <section className="page-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="quiet-note">
            Received outreach?{" "}
            <Link to="/executive-opportunities">Verify the message and how I work</Link>
            {" · "}
            <Link to="/principles">Principles</Link>
            {" · "}
            <Link to="/privacy">Privacy</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
