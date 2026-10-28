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
    cta: { href: "/assessment", label: "Request Details" },
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

/**
 * Named client references only — no invented quotes, outcomes or job claims.
 * Add level / service / note when the client has authorised fuller detail.
 */
export type ClientReference = {
  id: string;
  name: string;
  /** Optional — only when supplied and approved. */
  note?: string;
};

/**
 * Client references authorised for name + engagement type.
 * Do not publish client phone numbers, personal emails or full documents.
 */
export const clientReferences: ClientReference[] = [
  {
    id: "harold-wodlinger",
    name: "Harold M. Wodlinger, Ph.D.",
    note: "Independent Board Director / MedTech executive — Board-ready CV and governance positioning",
  },
  {
    id: "mark-jones",
    name: "Mark Jones",
    note: "Chair, Board Director and Strategic Advisor — executive materials and standalone Board Director profile",
  },
  {
    id: "sonia-rose",
    name: "Sonia Rose",
    note: "Career positioning engagement",
  },
  {
    id: "gerd-holl",
    name: "Gerd Holl",
    note: "International Managing Director — LinkedIn headline, About and experience positioning",
  },
  {
    id: "lance-berg",
    name: "Lance K. R. Berg, P.Eng.",
    note: "Board & Strategic Adviser / energy executive — Board profile and value-highlight architecture",
  },
  {
    id: "edward-cloues",
    name: "Edward Cloues",
    note: "Executive & Board biography positioning",
  },
];

/** Add verified testimonials (with quotes) here when supplied. */
export const testimonials: Testimonial[] = [];

/** When true and testimonials exist, quote cards publish. */
export const publishTestimonials = false;

/** When true and clientReferences exist, the name list publishes. */
export const publishClientReferences = true;

/**
 * How VisionSpark Advisors structures executive materials.
 * Describes method — not fabricated placement results.
 */
export const workMethod = {
  kicker: "How the work is done",
  title: "Executive materials built for how serious readers actually assess leadership.",
  deck: "Board biographies, executive CVs and LinkedIn profiles are positioned for altitude, evidence and market relevance — never for keyword theatre or invented claims.",
  pillars: [
    {
      title: "Board & Chair altitude",
      text: "Governance, stewardship, enterprise judgment and stakeholder value are stated in the language chairs, nomination committees and search firms use.",
    },
    {
      title: "Evidence architecture",
      text: "Scale, P&L, exits, transformation, capital programmes and leadership span are selected and ordered so impact is readable under time pressure.",
    },
    {
      title: "Instrument alignment",
      text: "Résumé/CV, Board biography and LinkedIn carry one coherent career narrative — same altitude, no contradictory claims.",
    },
    {
      title: "Integrity of record",
      text: "Achievements stay inside what the career can defend. Experience, credentials and outcomes are never fabricated.",
    },
  ],
};

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

/**
 * Engagement studies based on real VisionSpark Advisors deliverable work.
 * Outcomes describe materials produced — not invented interviews, offers or appointments.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "medtech-board",
    slug: "medtech-independent-board-director",
    profile: "Independent Board Director · Chairman · MedTech Executive",
    challenge:
      "A deep MedTech operating and venture record needed to read clearly as Independent Director and Chair material — not only as an inventor or operator CV.",
    assessment:
      "Governance weight, board chairmanships, corporate exits, due diligence counsel and commercialization leadership were present in the career, but the narrative had to elevate board stewardship and shareholder-value judgment.",
    approach:
      "Rebuilt the materials around Independent Board Director and Chairman positioning: executive profile, key accomplishments, board and governance leadership, strategic advisory, academic contribution and intellectual property — ordered for nomination-committee and search reading.",
    outcome:
      "Deliverables: Board-ready executive CV and Independent Director / MedTech governance narrative. No appointment or interview outcome is claimed by the positioning work itself.",
  },
  {
    id: "chair-board-profile",
    slug: "chair-board-director-strategic-advisor",
    profile: "Chair · Board Director · Strategic Advisor · Senior Executive Leader",
    challenge:
      "A long UK and international executive career across leisure, hospitality, visitor attractions and technology required a Chair / NED narrative distinct from a full operating CV.",
    assessment:
      "Chairmanship, enterprise transformation, P&L leadership and multi-site governance were strong; the market needed a concise Board Director profile alongside executive materials.",
    approach:
      "Produced Chair and Board Director positioning with a standalone Board Director profile: governance themes, enterprise value creation, transformation evidence and advisory readiness — written for Board and Advisory Board conversations.",
    outcome:
      "Deliverables: Executive positioning materials and a standalone Board Director profile. Placement or appointment results are not invented for this site.",
  },
  {
    id: "linkedin-international-md",
    slug: "international-executive-linkedin-positioning",
    profile: "International Executive · Managing Director · Regional Leadership · Executive Advisor",
    challenge:
      "An active international MD / regional leadership career needed LinkedIn positioning that preserved current employment accuracy while opening Executive Advisory and Board visibility.",
    assessment:
      "Headline and About risked either understating international P&L scale or implying an employment change. Advisory ambition belonged in Headline and About — not as a fabricated current Experience entry.",
    approach:
      "Refined LinkedIn headline, About, experience language, pinned skills and banner direction for international executive search visibility (DACH · CEE · EMEA), keeping employment chronology intact and holding advisory/Board ambition in narrative rather than inventing a role.",
    outcome:
      "Deliverables: LinkedIn positioning package (headline, About, experience refinements, skills architecture and implementation notes). No new role or board seat is claimed as a result.",
  },
  {
    id: "energy-board-adviser",
    slug: "energy-board-strategic-adviser",
    profile: "Board & Strategic Adviser · Energy Executive · Professional Engineer",
    challenge:
      "Technical and COO-level energy leadership needed a Board Profile that translated asset, capital and operational scale into governance-relevant value for boards and executive teams.",
    assessment:
      "Operating evidence was substantial; the reading required board-relevant value highlights, skills for oversight and a calm Board Profile rather than a dense technical CV alone.",
    approach:
      "Structured a Board & Strategic Adviser profile: board profile narrative, value highlights, skills architecture, professional experience and board/community service — oriented to capital allocation, risk oversight and stakeholder alignment.",
    outcome:
      "Deliverables: Board profile and strategic-adviser positioning materials. No board appointment is claimed by this engagement summary.",
  },
];

/** When true and case studies exist, the section/page publishes entries. */
export const publishCaseStudies = true;

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
