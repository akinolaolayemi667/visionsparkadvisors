import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import { usePageMeta } from "../hooks/usePageMeta";

const items = [
  {
    title: "Foundational résumé or CV",
    text: "A clear, evidence-based account of study, early responsibility, and the capability that is actually visible. Written for the market in view.",
  },
  {
    title: "LinkedIn, at the right altitude",
    text: "A public profile that agrees with the document and speaks at the level of the career, without borrowing the voice of a senior executive.",
  },
  {
    title: "Job-search strategy",
    text: "Where to spend effort, which roles are a serious match, and how to approach them with specificity.",
  },
  {
    title: "Interview positioning",
    text: "How to discuss limited experience with precision: what was owned, what was supported, and what was learned that can be shown.",
  },
  {
    title: "Direction",
    text: "A conversation about the next chapter when the options are several and the evidence is still forming.",
  },
];

export function Emerging() {
  usePageMeta(
    "Emerging Talent — Fakorede Joel",
    "A separate practice area for selected entry-level and early-career professionals. Same discretion and evidence standard, scoped to the stage of the career.",
  );

  return (
    <>
      <PageHeader
        kicker="Separate practice area"
        title="Early careers, held to a clear standard."
        lede="Entry-level and early-career services are available here, apart from the executive work, so the character of the practice stays intact. The scope is fitted to the stage. The discipline is not reduced."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              Selected early-career and high-potential professionals sometimes need the same
              clarity senior leaders need: a true account of capability, evidence, and direction.
              The materials are shorter. The claims have to be even more careful, because the
              record is shorter.
            </p>
            <p>
              This work is offered selectively, so that it can be done properly. It is
              candidate-paid advisory. It is independent of any recruitment consideration.
              Purchasing it is never a condition of being considered for a role, and it does not
              create an interview, a placement, or an appointment.
            </p>
          </div>
          <div className="dims">
            {items.map((item) => (
              <article className="dim" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="deck">
            Fees are discussed privately once the scope is clear, as with every engagement.
          </p>
          <Assurance />
        </div>
      </section>
      <CtaBand
        title="If you are early in the career, say so plainly."
        text="Tell me the stage you are at and the decision in front of you."
        primary={{ href: "/engage?intent=emerging", label: "Enquire about early-career work" }}
        secondary={{ href: "/audiences#emerging", label: "All audiences" }}
      />
    </>
  );
}
