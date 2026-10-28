import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { cta } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";
import { insightCategories, insights } from "../insights";

export function Insights() {
  const [category, setCategory] = useState<string>("All");

  usePageMeta(
    "Insights — Fakorede Joel",
    "Professional insights on executive careers, résumé/CV strategy, LinkedIn positioning, Board careers, job-search strategy, executive search and recruitment.",
    { path: "/insights" },
  );

  const filtered = useMemo(
    () =>
      category === "All" ? insights : insights.filter((item) => item.category === category),
    [category],
  );

  return (
    <>
      <PageHeader
        kicker="Insights"
        title="Perspectives on executive positioning."
        lede="Practice notes for leaders, boards and hiring decision-makers. They describe how careers become legible in competitive markets. They are not case studies, and they are not promises of an outcome."
      />
      <section className="page-section">
        <div className="container">
          <div className="insight-filters" role="toolbar" aria-label="Insight categories">
            <button
              type="button"
              className={category === "All" ? "is-active" : undefined}
              onClick={() => setCategory("All")}
            >
              All
            </button>
            {insightCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "is-active" : undefined}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="insight-index">
            {filtered.map((note) => (
              <Link className="note" to={`/insights/${note.slug}`} key={note.slug}>
                <p className="kicker">{note.category}</p>
                <h2>{note.title}</h2>
                <p>{note.dek}</p>
              </Link>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="deck">No insights in this category yet.</p>
          ) : null}
        </div>
      </section>
      <CtaBand
        title="If the reading resonates, the next step is a structured conversation."
        text="Request a career assessment to understand how your current positioning is working."
        primary={cta.assessment}
        secondary={cta.explorePositioning}
      />
    </>
  );
}
