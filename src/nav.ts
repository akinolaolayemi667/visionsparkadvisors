export type NavItem = { to: string; label: string; short?: string };

/** Primary site navigation, in the order shown across the practice. */
export const primaryNav: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/executive-career-positioning", label: "Executive Career Positioning", short: "Positioning" },
  { to: "/resume-cv", label: "Resume/CV" },
  { to: "/linkedin", label: "LinkedIn" },
  { to: "/job-search-strategy", label: "Job Search Strategy", short: "Job Search" },
  { to: "/executive-board", label: "Executive & Board", short: "Exec & Board" },
  { to: "/recruitment", label: "Recruitment" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/insights", label: "Insights" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const footerColumns = [
  {
    label: "Services",
    links: [
      { to: "/executive-career-positioning", label: "Career Positioning" },
      { to: "/resume-cv", label: "Resume/CV" },
      { to: "/linkedin", label: "LinkedIn" },
      { to: "/job-search-strategy", label: "Job Search Strategy" },
      { to: "/executive-board", label: "Executive & Board" },
      { to: "/recruitment", label: "Recruitment" },
    ],
  },
  {
    label: "Practice",
    links: [
      { to: "/about", label: "About" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/insights", label: "Insights" },
      { to: "/faq", label: "FAQ" },
      { to: "/principles", label: "Principles" },
      { to: "/privacy", label: "Privacy" },
    ],
  },
  {
    label: "Correspondence",
    links: [
      { to: "/contact?intent=assessment", label: "Career Assessment" },
      { to: "/contact?intent=talent", label: "Talent Requirement" },
      { to: "/contact?intent=candidacy", label: "Submit a Résumé/CV" },
      { to: "/contact", label: "Contact" },
    ],
  },
];
