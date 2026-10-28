export type JourneyStep = {
  n: string;
  title: string;
  verb: string;
  items: string[];
  text?: string;
  marks?: string[];
};

export const candidateJourney: JourneyStep[] = [
  {
    n: "01",
    title: "Discovery",
    verb: "Understand",
    items: [
      "Career history",
      "Current situation",
      "Career objectives",
      "Target roles",
      "Target industries",
      "Geographical preferences",
      "Compensation considerations",
      "Leadership aspirations",
    ],
  },
  {
    n: "02",
    title: "Diagnostic Assessment",
    verb: "Review",
    items: [
      "Resume/CV",
      "LinkedIn",
      "Career narrative",
      "Positioning",
      "Achievements",
      "Leadership evidence",
      "Target-market alignment",
      "Communication",
      "Search readiness",
    ],
  },
  {
    n: "03",
    title: "Positioning Strategy",
    verb: "Determine",
    items: [
      "Market positioning",
      "Professional value proposition",
      "Target-role alignment",
      "Leadership narrative",
      "Priority achievements",
      "Differentiators",
      "Messaging architecture",
    ],
  },
  {
    n: "04",
    title: "Career Assets",
    verb: "Optimize",
    items: [
      "Résumé/CV",
      "LinkedIn",
      "Executive biography",
      "Board biography",
      "Professional summary",
      "Outreach messaging",
      "Supporting career materials",
    ],
    text: "Depending on the engagement, the instruments that carry the narrative are brought into alignment.",
  },
  {
    n: "05",
    title: "Search Strategy",
    verb: "Develop",
    items: [
      "Opportunity strategy",
      "Target-company approach",
      "Recruiter strategy",
      "Networking plan",
      "Application strategy",
      "Follow-up approach",
    ],
  },
  {
    n: "06",
    title: "Market Execution",
    verb: "Support",
    items: [],
    text: "Support the client in approaching the market with greater clarity, credibility, consistency and confidence.",
    marks: ["Clarity", "Credibility", "Consistency", "Confidence"],
  },
  {
    n: "07",
    title: "Interview & Decision Support",
    verb: "Where included",
    items: [
      "Interview positioning",
      "Leadership stories",
      "Executive-level communication",
      "Compensation discussion",
      "Offer evaluation",
    ],
  },
];

export type DiagnosticArea = {
  title: string;
  question: string;
};

export const diagnosticAreas: DiagnosticArea[] = [
  {
    title: "Strategic Positioning",
    question: "Is the target leadership level immediately clear?",
  },
  {
    title: "Leadership Scope",
    question:
      "Are team size, organizational complexity, geography and decision authority visible?",
  },
  {
    title: "Commercial Impact",
    question:
      "Are revenue, growth, profitability, savings, investment or other outcomes demonstrated?",
  },
  {
    title: "Transformation",
    question: "Does the document communicate change, innovation, turnaround or modernization?",
  },
  {
    title: "Executive Influence",
    question:
      "Are Board, C-Suite, investor, government, customer and stakeholder interactions appropriately represented?",
  },
  {
    title: "Achievement Evidence",
    question: "Are statements supported by meaningful evidence and outcomes?",
  },
  {
    title: "Market Alignment",
    question: "Does the profile support the roles being targeted?",
  },
  {
    title: "Search Visibility",
    question:
      "Is the profile structured in a way that improves professional discoverability and readability?",
  },
  {
    title: "Career Narrative",
    question:
      "Can a decision-maker understand the progression and strategic value of the candidate’s career?",
  },
];

export type ComparisonExample = {
  id: string;
  label: string;
  before: string;
  after: string;
  note: string;
};

export const comparisonExamples: ComparisonExample[] = [
  {
    id: "operations",
    label: "Operations leadership",
    before: "Responsible for global operations and team management.",
    after:
      "Directed multi-market operations across [X] territories, leading [X]+ professionals and managing [scope/budget], while delivering [measurable business outcome].",
    note: "Scope, geography, team and outcome become readable. Placeholders mark where the client’s own evidence belongs.",
  },
  {
    id: "commercial",
    label: "Commercial impact",
    before: "Drove revenue growth and expanded the business into new markets.",
    after:
      "Grew revenue from [base] to [result] over [period], opening [X] markets and establishing [channel/partner model] that contributed [share] of new business.",
    note: "Growth is stated from a base, over a period, through a method — not as an adjective.",
  },
  {
    id: "transformation",
    label: "Transformation",
    before: "Led digital transformation initiatives across the organization.",
    after:
      "Led a [scope] operating-model and digital program affecting [teams/markets], reducing [cost/cycle time] by [measure] while protecting [service/quality] standards.",
    note: "Transformation is judged by what changed and what was protected while it changed.",
  },
  {
    id: "governance",
    label: "Board and stakeholders",
    before: "Worked closely with senior leadership and board stakeholders.",
    after:
      "Reported to the [Board/Committee] on [risk/performance], supporting [decision] through [analysis/governance process] under [regulatory or investor] scrutiny.",
    note: "Proximity becomes participation. Oversight is described exactly.",
  },
];
