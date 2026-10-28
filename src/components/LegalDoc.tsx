import { Link } from "react-router-dom";
import { PageHeader } from "./Blocks";

type Section = { heading: string; paragraphs: string[] };

export function LegalDoc({
  kicker,
  title,
  updated,
  intro,
  sections,
}: {
  kicker?: string;
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHeader kicker={kicker ?? "Legal"} title={title} lede={intro} />
      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container prose prose--wide legal-doc">
          <p className="legal-meta">
            Status: working template · {updated}
          </p>
          <p className="quiet-note" style={{ marginTop: 0 }}>
            Placeholders marked [TO BE CONFIRMED] are not final commercial or legal commitments.
            They exist so the structure is clear before terms are approved. See also the{" "}
            <Link to="/principles">principles</Link>.
          </p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
