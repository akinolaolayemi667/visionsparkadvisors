import { Link } from "react-router-dom";
import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import { usePageMeta } from "../hooks/usePageMeta";

const readers = [
  {
    title: "Judgment",
    text: "Decisions taken in ambiguity, and the ability to explain them without theatrics.",
  },
  {
    title: "Governance literacy",
    text: "How oversight actually works: information, challenge, and the line between board and management.",
  },
  {
    title: "Committee contribution",
    text: "Audit, risk, remuneration, nomination, and other committees — participation described exactly.",
  },
  {
    title: "Stakeholders and regulation",
    text: "Investors, ministers, regulators, and the public, where they formed part of the real exposure.",
  },
  {
    title: "Independence",
    text: "Conflicts, sector context, and the capacity to support management and to challenge it.",
  },
  {
    title: "Readiness",
    text: "An honest account of what is already board work, and what would be a first translation from an operating career.",
  },
];

export function Board() {
  usePageMeta(
    "Board Positioning — Fakorede Joel",
    "Board and portfolio positioning for chairs, non-executive directors, committee chairs, and executives moving into board careers. No appointment is guaranteed.",
  );

  return (
    <>
      <PageHeader
        kicker="Board"
        title="Oversight is a different kind of evidence."
        lede="For board chairs, directors, non-executive and independent directors, advisory board members, committee chairs, and executives moving toward a portfolio career."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              An operating narrative is built on mandate, execution, and results. A board narrative
              is built on judgment, oversight, and the quality of contribution around a table. The
              same life can contain both. The documents should not pretend they are one story.
            </p>
            <p>
              Chairs and nomination committees read for governance, not for a reprinted executive
              CV with a new objective. Proximity to a board is described as proximity. Service on
              a board, or a committee, is described as service. The distinction is the point.
            </p>
          </div>
          <div>
            <p className="kicker">What a board reader is listening for</p>
            <div className="dims" style={{ marginTop: 18 }}>
              {readers.map((item) => (
                <article className="dim" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="prose prose--wide">
            <p>
              The materials are short: a board CV, a biography of a few hundred words, and a
              LinkedIn presence that agrees with them. They are calm. They give a serious reader
              enough to form a view, including a view that the timing is wrong.
            </p>
            <p>
              No Board appointment is guaranteed. Positioning allows the fitness that exists — and
              its limits — to be seen before a process is spent discovering them. Executive
              C-suite narratives remain available alongside this work, because some leaders are in
              both markets at once.{" "}
              <Link to="/advisory#board-csuite">Board and C-suite positioning</Link>
            </p>
            <p>
              <Link to="/perspectives/board-careers">A longer note on board careers</Link>
            </p>
          </div>
          <Assurance />
        </div>
      </section>
      <CtaBand
        title="If a portfolio chapter is the question, start with the evidence you already have."
        text="Chair, non-executive, committee, or a first board — the conversation begins with which of those is real."
        primary={{ href: "/engage?intent=board", label: "Discuss board positioning" }}
        secondary={{ href: "/advisory", label: "All advisory" }}
      />
    </>
  );
}
