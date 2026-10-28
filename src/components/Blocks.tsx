import { Link } from "react-router-dom";
import { boundaries, chain } from "../content";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="page-header">
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}

export function SectionHead({
  kicker,
  title,
  deck,
  light = false,
}: {
  kicker: string;
  title: string;
  deck?: string;
  light?: boolean;
}) {
  return (
    <div className="section__head">
      <p className={light ? "kicker kicker--light" : "kicker"}>{kicker}</p>
      <h2>{title}</h2>
      {deck ? <p className="deck">{deck}</p> : null}
    </div>
  );
}

export function Chain() {
  return (
    <ol className="chain">
      {chain.map((step, index) => (
        <li key={step.title}>
          <span className="chain__num">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Assurance() {
  return (
    <aside className="assurance" aria-label="Professional boundaries">
      <p className="kicker">Professional boundaries</p>
      <h2>How an engagement should be read</h2>
      <p className="deck">
        These boundaries are part of the practice, not a footnote. They exist so that hiring
        leaders, candidates, and advisory clients can trust the basis of the work.
      </p>
      <ul>
        {boundaries.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function CtaBand({
  title = "A confidential conversation is the right first step.",
  text = "Advisory and recruitment begin in different places. Say which conversation you need, and it will be treated accordingly.",
  primary = { href: "/engage?intent=advisory", label: "Request a conversation" },
  secondary = { href: "/engage?intent=search", label: "Discuss a search" },
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link className="btn btn--light" to={primary.href}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="btn btn--ghost-light" to={secondary.href}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
