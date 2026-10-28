import { Link, useParams } from "react-router-dom";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";
import { perspectives } from "../perspectives";
import { NotFound } from "./NotFound";

export function InsightArticle() {
  const { slug } = useParams();
  const index = perspectives.findIndex((item) => item.slug === slug);
  const article = index >= 0 ? perspectives[index] : undefined;
  const previous = index > 0 ? perspectives[index - 1] : undefined;
  const next = index >= 0 && index < perspectives.length - 1 ? perspectives[index + 1] : undefined;

  usePageMeta(
    article ? `${article.title} — Fakorede Joel` : "Page not found — Fakorede Joel",
    article?.dek ?? "This page is not part of the practice site.",
  );

  if (!article) return <NotFound />;

  const pullAt = Math.min(2, article.paragraphs.length - 1);

  return (
    <article className="article">
      <div className="narrow">
        <p className="kicker">{article.kicker}</p>
        <h1>{article.title}</h1>
        <p className="dek">{article.dek}</p>
        <p className="byline">
          {practice.name} · Insight
        </p>
        <div className="prose" style={{ marginTop: 36 }}>
          {article.paragraphs.map((paragraph, paragraphIndex) => (
            <div key={paragraph}>
              {paragraphIndex === pullAt ? (
                <blockquote className="pull">{article.pull}</blockquote>
              ) : null}
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
        <footer className="article__end">
          <p>If this is the work in front of you, the next step is a direct conversation.</p>
          <p style={{ marginTop: 16 }}>
            <Link className="btn" to="/contact?intent=assessment">
              Request a Career Assessment
            </Link>
          </p>
          <div className="article__nav">
            {previous ? (
              <Link to={`/insights/${previous.slug}`}>Previous</Link>
            ) : (
              <Link to="/insights">All insights</Link>
            )}
            {next ? <Link to={`/insights/${next.slug}`}>Next</Link> : <span />}
          </div>
        </footer>
      </div>
    </article>
  );
}
