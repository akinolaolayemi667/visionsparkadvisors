import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { practice } from "../config";

const primary = [
  { to: "/approach", label: "Approach" },
  { to: "/services", label: "Services" },
  { to: "/audiences", label: "Audiences" },
  { to: "/perspectives", label: "Perspectives" },
  { to: "/about", label: "About" },
];

const secondary = [
  { to: "/advisory", label: "Career advisory" },
  { to: "/recruitment", label: "Independent recruiting" },
  { to: "/board", label: "Board positioning" },
  { to: "/emerging", label: "Emerging talent" },
  { to: "/principles", label: "Principles" },
  { to: "/privacy", label: "Privacy" },
];

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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
          <Link to="/" className="brand">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__name">{practice.name}</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            {primary.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header__end">
            <Link className="btn btn--small header__cta" to="/engage">
              Contact
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
      <div
        id="site-menu"
        className={open ? "overlay is-open" : "overlay"}
        hidden={!open}
        aria-hidden={!open}
      >
        <div className="container">
          <ul className="overlay__primary">
            {primary.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/engage" className={navClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="overlay__secondary">
            {secondary.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main id="main" inert={open || undefined}>
        <Outlet />
      </main>
      <footer className="footer" inert={open || undefined}>
        <div className="container">
          <p className="footer__statement">{practice.statement}</p>
          <div className="footer__grid">
            <div>
              <p className="footer__label">Practice</p>
              <p style={{ marginTop: 0 }}>{practice.role}</p>
              {practice.email ? (
                <p>
                  <a href={`mailto:${practice.email}`}>{practice.email}</a>
                </p>
              ) : null}
              {practice.phone ? <p>{practice.phone}</p> : null}
              {practice.linkedin ? (
                <p>
                  <a href={practice.linkedin}>LinkedIn</a>
                </p>
              ) : null}
            </div>
            <div>
              <p className="footer__label">Work</p>
              <ul>
                <li>
                  <Link to="/approach">Approach</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/advisory">Career advisory</Link>
                </li>
                <li>
                  <Link to="/recruitment">Recruitment</Link>
                </li>
                <li>
                  <Link to="/principles">Principles</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__label">People</p>
              <ul>
                <li>
                  <Link to="/audiences">Audiences</Link>
                </li>
                <li>
                  <Link to="/board">Board</Link>
                </li>
                <li>
                  <Link to="/emerging">Emerging talent</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer__label">Correspondence</p>
              <ul>
                <li>
                  <Link to="/engage">Request a conversation</Link>
                </li>
                <li>
                  <Link to="/engage?intent=search">Discuss a search</Link>
                </li>
                <li>
                  <Link to="/perspectives">Perspectives</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer__fine">
            Career advisory is an independent professional service. No interview, placement, Board
            appointment, executive appointment, or employment outcome is guaranteed. Purchasing
            advisory services is never a condition of recruitment consideration.
          </p>
          <div className="footer__bar">
            <span>© {new Date().getFullYear()} {practice.name}</span>
            <span>Independent practice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
