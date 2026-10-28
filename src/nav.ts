export type NavItem = { to: string; label: string; short?: string };

/** Primary site navigation — kept usable on desktop; full list in mobile menu + footer. */
export const primaryNav: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/executive-career-positioning", label: "Career Positioning", short: "Positioning" },
  { to: "/resume-cv", label: "Resume/CV" },
  { to: "/linkedin", label: "LinkedIn" },
  { to: "/job-search-strategy", label: "Job Search", short: "Job Search" },
  { to: "/executive-board", label: "Executive & Board", short: "Exec & Board" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/insights", label: "Insights" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

/** Footer navigation per brand architecture. */
export const footerNav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/executive-career-positioning", label: "Career Positioning" },
  { to: "/resume-cv", label: "Resume/CV" },
  { to: "/linkedin", label: "LinkedIn" },
  { to: "/executive-board", label: "Executive & Board" },
  { to: "/job-search-strategy", label: "Job Search Strategy" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/insights", label: "Insights" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const footerLegal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/candidate-notice", label: "Candidate Notice" },
  { to: "/career-advisory-terms", label: "Career Advisory Terms" },
];

export const footerMore = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/packages", label: "Packages" },
  { to: "/sample-works", label: "Sample Works" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/assessment", label: "Career Assessment" },
  { to: "/executive-positioning-checklist", label: "Positioning Checklist" },
  { to: "/executive-opportunities", label: "Outreach verification" },
  { to: "/engagement-path", label: "Engagement path" },
  { to: "/agreement", label: "Agreement" },
  { to: "/payment", label: "Payment" },
  { to: "/principles", label: "Principles" },
];

/** @deprecated Prefer footerNav / footerLegal / footerMore */
export const footerColumns = [
  {
    label: "Navigate",
    links: footerNav,
  },
  {
    label: "Practice",
    links: footerMore,
  },
  {
    label: "Legal",
    links: footerLegal,
  },
];
