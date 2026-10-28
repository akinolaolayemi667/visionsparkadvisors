/**
 * Approach, packages, trust, and future proof content.
 * Testimonials and case studies publish only when entries are supplied
 * and the corresponding publish flag is true. Never invent client results.
 */

export const approachPillars = [
  {
    title: "Clarity",
    text: "Make professional value easy to understand.",
  },
  {
    title: "Evidence",
    text: "Support positioning with credible achievements and measurable impact.",
  },
  {
    title: "Relevance",
    text: "Align communication with the opportunity and market being targeted.",
  },
  {
    title: "Positioning",
    text: "Connect experience with the level of responsibility being pursued.",
  },
  {
    title: "Integrity",
    text: "Never fabricate experience, achievements, credentials or opportunities.",
  },
];

export type PackageTier = {
  id: string;
  title: string;
  summary: string;
  badge?: string;
  includes: string[];
  cta: { href: string; label: string };
  featured?: boolean;
};

export const packages: PackageTier[] = [
  {
    id: "foundation",
    title: "Career Foundation",
    summary: "Designed for professionals requiring focused positioning support.",
    includes: [
      "Career diagnostic",
      "Resume/CV assessment",
      "Target-role alignment",
      "Resume/CV positioning",
      "Final review",
    ],
    cta: { href: "/contact?intent=assessment", label: "Request Details" },
  },
  {
    id: "executive",
    title: "Executive Positioning",
    summary:
      "A fuller positioning engagement for senior leaders whose narrative must carry enterprise weight.",
    badge: "Most comprehensive positioning option",
    featured: true,
    includes: [
      "Everything in Career Foundation",
      "Executive résumé/CV",
      "LinkedIn positioning",
      "Executive narrative",
      "Leadership value proposition",
      "Achievement positioning",
      "Target-role strategy",
      "Career-search roadmap",
      "Consultation/review",
    ],
    cta: {
      href: "/executive-career-positioning",
      label: "Explore Executive Positioning",
    },
  },
  {
    id: "partnership",
    title: "Executive Search Strategy Partnership",
    summary: "For executives requiring broader advisory support across the search.",
    includes: [
      "Everything in Executive Positioning",
      "Target-company strategy",
      "Networking strategy",
      "Recruiter/search-firm engagement strategy",
      "Outreach messaging",
      "Opportunity evaluation",
      "Interview positioning",
      "Compensation/offer strategy",
      "Ongoing strategic support for the agreed engagement period",
    ],
    cta: { href: "/contact?intent=search-strategy", label: "Discuss Partnership" },
  },
];

export const packageNote =
  "Scope and pricing depend on career level, existing materials, complexity and engagement requirements.";

export const trustIndicators = [
  {
    title: "Confidentiality",
    text: "Career information and professional materials are handled with discretion.",
  },
  {
    title: "Transparency",
    text: "Services, scope, deliverables and fees should be clear before engagement begins.",
  },
  {
    title: "Independence",
    text: "Career advisory engagements remain separate from consideration for genuine recruitment opportunities.",
  },
  {
    title: "Evidence",
    text: "No career achievement should be invented or exaggerated.",
  },
  {
    title: "Professional Judgment",
    text: "Recommendations should reflect the client's actual experience, objectives and market direction.",
  },
];

export const confidentiality = {
  headline: "Your career is personal. Your information should be treated accordingly.",
  body: [
    "Information provided for career assessment, positioning or recruitment purposes is handled professionally and used only in accordance with the purpose communicated to the individual.",
    "Career enquiries and hiring mandates are treated as confidential. Materials are not circulated as marketing proof, and an introduction or submission happens only with a clear understanding of what may be shared.",
  ],
};

export type Testimonial = {
  id: string;
  name: string;
  level: string;
  industry: string;
  service: string;
  quote: string;
  linkedIn?: string;
};

/** Add verified testimonials here. Leave empty until supplied. */
export const testimonials: Testimonial[] = [];

/** When true and testimonials exist, the section publishes. */
export const publishTestimonials = false;

export type CaseStudy = {
  id: string;
  slug: string;
  profile: string;
  challenge: string;
  assessment: string;
  approach: string;
  /** Only include genuine outcomes supplied by the practice. */
  outcome?: string;
};

/** Add verified case studies here. Leave empty until supplied. */
export const caseStudies: CaseStudy[] = [];

/** When true and case studies exist, the section/page publishes entries. */
export const publishCaseStudies = false;

export const caseStudyTemplate: CaseStudy = {
  id: "template",
  slug: "template",
  profile: "Senior Operations Executive",
  challenge: "Strong operational experience but unclear enterprise-level positioning.",
  assessment:
    "Leadership scope and business impact were buried beneath responsibility-driven language.",
  approach:
    "Repositioned the narrative around leadership scale, transformation and measurable outcomes.",
  outcome: undefined,
};
