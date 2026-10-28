import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { cta, practice, socials } from "../config";
import { useReveal } from "../hooks/useReveal";
import { footerLegal, footerMore, footerNav, primaryNav } from "../nav";

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? "nav__link is-active" : "nav__link";
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useReveal();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <header className="header">
        <div className="container header__bar">
          <Link to="/" className="brand" aria-label={`${practice.brand} home`}>
            {practice.logoAvailable ? (
              <img
                className="brand__logo"
                src={practice.logo}
                alt=""
                width={220}
                height={72}
                decoding="async"
              />
            ) : (
              <span className="brand__mark" aria-hidden="true" />
            )}
            <span className="brand__text">
              <span className="brand__name">{practice.brand}</span>
              <span className="brand__person">{practice.name}</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass} aria-label={item.label}>
                <span className="nav__full" aria-hidden="true">
                  {item.label}
                </span>
                <span className="nav__short" aria-hidden="true">
                  {item.short ?? item.label}
                </span>
              </NavLink>
            ))}
          </nav>
          <div className="header__end">
            <Link className="btn btn--small header__cta header__cta--primary" to={cta.assessment.href}>
              Assessment
            </Link>
            <Link className="btn btn--small btn--ghost header__cta header__cta--talent" to={cta.talent.href}>
              Talent
            </Link>
            <button
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-cta" aria-label="Primary actions">
        <Link className="mobile-cta__link" to={cta.assessment.href}>
          Career Assessment
        </Link>
        <Link className="mobile-cta__link mobile-cta__link--alt" to={cta.talent.href}>
          Talent Requirement
        </Link>
      </div>

      <div
        id="site-menu"
        className={open ? "overlay is-open" : "overlay"}
        hidden={!open}
        aria-hidden={!open}
      >
        <div className="container overlay__inner">
          <ul className="overlay__primary">
            <li>
              <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/how-it-works" className={navClass} onClick={() => setOpen(false)}>
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" className={navClass} onClick={() => setOpen(false)}>
                Packages
              </NavLink>
            </li>
          </ul>
          <div className="overlay__actions">
            <Link className="btn" to={cta.assessment.href} onClick={() => setOpen(false)}>
              {cta.assessment.label}
            </Link>
            <Link className="btn btn--ghost" to={cta.talent.href} onClick={() => setOpen(false)}>
              {cta.talent.label}
            </Link>
          </div>
        </div>
      </div>

      <main id="main" inert={open || undefined}>
        <Outlet />
      </main>

      <footer className="footer" inert={open || undefined}>
        <div className="container">
          <div className="footer__identity">
            {practice.logoAvailable ? (
              <img
                className="footer__logo"
                src={practice.logo}
                alt={practice.logoAlt}
                width={280}
                height={92}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <p className="footer__name">{practice.brand}</p>
            )}
            <p className="footer__role">
              {practice.name} · {practice.role}
            </p>
            {practice.tagline ? <p className="footer__tagline">{practice.tagline}</p> : null}
            {practice.email ? (
              <p>
                <a href={`mailto:${practice.email}`}>{practice.email}</a>
              </p>
            ) : (
              <p className="footer__placeholder">[Professional Email]</p>
            )}
          </div>

          <div className="footer__grid footer__grid--brand">
            <div>
              <p className="footer__label">Navigate</p>
              <ul>
                {footerNav.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__label">Practice</p>
              <ul>
                {footerMore.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__label">Legal</p>
              <ul>
                {footerLegal.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__label">Professional profiles</p>
              <ul className="footer__socials">
                {socials.map((item) => (
                  <li key={item.id} className={item.dominant ? "is-dominant" : undefined}>
                    {item.href ? (
                      <a href={item.href} rel="noopener noreferrer" target="_blank">
                        {item.label}
                        {item.dominant ? " (primary)" : ""}
                      </a>
                    ) : (
                      <span className="footer__placeholder" title="URL to be supplied">
                        {item.label}: {item.placeholder}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="footer__statement">{practice.statement}</p>
          <p className="footer__fine">
            Career advisory is an independent professional service. No interview, placement, Board
            appointment, executive appointment, or employment outcome is guaranteed. Purchasing
            advisory services is never a condition of recruitment consideration. ContactOut, where
            used, is a professional sourcing/research platform — not an employer of {practice.name}{" "}
            or {practice.brand}.
          </p>
          <div className="footer__bar">
            <span>
              © {new Date().getFullYear()} {practice.brand}. All Rights Reserved.
            </span>
            <span>Independent practice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
