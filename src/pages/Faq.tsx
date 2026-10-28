import { CtaBand, PageHeader } from "../components/Blocks";
import { faqs } from "../services";
import { usePageMeta } from "../hooks/usePageMeta";

export function Faq() {
  usePageMeta(
    "FAQ — Fakorede Joel",
    "Answers on who Fakorede Joel works with, how recruitment differs from career advisory, confidentiality, and how to begin.",
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
        </div>
      </section>
      <CtaBand />
    </>
  );
}
