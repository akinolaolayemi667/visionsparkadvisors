import { Link } from "react-router-dom";
import { PageHeader } from "../components/Blocks";
import { usePageMeta } from "../hooks/usePageMeta";
import { perspectives } from "../perspectives";

export function Perspectives() {
  usePageMeta(
    "Perspectives — Fakorede Joel",
    "Practice notes on executive positioning, evidence, board careers, résumés, and how search professionals read a career.",
  );

  return (
    <>
      <PageHeader
        kicker="Practice notes"
        title="Perspectives on positioning."
        lede="Short essays on how leadership value becomes legible. They describe the way the practice thinks. They are not case studies, and they are not promises of an outcome."
      />
      <section className="page-section">
        <div className="container">
          {perspectives.map((note) => (
            <Link className="note" to={`/perspectives/${note.slug}`} key={note.slug}>
              <p className="kicker">{note.kicker}</p>
              <h2>{note.title}</h2>
              <p>{note.dek}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
