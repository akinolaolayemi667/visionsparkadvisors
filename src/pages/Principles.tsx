import { Assurance, CtaBand, PageHeader } from "../components/Blocks";
import { cta } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function Principles() {
  usePageMeta(
    "Principles — Joel Facco",
    "Recruitment and candidate-paid career advisory are separate. No interview, placement, or appointment is guaranteed. Purchasing advice is never a condition of consideration.",
  );

  return (
    <>
      <PageHeader
        kicker="Principles"
        title="Trust is a matter of separation and evidence."
        lede="The practice is easier to use when the rules are plain. These are the rules. They are written to be understood, and they are applied whether or not they are convenient."
      />
      <section className="page-section">
        <div className="container stack">
          <div className="prose prose--wide">
            <p>
              There are two activities. In recruitment, I source, assess, or consider candidates
              for genuine employment opportunities. In career advisory, an individual engages me,
              independently, for résumé or CV positioning, LinkedIn positioning, job-search
              strategy, interview preparation, or broader counsel.
            </p>
            <p>
              Purchasing a career advisory, résumé, LinkedIn, or positioning service is never a
              condition of being considered for a genuine recruitment opportunity. Being considered
              does not require a purchase. A purchase does not create consideration.
            </p>
            <p>
              Career advisory services are independent professional services. Recommendations in
              either activity are based on professional assessment and the information available.
              Where the information is thin, the recommendation is cautious. Where the fit is
              absent, I say so.
            </p>
          </div>
          <Assurance />
          <div className="prose prose--wide">
            <p className="kicker">Confidentiality</p>
            <p>
              Career enquiries and hiring mandates are treated as confidential. I do not publish
              client names, and I do not treat a private advisory conversation as permission to
              circulate a candidacy. An introduction or a submission happens only with a clear
              understanding of what may be shared.
            </p>
            <p className="kicker">What I will not do</p>
            <p>
              I will not invent scale, titles, or outcomes to improve a document. I will not
              describe advisory as a route to a hidden vacancy. I will not conduct a search I
              cannot resource properly. A polished narrative that cannot survive a reference is a
              disservice to everyone in the process.
            </p>
            <p>
              No employment outcome is guaranteed. No interview is guaranteed. No job placement is
              guaranteed. No Board appointment is guaranteed. No executive appointment is
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <CtaBand primary={cta.assessment} secondary={cta.talent} />
    </>
  );
}
