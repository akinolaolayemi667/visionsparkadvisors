/**
 * Practice configuration.
 * Fill factual fields when available. Do not invent email, social URLs,
 * photographs, testimonials, pricing or booking links.
 *
 * Portrait: place a real professional photograph at /public/portrait.jpg
 * and set portraitAvailable to true. Optional additional photos may be
 * listed under `photos` once files exist in /public/photos/.
 */
export const practice = {
  /** Practice / site brand. */
  brand: "VisionSpark Advisors",
  /** Principal. */
  name: "Joel Facco",
  role: "Executive Career Strategist | Independent Recruiter",
  extendedRole: [
    "Independent Recruiter",
    "Executive Job Search Specialist",
    "Executive Résumé/CV Positioning Specialist",
    "LinkedIn Positioning Strategist",
  ],
  statement: "Positioning Talent. Strengthening Careers. Connecting Leadership With Opportunity.",
  tagline: "Insight · Strategy · Growth",
  brandMessage:
    "I help professionals communicate their career value with greater clarity, evidence and strategic relevance — and I help organizations connect with talent aligned with their leadership and business needs.",
  differentiator: [
    "Recruitment",
    "Executive Career Positioning",
    "Resume/CV Strategy",
    "LinkedIn Positioning",
    "Job Search Strategy",
  ],
  supporting:
    "Executive Career Strategy · Independent Recruitment · Resume/CV Positioning · LinkedIn Strategy · Executive Job Search",
  trustMarks: ["Confidential", "Professional", "Evidence-Led", "Candidate-Centered"],
  /** Override at build time with VITE_SITE_URL (custom domain). */
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
    "https://visionsparkadvisors.vercel.app",
  /** Relative to /public. */
  portrait: "/portrait.jpg",
  portraitAvailable: true,
  portraitAlt: "Professional portrait of Joel Facco, VisionSpark Advisors",
  logo: "/logo.png",
  /** Cream/gold treatment for navy fields (hero). */
  logoOnDark: "/logo-on-dark.png",
  logoAvailable: true,
  logoAlt: "VisionSpark Advisors logo — Insight, Strategy, Growth",
  /** Additional approved photographs — add files under /public/photos/ before enabling. */
  photos: [] as { src: string; alt: string }[],
  email: "joelfacco.positioning@gmail.com",
  phone: "",
  /** [Booking Link] — optional scheduling URL when approved. */
  bookingUrl: "",
};

/**
 * Professional profiles. LinkedIn is the dominant channel.
 * Leave href empty until a real profile URL is supplied.
 */
export type SocialLink = {
  id: string;
  label: string;
  href: string;
  placeholder: string;
  dominant?: boolean;
};

export const socials: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-facc",
    placeholder: "[LinkedIn URL]",
    dominant: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/iamjoelfacc",
    placeholder: "[Instagram URL]",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/19c5Wa3VJT/",
    placeholder: "[Facebook URL]",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/joelliterary",
    placeholder: "[X URL]",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@joel.facc",
    placeholder: "[TikTok URL]",
  },
  {
    id: "threads",
    label: "Threads",
    href: "",
    placeholder: "[Threads URL]",
  },
];

export const seoKeywords = [
  "Executive Career Strategist",
  "Executive Resume Specialist",
  "Executive CV Specialist",
  "Executive Resume Positioning",
  "Executive Job Search Strategy",
  "C-Suite Resume",
  "CEO Resume",
  "COO Resume",
  "CFO Resume",
  "Board Resume",
  "Board CV",
  "Board Biography",
  "Executive LinkedIn Optimization",
  "Executive LinkedIn Positioning",
  "Executive Career Positioning",
  "Board Career Strategy",
  "Executive Job Search",
  "Leadership Positioning",
  "Executive Recruitment",
  "Independent Recruiter",
  "Senior Leadership Recruitment",
  "Executive Career Advisory",
];

export const cta = {
  assessment: { href: "/assessment", label: "Request a Career Assessment" },
  resumeAssessment: { href: "/contact?intent=resume", label: "Request a Resume/CV Assessment" },
  linkedin: { href: "/contact?intent=linkedin", label: "Strengthen My LinkedIn Positioning" },
  talent: { href: "/contact?intent=talent", label: "Discuss a Talent Requirement" },
  hiring: { href: "/recruitment#hiring-enquiry", label: "Discuss Your Hiring Requirement" },
  executive: { href: "/contact?intent=board", label: "Discuss My Executive Positioning" },
  board: { href: "/executive-board#board", label: "Explore Board Positioning" },
  searchStrategy: { href: "/contact?intent=search-strategy", label: "Build My Search Strategy" },
  conversation: { href: "/contact", label: "Start a Conversation" },
  services: { href: "/#services", label: "Explore My Services" },
  explorePositioning: {
    href: "/executive-career-positioning",
    label: "Explore Executive Positioning",
  },
  checklist: {
    href: "/executive-positioning-checklist",
    label: "Executive Positioning Checklist",
  },
  outreach: {
    href: "/executive-opportunities",
    label: "Verify outreach",
  },
};

/** Future payment/onboarding sequence — assessment never auto-charges. */
export const engagementPath = [
  { id: "assessment", title: "Assessment", text: "Structured career or mandate conversation. No charge for requesting an assessment." },
  { id: "recommendation", title: "Recommendation", text: "A clear view of what would help — and what would not." },
  { id: "selection", title: "Service selection", text: "Agree the tier or instruments required." },
  {
    id: "agreement",
    title: "Agreement",
    text: "Scope, deliverables, fees and advisory terms confirmed in writing via the engagement confirmation flow.",
  },
  {
    id: "payment",
    title: "Payment",
    text: "Payment follows written agreement only. Stripe Checkout can be enabled with Price IDs — never for requesting an assessment.",
  },
  { id: "questionnaire", title: "Questionnaire", text: "Structured intake once an engagement is confirmed." },
  { id: "upload", title: "Document upload", text: "Secure materials exchange for the agreed work." },
  { id: "work", title: "Strategy / positioning work", text: "The advisory or recruitment activity as scoped." },
];

/** Future client-portal capabilities — not live until a secure platform is connected. */
export const portalCapabilities = [
  "Questionnaire",
  "Document upload",
  "Project status",
  "Deliverables",
  "Revisions",
  "Appointment scheduling",
  "Invoices",
  "Resources",
  "Messages",
  "Job-search tracker",
];
