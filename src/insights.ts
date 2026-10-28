export const insightCategories = [
  "Executive Careers",
  "Resume/CV Strategy",
  "Executive Search",
  "LinkedIn Positioning",
  "Board Careers",
  "Leadership Positioning",
  "Job Search Strategy",
  "Recruitment",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type Insight = {
  slug: string;
  category: InsightCategory;
  title: string;
  dek: string;
  pull: string;
  paragraphs: string[];
};

export const insights: Insight[] = [
  {
    slug: "experience-and-positioning",
    category: "Leadership Positioning",
    title: "Strong experience does not speak for itself",
    dek: "Accomplishment is a record. Positioning is the work of making that record legible to a market.",
    pull: "Strong experience alone does not guarantee strong market positioning.",
    paragraphs: [
      "A long career produces a record: titles, mandates, reorganizations, years. That record is the raw material of a market position. It becomes one only when someone selects it, orders it, and tells it at the altitude a serious reader expects.",
      "Highly capable people are often the least well translated. They know the work from the inside, so they describe it as a sequence of responsibilities. A board, a chief executive, or a search professional is reading for something else. They are trying to judge scope, judgment, and the conditions under which results were achieved. When those are missing, the experience is real and the market impression is thin.",
      "The gap is rarely a lack of achievement. It is a lack of selection. A career of twenty or thirty years cannot be told in full. Positioning chooses the evidence that carries seniority — commercial, operational, institutional, or governmental — and sets aside the material that dilutes it.",
      "Scale is a typical casualty. So are P&L accountability, governance exposure, the complexity of the stakeholder field, and the difference between executing a plan and shaping one. These are not decorations. They are how a reader decides whether a person has held a mandate of the size being discussed.",
      "This practice exists for that translation. Independent recruiting on one side of the table. Executive career strategy on the other. The résumé, the LinkedIn profile, the search conversation, and the interview are instruments. They should all be telling a compatible, evidence-based story.",
      "The market meets the story it is given. A clearer story does not invent a career. It allows the career that exists to be understood.",
    ],
  },
  {
    slug: "both-sides",
    category: "Recruitment",
    title: "A career has to be legible on both sides of the table",
    dek: "What a professional needs to convey, and what a decision-maker needs to understand, are related tasks. They are not the same task.",
    pull: "Decision-makers want a clear basis for a yes or a no. They are rarely helped by a catalogue of intentions.",
    paragraphs: [
      "Every senior hiring decision is a translation. The candidate is trying to convey a career. The recruiter, the hiring leader, the search partner, or the board is trying to decide whether the evidence fits a mandate. Confusion between those two tasks produces documents that feel full to the author and unfinished to the reader.",
      "Candidates often want the whole of their history to be recognized. That wish is human, and it is a poor organizing principle for a market narrative. Decision-makers need scale, context, and impact in a form they can compare. They need to know what the person was accountable for, what they influenced, and what they inherited.",
      "I keep both readings in mind. Advisory work helps a professional present a true account of leadership value. Recruitment work asks whether that account fits a genuine opportunity. The standards are related. The activities are separate. Engaging one does not create the other, and purchasing advice is never the price of being considered.",
      "The most useful narratives are almost austere. They name the organization, the remit, the constraints, and the result. They leave the reader able to form a view. Serious readers prefer that. They do not need to be persuaded by adjectives. They need enough evidence to do their own judging.",
      "When I am recruiting, I am on the side of the mandate. When I am advising, I am helping a professional become clearer in the terms a good recruiter, a board, or a hiring leader is already using. The value of the practice is that those terms are familiar from both seats.",
    ],
  },
  {
    slug: "evidence",
    category: "Leadership Positioning",
    title: "Evidence carries a leadership story",
    dek: "Scale, scope, and impact persuade when they are specific. Praise does not survive contact with a careful reader.",
    pull: "A contribution is described as a contribution. Ownership is described as ownership. That restraint is what makes the rest believable.",
    paragraphs: [
      "Senior readers have seen every adjective. Strategic, dynamic, transformational, and results-oriented travel from one résumé to the next without carrying a fact. They do not establish a P&L, a turnaround, a regulatory outcome, or the leadership of a large organization. At this level they can weaken a document, because they suggest the evidence was not at hand.",
      "Evidence has a perimeter. Revenue from a stated base. A cost position improved without hollowing out the operation. A merger integrated, and the state of it a year later. A digital program that changed a service. A public institution steered through a reform. A risk reduced, and the method by which it was reduced. International responsibility that was real: a region, a board, a set of operating companies.",
      "The same standard applies to leadership. Team size, caliber, and what changed because of how people were led. Stakeholder management named properly: a minister, a regulator, an investor, employee representatives, a concentrated customer. Governance exposure described as participation in oversight, not as proximity to important people.",
      "Positioning is the selection and ordering of this evidence so that a reader can see the level. It is equally careful about what cannot be claimed. Invented scope is a liability in any serious process. It fails late, in an interview or a reference, which is the most expensive moment for it to fail.",
      "Public-sector and institutional careers deserve the same precision, on their own terms. Policy, stewardship, delivery, regulation, and political interface are forms of weight. They should be translated, not dressed in a commercial vocabulary that does not belong to them.",
    ],
  },
  {
    slug: "the-resume",
    category: "Resume/CV Strategy",
    title: "A résumé is one instrument of a position",
    dek: "The document matters. It does not replace the strategy, the public profile, the search, or the interview.",
    pull: "When the instruments disagree, a careful market trusts none of them fully.",
    paragraphs: [
      "The résumé or CV is one expression of a strategy. The strategy comes first. The document has a job: to establish level, scope, and evidence quickly, and to earn a conversation with a search professional, a board secretary, or a hiring leader who is reading under time pressure.",
      "LinkedIn does a different job. It is public and persistent. It is read by people who were not sent a document. It should agree with the résumé. Senior readers notice the gap between a careful CV and a profile written in the language of a motivational poster. That gap reads as uncertainty about who the person is in the market.",
      "Search strategy is different again. It is a point of view on which opportunities deserve a conversation, which are flattering and wrong, and how to speak with recruiters and search firms. A broadcast is not a strategy. At senior levels it lowers the temperature of the very conversations it hopes to start.",
      "Interview positioning is the same story, held in dialogue, including on the subjects a candidate would prefer to hurry past. If the spoken account and the written account diverge, the written one stops working.",
      "The sequence I work to align is straightforward: experience, leadership value, career narrative, résumé or CV, LinkedIn, target opportunities, search strategy, interview positioning, and the way the career is discussed in the market. A finished document with an unclear strategy is a finished artefact. It is not yet a position.",
    ],
  },
  {
    slug: "board-careers",
    category: "Board Careers",
    title: "Board positioning is a different conversation",
    dek: "Governance, judgment, and committee contribution are not a reprint of an executive CV with a new objective line.",
    pull: "Proximity to a board is not the same thing as having done a director’s work.",
    paragraphs: [
      "An executive career and a board career can belong to the same person and still require different proof. An operating narrative is built on mandate, execution, and results. A board narrative is built on judgment, oversight, and the quality of challenge around a table.",
      "Chairs, nomination committees, and search firms working board mandates read for governance literacy. They look for committee contribution — audit, risk, remuneration, nomination, and others — and for evidence that a director can hold management to account without becoming a second management team. They look for independence, conflicts, sector context, and usefulness in ambiguity.",
      "Executives moving toward a portfolio, or toward a first non-executive role, often extend the operating CV and add a line about board interest. The experience may be entirely sufficient. The document has not made the case in the terms the reader is using. Where the exposure is real — reporting to a board, serving on one, leading a management forum that mirrors governance — it should be told with precision. Where it is thin, the narrative should be honest about readiness.",
      "Board materials are short. A board CV, a biography of a few hundred words, and a LinkedIn presence that does not contradict them. They are calm. They assume an adult reader.",
      "A clearer narrative does not appoint anyone. No Board seat is guaranteed by better positioning, any more than an executive role is. What it does is allow a serious reader to see the fitness that is actually there, and to see its limits before either side spends a process discovering them.",
    ],
  },
  {
    slug: "search-conversations",
    category: "Executive Search",
    title: "How to be understood by search professionals",
    dek: "Recruiters and search firms read for mandate fit. The communication has to respect that reading.",
    pull: "Paying for advisory is never a route into a recruitment process.",
    paragraphs: [
      "Search professionals and in-house talent leaders read quickly, and they read against a mandate. They are assembling a basis for a conversation, or a basis for declining one. They are not an audience for a life story. The communication that helps them is specific about level, sector, geography, the shape of recent mandates, and the kind of role that would be a serious next step.",
      "A résumé that opens on a personal philosophy, or a headline that could describe ten thousand people, asks the reader to do the positioning work. Many will not. The professional who has already made the level and the evidence visible is easier to advance — and easier to decline quickly, which is also a fair outcome.",
      "There is a separate discipline in the conversation itself. Over-claiming is remembered. So is vagueness about compensation, notice, the reason for moving, and restrictions. Confidentiality, handled properly, builds trust. A scatter of applications that ignores fit does the opposite. It suggests the candidate has not decided what they are for.",
      "When I recruit, I source and assess for a genuine opportunity. Consideration rests on fit. It never rests on whether someone has bought résumé, LinkedIn, or advisory work from me. Those are independent professional services, engaged by the individual for their own reasons.",
      "When I advise, I help a professional become clearer in exactly the terms a good search conversation already requires. The two modes inform each other. They are not mixed, and they are not sold as a pair.",
    ],
  },
  {
    slug: "why-strong-executives-still-struggle-to-get-shortlisted",
    category: "Executive Careers",
    title: "Why Strong Executives Still Struggle to Get Shortlisted",
    dek: "Capability is often not the problem. The market cannot shortlist what it cannot quickly understand.",
    pull: "Shortlists are assembled under time pressure. Ambiguity is expensive for the reader.",
    paragraphs: [
      "Strong executives are shortlisted when a reader can place them against a mandate with confidence. When the résumé, LinkedIn profile, or first conversation leaves level, scope, or fit unresolved, the process moves on — even when the underlying career is substantial.",
      "Common causes are responsibility-led language, missing commercial or institutional scale, documents that disagree with each other, and a search posture that is broad rather than targeted. None of these prove a weak career. They prove an incomplete translation.",
      "Positioning does not invent fitness. It makes genuine fitness readable early enough to matter. That is a different task from polishing adjectives or lengthening a document.",
    ],
  },
  {
    slug: "responsibilities-dont-define-executive-value",
    category: "Leadership Positioning",
    title: "Responsibilities Don’t Define Executive Value — Impact Does",
    dek: "A list of duties describes a job. A market narrative has to describe what changed under a person’s leadership.",
    pull: "Readers at senior levels are comparing impact under constraint, not catalogues of ownership.",
    paragraphs: [
      "Responsibility language tells a reader what sat on a desk. Impact language tells a reader what moved because of judgment, leadership and execution. At executive altitude, the second reading decides whether a conversation continues.",
      "Impact need not be theatrical. It can be a margin restored, a risk contained, a transformation that stuck, a portfolio that performed under inherited conditions, or a public mandate delivered without institutional damage. What matters is that the contribution is specific and proportionate.",
      "When a document stays at the level of duties, capable people sound interchangeable. When it states impact with restraint and evidence, the same career becomes distinguishable.",
    ],
  },
  {
    slug: "what-makes-an-executive-resume-different",
    category: "Resume/CV Strategy",
    title: "What Makes an Executive Resume Different?",
    dek: "An executive résumé is organized for mandate fit, scale and judgment — not for a complete inventory of tasks.",
    pull: "The job of the document is to establish level quickly, then earn a conversation.",
    paragraphs: [
      "An executive résumé assumes a reader who already knows what senior work looks like. It does not educate with soft skills. It establishes the altitude of recent mandates, the size and nature of what was led, and the evidence a search professional can use.",
      "Length, order and emphasis change with level. Early-career documents often need breadth. Executive documents need selection. Detail that proves seniority stays. Detail that proves busyness goes.",
      "The document remains one instrument. It should agree with LinkedIn and with how the career is described in conversation. Divergence between those channels is itself a signal.",
    ],
  },
  {
    slug: "executive-resume-vs-traditional-resume",
    category: "Resume/CV Strategy",
    title: "Executive Resume vs Traditional Resume",
    dek: "The difference is not decoration. It is the altitude of evidence and the discipline of selection.",
    pull: "A traditional résumé often proves activity. An executive résumé has to prove leadership scale.",
    paragraphs: [
      "Traditional résumés frequently succeed by showing competence across tasks, tools and teams. Executive readers are asking different questions: What was the remit? What was at stake? What did this person own versus contribute? What would transfer to a larger or different mandate?",
      "Formatting trends matter less than narrative discipline. Dense responsibility lists, generic summaries and keyword stuffing can make a senior career look mid-level. Clean structure helps only when the substance is at the right altitude.",
      "Moving from one form to the other is not a template swap. It is a repositioning of how the career is read.",
    ],
  },
  {
    slug: "how-recruiters-read-a-resume",
    category: "Executive Search",
    title: "How Recruiters Read a Resume",
    dek: "Recruiters read against a mandate, under time pressure, looking for a basis to advance or decline.",
    pull: "They are not reading for inspiration. They are reading for fit they can defend.",
    paragraphs: [
      "A recruiter or search professional scans for level, sector, geography, recent mandate shape and obvious mismatches. The first pass is often measured in seconds. Clarity at the top of the document is therefore not cosmetic — it determines whether the rest is read.",
      "What helps: precise titles in context, scale markers, outcomes stated without inflation, and a narrative that matches the role being discussed. What slows a reading: vague headlines, unexplained title inflation, missing dates, and claims that will not survive a reference.",
      "Understanding that reading does not require gaming a system. It requires respect for how serious people make shortlist decisions.",
    ],
  },
  {
    slug: "how-to-position-yourself-for-a-coo-opportunity",
    category: "Executive Careers",
    title: "How to Position Yourself for a COO Opportunity",
    dek: "COO conversations turn on operating scale, enterprise integration and the ability to run complexity with the CEO.",
    pull: "The narrative has to show enterprise operating judgment, not only functional excellence.",
    paragraphs: [
      "A chief operating officer mandate usually requires evidence of cross-functional leadership, operating rhythm, delivery under constraint, and a credible partnership with a chief executive and board. Functional depth helps. It is rarely enough on its own.",
      "Positioning for COO opportunities means selecting the evidence of scale: multi-site or multi-country operations, transformation that stuck, cost and growth held in the same frame, people leadership at enterprise weight, and judgment in ambiguity.",
      "Candidates who remain described as excellent functional leaders can be screened out of COO conversations despite real readiness. The career may be right. The reading may be wrong.",
    ],
  },
  {
    slug: "moving-from-vp-to-c-suite",
    category: "Executive Careers",
    title: "Moving From VP to C-Suite: What Your Career Narrative Must Communicate",
    dek: "The step up is less about a new title line and more about enterprise altitude in the story told.",
    pull: "C-suite readers look for ownership of outcomes that sit above a single function.",
    paragraphs: [
      "Vice-president careers are often rich in delivery. C-suite conversations ask whether that delivery has already included enterprise trade-offs: capital, risk, culture, external stakeholders, and decisions that cut across silos.",
      "The narrative must therefore shift. Functional achievements remain relevant, but they are framed as contributions to organizational performance, not as an inventory of departmental wins. Leadership of peers, board exposure, and judgment under incomplete information become more important.",
      "No narrative creates a C-suite appointment. A clear one allows a serious process to see whether the step is already justified by the work done.",
    ],
  },
  {
    slug: "what-boards-look-for-beyond-job-titles",
    category: "Board Careers",
    title: "What Boards Look for Beyond Job Titles",
    dek: "Titles open a door. Governance judgment, independence and useful challenge decide whether it stays open.",
    pull: "A chair is hiring a director’s mind, not reprinting an executive CV.",
    paragraphs: [
      "Nomination committees and chairs read beyond prestige. They want sector or functional insight that helps the board, evidence of independent thought, and a record of constructive challenge rather than executive re-enactment around the table.",
      "Committee readiness — audit, risk, remuneration, nomination and others — matters when it is real. So do conflicts, time, and the ability to hold management to account without becoming a second management team.",
      "Board positioning translates operating experience into governance language without inventing board service that has not occurred.",
    ],
  },
  {
    slug: "preparing-for-board-opportunities",
    category: "Board Careers",
    title: "Preparing for Board Opportunities",
    dek: "Preparation is a change in how the career is evidenced, not a promise of a seat.",
    pull: "Board readiness is demonstrated in materials and conversation long before a process begins.",
    paragraphs: [
      "Professionals preparing for board opportunities benefit from clarifying what they would bring: sector insight, financial literacy, risk judgment, transformation experience, public accountability, or international context. Vague interest in “joining a board” is not a position.",
      "Materials should be short and consistent: a board-oriented CV or biography, a LinkedIn presence that does not contradict it, and a spoken account that matches. Where board exposure is limited, honesty about readiness is part of credibility.",
      "Advisory support can sharpen that preparation. It does not create appointments, and it is never a condition of recruitment consideration.",
    ],
  },
  {
    slug: "why-linkedin-and-resume-need-the-same-career-narrative",
    category: "LinkedIn Positioning",
    title: "Why Your LinkedIn and Resume Need the Same Career Narrative",
    dek: "Public and private instruments reach different readers. They should not tell different careers.",
    pull: "Inconsistency between channels reads as uncertainty about level.",
    paragraphs: [
      "A résumé travels into a process. LinkedIn is discovered by people who were never sent a document. Search professionals, hiring leaders and board networks often check both. When the altitude, claims or emphasis diverge, trust drops.",
      "Alignment does not mean identical wording. It means the same career thesis: level, scope, sectors, and the evidence that supports them. LinkedIn can be more discoverable; the résumé can be more precise for a mandate. Neither should invent what the other cannot defend.",
      "Fixing one channel while leaving the other untouched is unfinished positioning.",
    ],
  },
  {
    slug: "building-a-targeted-executive-job-search",
    category: "Job Search Strategy",
    title: "Building a Targeted Executive Job Search",
    dek: "At senior levels, breadth without judgment looks like uncertainty. Targeting is a professional discipline.",
    pull: "A broadcast search often cools the conversations it hopes to create.",
    paragraphs: [
      "A targeted executive search begins with a clear view of role families, company types, geographies and constraints. It decides which conversations are worth having, and which are flattering but wrong.",
      "Practical instruments follow that view: a shortlist of organizations, a recruiter and search-firm engagement plan, outreach that respects confidentiality, and interview positioning that stays consistent with written materials.",
      "Activity is not the same as strategy. Measuring progress by applications sent can obscure whether the market is meeting the right version of the career.",
    ],
  },
  {
    slug: "how-to-communicate-leadership-scale",
    category: "Leadership Positioning",
    title: "How to Communicate Leadership Scale",
    dek: "Scale is how a reader judges whether a career matches the size of the opportunity.",
    pull: "Without scale markers, senior work can be misread as mid-level delivery.",
    paragraphs: [
      "Leadership scale can be expressed through people led, P&L or budget weight, geographic span, complexity of stakeholders, and the altitude of decisions taken. The point is not to impress with numbers for their own sake. It is to place the work accurately.",
      "Many executives understate scale because they assume the reader already knows the organization. External readers do not. Others overstate by claiming ownership of outcomes they influenced. Precision protects both sides.",
      "Communicating scale well is central to executive positioning across résumé, LinkedIn, search conversations and interviews.",
    ],
  },
  {
    slug: "positioning-pnl-responsibility",
    category: "Resume/CV Strategy",
    title: "Positioning P&L Responsibility on an Executive Resume",
    dek: "P&L language is powerful when it is accurate — and damaging when it is inflated.",
    pull: "State ownership clearly. Distinguish contribution from accountability.",
    paragraphs: [
      "Profit-and-loss responsibility is one of the strongest signals of executive altitude in commercial careers. Readers want to know the size of what was owned, the conditions under which it was owned, and what changed.",
      "Ambiguous phrasing — “involved in,” “supported,” “drove” without perimeter — forces the reader to guess. Guessing usually goes against the candidate. Clear ownership language, paired with evidence, does the opposite.",
      "Where P&L was shared or matrixed, say so. Honesty about structure is part of senior credibility.",
    ],
  },
  {
    slug: "how-to-present-transformation-experience",
    category: "Leadership Positioning",
    title: "How to Present Transformation Experience",
    dek: "Transformation claims are common. Transformation evidence is rarer — and more persuasive.",
    pull: "Name the starting condition, the change led, and the state that remained.",
    paragraphs: [
      "Transformation language is overused. Serious readers look for the inherited condition, the scope of change, the method of leadership, and whether results held after the program noise faded.",
      "Useful framing covers commercial, operational, digital, cultural or institutional change with enough specificity to be tested in interview. Adjectives such as “transformational leader” add little when the evidence is absent.",
      "Presenting transformation well is positioning, not storytelling for effect. The account should survive a reference.",
    ],
  },
  {
    slug: "how-to-communicate-career-achievements-without-exaggeration",
    category: "Leadership Positioning",
    title: "How to Communicate Career Achievements Without Exaggeration",
    dek: "Restraint is not modesty theatre. It is how achievements remain believable under scrutiny.",
    pull: "What cannot be defended in a reference should not appear in a document.",
    paragraphs: [
      "Exaggeration often begins as compression: rounding up scope, borrowing team outcomes, or describing influence as ownership. In senior processes those compressions are tested. When they fail, the damage reaches beyond one line on a résumé.",
      "Accurate achievement language states the baseline, the action, the result, and the candidate’s role in it. It accepts limits. It prefers one precise claim to three inflated ones.",
      "Integrity is not only an ethical preference in this practice. It is a market advantage. Credible narratives travel further than decorated ones.",
    ],
  },
];

/** @deprecated Prefer insights — kept for gradual import migration */
export const perspectives = insights.map((item) => ({
  slug: item.slug,
  kicker: item.category,
  title: item.title,
  dek: item.dek,
  pull: item.pull,
  paragraphs: item.paragraphs,
}));
