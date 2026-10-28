import { Link } from "react-router-dom";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta(
    `Page not found — ${practice.brand}`,
    `This address does not match a page on the ${practice.brand} site.`,
    { path: "/404" },
  );

  return (
    <section className="not-found">
      <div className="container">
        {practice.logoAvailable ? (
          <img
            className="not-found__logo"
            src={practice.logo}
            alt={practice.brand}
            width={220}
            height={72}
          />
        ) : (
          <p className="kicker">404</p>
        )}
        <h1>This address does not match a page.</h1>
        <p className="lede">
          {practice.brand} is still here. The link may be out of date — or you may have been looking
          for verification of outreach.
        </p>
        <div className="hero__actions">
          <Link className="btn" to="/">
            Return home
          </Link>
          <Link className="btn btn--ghost" to="/executive-opportunities">
            Verify outreach
          </Link>
          <Link className="text-link" to="/assessment">
            Request a Career Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
