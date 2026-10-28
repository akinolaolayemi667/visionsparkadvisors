export type ChainStep = { title: string; text: string };

export const chain: ChainStep[] = [
  {
    title: "Experience",
    text: "The record as it was lived: roles, mandates, and the context around them.",
  },
  {
    title: "Leadership value",
    text: "What that record is worth to a particular market, stated at the right altitude.",
  },
  {
    title: "Career narrative",
    text: "The selected, evidence-based story. Full enough to be true. Short enough to be read.",
  },
  {
    title: "Résumé / CV",
    text: "The narrative as a document a decision-maker can assess under time pressure.",
  },
  {
    title: "LinkedIn",
    text: "The public version of the same story, consistent with the document and calm in tone.",
  },
  {
    title: "Target opportunities",
    text: "Roles that fit the evidence, the level, and the direction actually in view.",
  },
  {
    title: "Search strategy",
    text: "How the market is approached, including conversations with recruiters and search firms.",
  },
  {
    title: "Interview positioning",
    text: "How the story holds when a senior reader asks questions, including the difficult ones.",
  },
  {
    title: "Market communication",
    text: "A stable account of the career, told with the same discipline wherever it is encountered.",
  },
];

export type Dimension = { group: string; title: string; text: string };

export const dimensions: Dimension[] = [
  {
    group: "Commercial and enterprise",
    title: "Scale",
    text: "The size of the mandate — P&L, budget, assets, population served, or organizational reach — stated so a reader can place the role.",
  },
  {
    group: "Commercial and enterprise",
    title: "Scope",
    text: "What actually sat inside the remit, across functions, markets, and time, including the edges of accountability.",
  },
  {
    group: "Commercial and enterprise",
    title: "P&L accountability",
    text: "Direct ownership of profit and loss, or a precise account of influence where ownership sat elsewhere.",
  },
  {
    group: "Commercial and enterprise",
    title: "Commercial impact",
    text: "The commercial consequence of the work, in terms a finance-literate reader can follow.",
  },
  {
    group: "Commercial and enterprise",
    title: "Revenue growth",
    text: "Where growth came from, the base it grew from, and what it required.",
  },
  {
    group: "Commercial and enterprise",
    title: "Cost optimization",
    text: "Savings and efficiency that can be explained, including what was protected while cost came out.",
  },
  {
    group: "Commercial and enterprise",
    title: "Enterprise value",
    text: "Contribution to the durability, worth, or strategic position of the institution, beyond a single period’s result.",
  },
  {
    group: "Commercial and enterprise",
    title: "Business development",
    text: "Markets, relationships, and revenue that were opened, with the executive’s role in them made clear.",
  },
  {
    group: "Leadership and organization",
    title: "Leadership",
    text: "The decisions, structures, and people for which the executive was genuinely accountable.",
  },
  {
    group: "Leadership and organization",
    title: "Team leadership",
    text: "The size and caliber of the team, and what changed in it under this leadership.",
  },
  {
    group: "Leadership and organization",
    title: "Organizational complexity",
    text: "Matrix reporting, regulation, multiple stakeholders, and competing mandates — the real difficulty of the environment.",
  },
  {
    group: "Leadership and organization",
    title: "Stakeholder management",
    text: "The specific stakeholders who had to be carried: boards, investors, ministers, regulators, employee representatives, clients, communities.",
  },
  {
    group: "Leadership and organization",
    title: "International exposure",
    text: "Cross-border responsibility that was structural — a region, a set of operations, a board — described as responsibility.",
  },
  {
    group: "Strategy and change",
    title: "Strategic influence",
    text: "Where judgment shaped direction, priorities, or capital, beyond executing a plan already set.",
  },
  {
    group: "Strategy and change",
    title: "Strategic execution",
    text: "Strategy translated into resources, sequencing, and outcomes that can be pointed to.",
  },
  {
    group: "Strategy and change",
    title: "Transformation",
    text: "Change that altered performance, operating model, or direction, told through what is different now.",
  },
  {
    group: "Strategy and change",
    title: "Change management",
    text: "Whether the change was adopted, where resistance sat, and whether it held after the announcement.",
  },
  {
    group: "Strategy and change",
    title: "Innovation",
    text: "New offers, models, or ways of working that reached the market or the institution and produced a consequence.",
  },
  {
    group: "Strategy and change",
    title: "Digital transformation",
    text: "Technology judged by the operating, commercial, or service result it changed.",
  },
  {
    group: "Strategy and change",
    title: "Operational excellence",
    text: "Reliability, quality, safety, service, and the management systems that sustain them.",
  },
  {
    group: "Governance and risk",
    title: "Governance exposure",
    text: "Boards, committees, audit, risk, and remuneration — participation in oversight, described exactly.",
  },
  {
    group: "Governance and risk",
    title: "Risk management",
    text: "Risks identified, taken, or retired, and the consequence of that judgment.",
  },
  {
    group: "Governance and risk",
    title: "M&A",
    text: "Diligence, transaction, integration, or separation, including the value of the deal after the announcement.",
  },
];

export const featuredTitles = [
  "Scale",
  "Commercial impact",
  "Governance exposure",
  "Transformation",
  "Stakeholder management",
  "Strategic execution",
];

export type Step = { n: string; title: string; text: string };

export const engagementSteps: Step[] = [
  {
    n: "01",
    title: "A confidential conversation",
    text: "The purpose, the context, and whether I am the right person to help. Advisory and recruitment are identified as separate from the first exchange.",
  },
  {
    n: "02",
    title: "A professional assessment",
    text: "The record, the market, and the distance between them. What is strong, what is underspecified, and what should remain unclaimed.",
  },
  {
    n: "03",
    title: "Positioning",
    text: "A narrative built from evidence: leadership value, scope, and impact, aligned to the opportunities actually in view.",
  },
  {
    n: "04",
    title: "Market instruments",
    text: "The résumé or CV, LinkedIn, and the way the story is told to search firms, boards, and hiring leaders. The same truth, in the formats each reader uses.",
  },
  {
    n: "05",
    title: "Interview positioning and judgment",
    text: "How the narrative holds in conversation, including the difficult chapters. Where it is useful, a clear view of an opportunity, including when to leave it.",
  },
];

export const boundaries: string[] = [
  "Recruitment — sourcing, assessing, and considering people for genuine employment opportunities — is a separate activity from career advisory.",
  "Career advisory, including résumé or CV positioning, LinkedIn positioning, job-search strategy, interview preparation, and broader counsel, is engaged independently by the individual.",
  "Purchasing a career advisory, résumé, LinkedIn, or positioning service is never a condition of being considered for a genuine recruitment opportunity.",
  "No employment outcome, interview, job placement, Board appointment, or executive appointment is guaranteed.",
  "Recommendations are based on professional assessment and the information available at the time.",
  "Where an advisory engagement and a recruitment process involve the same person, they stay separate in scope, in purpose, and in the basis on which each proceeds.",
];

export type AudienceLink = { href: string; label: string };

export type AudienceGroup = {
  id: string;
  kicker: string;
  title: string;
  text: string;
  people: string[];
  links: AudienceLink[];
};

export const audiences: AudienceGroup[] = [
  {
    id: "executives",
    kicker: "Primary",
    title: "Executives and senior leaders",
    text: "The center of the practice. Chief executives, functional C-suite leaders, managing directors, presidents, vice presidents, general managers, and business-unit leaders whose next conversation will be read at enterprise level.",
    people: [
      "CEO",
      "COO",
      "CFO",
      "CTO",
      "CIO",
      "CMO",
      "CHRO",
      "CRO",
      "Managing Director",
      "President",
      "EVP",
      "SVP",
      "VP",
      "General Manager",
      "Country Manager",
      "Regional Director",
      "Business Unit Leader",
      "Senior Director",
      "Functional Executive",
    ],
    links: [
      { href: "/advisory", label: "Career advisory" },
      { href: "/recruitment", label: "Independent recruiting" },
    ],
  },
  {
    id: "board",
    kicker: "Board",
    title: "Board and portfolio careers",
    text: "Chairs, directors, and executives moving toward a portfolio of non-executive work. The evidence is governance, judgment, and committee contribution — a different reading from an operating career.",
    people: [
      "Board Chair",
      "Board Director",
      "Non-Executive Director",
      "Independent Director",
      "Advisory Board Member",
      "Committee Chair",
      "Board-level candidates",
      "Executives transitioning into portfolio careers",
    ],
    links: [{ href: "/board", label: "Board positioning" }],
  },
  {
    id: "professional",
    kicker: "Professional",
    title: "Directors, managers, and institutional leaders",
    text: "Senior directors, functional leaders, specialists, and high-potential professionals, including those in federal and public-sector institutions. The standard is the same. The altitude matches the mandate.",
    people: [
      "Director",
      "Senior Manager",
      "Middle Management",
      "Functional Leader",
      "Federal and public-sector professionals",
      "Specialists",
      "High-potential professionals",
    ],
    links: [{ href: "/advisory", label: "Career advisory" }],
  },
  {
    id: "emerging",
    kicker: "Separate practice area",
    title: "Selected early careers",
    text: "Entry-level and early-career professionals, engaged selectively and described on their own page so the executive character of the practice stays intact.",
    people: ["Selected entry-level professionals", "Early-career professionals"],
    links: [{ href: "/emerging", label: "Emerging talent" }],
  },
];

export type AdvisoryService = {
  id: string;
  title: string;
  summary: string;
  body: string;
};

export const advisoryServices: AdvisoryService[] = [
  {
    id: "strategy",
    title: "Executive career strategy",
    summary: "A point of view on the career before any document is written.",
    body: "The strategy names the leadership value, the markets in which it is credible, and the story that has to stay true across every later instrument. Options are narrowed with evidence, including attractive options that would be a poor fit.",
  },
  {
    id: "market",
    title: "Career-market positioning",
    summary: "Where the profile sits against the roles being considered.",
    body: "Level, sector, geography, and the impression a reader is likely to form from the current materials. This is often where an engagement becomes specific: what to lead with, what to correct, and what the market will not infer on its own.",
  },
  {
    id: "resume",
    title: "Executive résumé / CV positioning",
    summary: "A document that establishes level, scope, and evidence quickly.",
    body: "Written from the strategy, for the market in view. Résumé or CV, according to the reader. Duties give way to mandate, scale, and consequence. Nothing is added that the executive cannot defend in an interview.",
  },
  {
    id: "linkedin",
    title: "LinkedIn positioning",
    summary: "A public narrative that agrees with the document.",
    body: "Headline, about, and experience, written for senior readers who were not sent a CV. The profile is specific and consistent. It does not adopt a second voice, and it does not advertise urgency or a slogan.",
  },
  {
    id: "branding",
    title: "Leadership branding",
    summary: "A stable market impression, created by the narrative and the way it is told.",
    body: "Here, branding means reputation made legible: the same evidence, the same altitude, and the same restraint wherever a decision-maker encounters the executive. It is a discipline of consistency.",
  },
  {
    id: "search-strategy",
    title: "Executive job-search strategy",
    summary: "A deliberate approach to the market, fitted to seniority.",
    body: "Which roles are worth a conversation, how to approach them, and how to use time. The strategy respects confidentiality and notice, and the reality that a scattered senior search weakens the position it is meant to advance.",
  },
  {
    id: "opportunity",
    title: "Opportunity assessment",
    summary: "A clearer decision about a role, an offer, or a direction.",
    body: "Remit, level, risk, stakeholders, and whether the move strengthens the trajectory the executive actually wants. The assessment is a professional view. The decision stays with the client.",
  },
  {
    id: "interview",
    title: "Interview positioning",
    summary: "The narrative, held in a senior conversation.",
    body: "Preparation for the questions that establish scope and judgment, including awkward chapters, and for the questions a serious candidate should ask. The aim is precision and composure, with answers that match the documents.",
  },
  {
    id: "search-communication",
    title: "Recruiter and search-firm communication",
    summary: "How to be read accurately by people who read against a mandate.",
    body: "Introductions, responses to approaches, and the facts a serious recruiter needs: level, sector, geography, recent mandate, constraints, and the roles that would be a genuine next step.",
  },
  {
    id: "board-csuite",
    title: "Board and C-suite positioning",
    summary: "Narratives for the most scrutinized roles, in the evidence those readers use.",
    body: "C-suite positioning concentrates enterprise accountability. Board positioning concentrates oversight, judgment, and committee contribution. They are related, and they are not the same document.",
  },
  {
    id: "counsel",
    title: "Professional career advisory",
    summary: "Counsel across several instruments, or a single decision taken seriously.",
    body: "Some engagements are a document. Some are a series of conversations about direction, timing, and how to describe a career in transition. The scope is agreed explicitly. Advisory stays independent of any recruitment consideration.",
  },
];

export const homeAudiences = [
  {
    kicker: "Primary",
    title: "Executives and senior leaders",
    text: "CEOs, COOs, CFOs, CTOs, CIOs, CHROs, managing directors, presidents, vice presidents, and business-unit leaders whose market position has to carry enterprise weight.",
    href: "/audiences#executives",
    label: "Who this includes",
  },
  {
    kicker: "Board",
    title: "Chairs, directors, and portfolio careers",
    text: "Board chairs, non-executive and independent directors, committee chairs, and executives preparing for a first or next board mandate.",
    href: "/board",
    label: "Board positioning",
  },
  {
    kicker: "Professional",
    title: "Directors, public institutions, and high-potential leaders",
    text: "Senior managers, functional leaders, specialists, and federal or public-sector professionals whose contribution needs a precise market translation.",
    href: "/audiences#professional",
    label: "The professional audience",
  },
];
