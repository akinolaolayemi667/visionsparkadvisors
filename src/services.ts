export type Service = {
  id: string;
  path: string;
  kicker: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  cta: { href: string; label: string };
  employer?: boolean;
  premium?: boolean;
};

export const services: Service[] = [
  {
    id: "positioning",
    path: "/executive-career-positioning",
    kicker: "Service 01",
    title: "Executive Career Positioning",
    summary:
      "A comprehensive assessment and positioning engagement designed to align professional experience, leadership value, market direction and career narrative with target opportunities.",
    body: "This is the foundation of the practice. Before documents are written, the career is assessed: what the record actually supports, which markets can hear it, and how leadership value should be stated. The result is one integrated narrative that later instruments — résumé/CV, LinkedIn, search and interviews — can carry without contradiction.",
    includes: [
      "Career diagnostic",
      "Target-role alignment",
      "Leadership positioning",
      "Career narrative",
      "Value proposition",
      "Achievement positioning",
      "Executive brand strategy",
      "Market-readiness assessment",
    ],
    cta: { href: "/executive-career-positioning", label: "Explore Executive Positioning" },
  },
  {
    id: "resume",
    path: "/resume-cv",
    kicker: "Service 02",
    title: "Executive Resume/CV Positioning",
    summary:
      "Strategic positioning of the résumé or CV as a market instrument — not document production for its own sake.",
    body: "A finished page that lists duties is not a position. This work diagnoses the current materials, then builds an executive profile, leadership narrative and achievement architecture that a hiring leader, recruiter or search professional can assess under time pressure. Claims stay inside what the evidence supports.",
    includes: [
      "Resume/CV diagnostic",
      "Executive profile",
      "Leadership narrative",
      "Achievement architecture",
      "Quantified impact",
      "Role alignment",
      "Competency alignment",
      "ATS-aware formatting",
      "Recruiter/search discoverability",
      "Keyword strategy",
      "Readability",
      "Board/C-Suite positioning where appropriate",
    ],
    cta: { href: "/resume-cv", label: "Strengthen My Resume/CV" },
  },
  {
    id: "linkedin",
    path: "/linkedin",
    kicker: "Service 03",
    title: "LinkedIn Positioning",
    summary:
      "A public narrative that agrees with the résumé/CV and makes leadership value discoverable to the readers who matter.",
    body: "LinkedIn is persistent and public. It is often the first document a search professional or hiring leader opens. The work covers headline, About, Experience, skills architecture and keyword strategy — written at the altitude of the career, and consistent with every other instrument of the position.",
    includes: [
      "Headline strategy",
      "About section",
      "Experience positioning",
      "Skills architecture",
      "Keyword/search strategy",
      "Leadership brand",
      "Professional credibility",
      "Recruiter discoverability",
      "Profile consistency",
      "Executive narrative",
    ],
    cta: { href: "/linkedin", label: "Optimize My LinkedIn" },
  },
  {
    id: "job-search",
    path: "/job-search-strategy",
    kicker: "Service 04",
    title: "Executive Job Search Strategy",
    summary:
      "A deliberate approach to the market: which roles deserve attention, how to engage search firms and recruiters, and how conversations progress to decisions.",
    body: "At senior levels, a scattered search weakens the position it is meant to advance. This engagement builds target-role and target-company strategy, outreach and application discipline, interview positioning, and judgment around compensation and offers — including when to leave an opportunity alone.",
    includes: [
      "Target-role strategy",
      "Target-company strategy",
      "Opportunity evaluation",
      "Networking strategy",
      "Executive search firm strategy",
      "Recruiter engagement",
      "Outreach messaging",
      "Application strategy",
      "Follow-up strategy",
      "Interview positioning",
      "Compensation conversations",
      "Offer evaluation",
    ],
    cta: { href: "/job-search-strategy", label: "Build My Search Strategy" },
  },
  {
    id: "executive-board",
    path: "/executive-board",
    kicker: "Service 05",
    title: "Executive & Board Positioning",
    summary:
      "Narratives for the most scrutinized roles — C-Suite mandates and Board or portfolio careers — written in the evidence those readers use.",
    body: "An operating narrative and a Board narrative can belong to the same person and still require different proof. This engagement concentrates enterprise leadership, governance, strategic judgment, P&L accountability and committee contribution. Materials stay short, calm and precise. No Board or executive appointment is guaranteed by clearer positioning.",
    includes: [
      "C-Suite positioning",
      "Board narrative",
      "Governance positioning",
      "Enterprise leadership",
      "Strategic leadership",
      "Transformation",
      "Stakeholder influence",
      "P&L accountability",
      "Risk/governance",
      "Shareholder/enterprise value",
      "Board biography positioning",
      "Board-ready résumé/CV",
      "LinkedIn leadership positioning",
    ],
    cta: { href: "/executive-board", label: "Explore Executive & Board Positioning" },
    premium: true,
  },
  {
    id: "recruitment",
    path: "/recruitment",
    kicker: "Service 06",
    title: "Independent Recruitment",
    summary:
      "Talent aligned with business direction — beyond matching titles and keywords.",
    body: "I work with organizations and decision-makers to identify, assess and engage professionals aligned with business and leadership requirements. Recruitment is a separate practice from candidate-paid career advisory. Consideration rests on fit to a genuine opportunity.",
    includes: [
      "Candidate sourcing",
      "Professional talent identification",
      "Leadership search",
      "Executive search support",
      "Targeted candidate outreach",
      "Talent mapping",
      "Candidate assessment",
      "Candidate engagement",
      "Market research",
    ],
    cta: { href: "/recruitment#hiring-enquiry", label: "Discuss Your Hiring Requirement" },
    employer: true,
  },
];

export const audienceCards = [
  {
    id: "executive",
    dominant: true,
    title: "Executive & C-Suite",
    people: "CEO · COO · CFO · CTO · CIO · CHRO · CMO · President · Managing Director",
    text: "Chief executives and functional C-suite leaders whose next conversation will be read at enterprise level.",
  },
  {
    id: "board",
    dominant: true,
    title: "Board & Governance",
    people: "Board Chair · Board Director · NED · Independent Director · Advisory Board",
    text: "Chairs, directors and executives preparing for a first or next board mandate, told through governance evidence.",
  },
  {
    id: "senior",
    dominant: true,
    title: "Senior Leadership",
    people: "EVP · SVP · VP · Director · GM · Country/Regional Leadership",
    text: "Vice presidents, general managers and business-unit leaders whose scope has to carry commercial or institutional weight.",
  },
  {
    id: "management",
    dominant: false,
    title: "Management & Professional",
    people: "Senior Management · Middle Management · Functional Specialists · Federal/Public Sector",
    text: "Directors, managers, specialists and public-sector professionals whose contribution needs a precise market translation.",
  },
  {
    id: "emerging",
    dominant: false,
    title: "Emerging Talent",
    people: "Selected early-career and entry-level professionals",
    text: "Selected early-career and entry-level professionals seeking stronger career positioning — held in its own practice area so the executive standard stays clear.",
  },
];

export const authorityFlow = [
  { title: "Experience", text: "The record as it was lived." },
  { title: "Evidence", text: "Scale, scope and impact made specific." },
  { title: "Positioning", text: "A narrative the market can assess." },
  { title: "Visibility", text: "Documents and profiles that agree." },
  { title: "Opportunity", text: "Roles that fit the evidence." },
];

export const howItWorksSteps = [
  {
    n: "01",
    title: "A confidential conversation",
    text: "The purpose, the context, and whether I am the right person. Advisory and recruitment are identified as separate from the first exchange.",
  },
  {
    n: "02",
    title: "Career or mandate assessment",
    text: "For advisory: the record, the market, and the distance between them. For recruitment: the role, the requirements, and the basis for a genuine search.",
  },
  {
    n: "03",
    title: "Scope and engagement",
    text: "What will be delivered, on what timeline, and on what commercial terms. Nothing is started on assumption. Fees for advisory are agreed before work begins.",
  },
  {
    n: "04",
    title: "Positioning and instruments",
    text: "A narrative built from evidence, then the résumé/CV, LinkedIn, search plan, interview position or Board materials — as agreed.",
  },
  {
    n: "05",
    title: "Market communication",
    text: "How the story is held in conversations with recruiters, search firms, boards and hiring leaders. Recommendations follow assessment. Outcomes are never guaranteed.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Who do you work with?",
    a: "Primarily executives and senior leaders — C-suite, presidents, managing directors, vice presidents and business-unit leaders — as well as Board directors and professionals preparing for Board or portfolio careers. I also work with directors, managers, federal and public-sector professionals, and, selectively, early-career talent in a separate practice area.",
  },
  {
    q: "Is this résumé writing?",
    a: "No. A résumé or CV is one instrument of a market position. The work begins with how experience, leadership value and career potential should be understood by a competitive market — then aligns documents, LinkedIn, search strategy and interview positioning to that narrative.",
  },
  {
    q: "How is recruitment different from career advisory?",
    a: "In recruitment, I source, assess or consider candidates for genuine employment opportunities. In career advisory, an individual engages me independently for positioning, résumé/CV, LinkedIn, job-search strategy or related counsel. Purchasing advisory is never a condition of recruitment consideration.",
  },
  {
    q: "If I buy a service, will you place me in a role?",
    a: "No. Career advisory is an independent professional service. No interview, job placement, Board appointment or executive appointment is guaranteed. Buying advice does not create recruitment consideration, and declining advice does not remove it.",
  },
  {
    q: "Can employers contact you about hiring?",
    a: "Yes. Organizations and hiring decision-makers can discuss talent requirements directly. Independent recruitment covers executive and professional search support, talent mapping, sourcing, assessment and candidate engagement for genuine mandates.",
  },
  {
    q: "How do I start?",
    a: "Request a career assessment, inquire about a specific service, submit a résumé/CV for consideration against genuine opportunities, or discuss a talent requirement if you are hiring. Each route is read differently and treated confidentially.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Career enquiries and hiring mandates are treated as confidential. I do not publish client names as proof of the practice. An introduction or submission happens only with a clear understanding of what may be shared.",
  },
  {
    q: "Do you guarantee interviews or outcomes?",
    a: "No. Recommendations are based on professional assessment and the information available. No employment outcome, interview, placement or appointment is guaranteed.",
  },
  {
    q: "Do you work with early-career professionals?",
    a: "Selectively, and in a separate section of the practice, so the executive character of the brand remains intact. The evidence standard is the same; the scope is fitted to the stage of the career.",
  },
  {
    q: "What should I include in a first message?",
    a: "Your level or context, the nature of the enquiry, and a few sentences on what you want clarified. For candidacies, a current résumé/CV and any confidentiality constraints are useful. Avoid information a first conversation does not need.",
  },
];
