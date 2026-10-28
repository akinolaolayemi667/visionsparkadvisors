import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta(
    "Page not found — Fakorede Joel",
    "This address does not match a page on Fakorede Joel’s practice site.",
  );

  return (
    <section className="not-found">
      <div className="container">
        <p className="kicker">404</p>
        <h1>This address does not match a page.</h1>
        <p className="lede">The practice is still here. The link may be out of date.</p>
        <div className="hero__actions">
          <Link className="btn" to="/">
            Return home
          </Link>
          <Link className="text-link" to="/engage">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
