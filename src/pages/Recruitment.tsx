import { Link } from "react-router-dom";
import { Assurance, CtaBand, IncludeList, PageHeader } from "../components/Blocks";
import { EmployerForm } from "../components/EmployerForm";
import { usePageMeta } from "../hooks/usePageMeta";

const flow = [
  { title: "Business Need", text: "What the organization must achieve, and why now." },
  { title: "Leadership Requirement", text: "The mandate, altitude and stakeholders the role carries." },
  { title: "Candidate Capability", text: "Evidence of leadership, judgment and delivery at that level." },
  { title: "Evidence", text: "Scale, scope, commercial or institutional impact that can be assessed." },
  { title: "Alignment", text: "Fit to the mandate — and a fair basis to advance or decline." },
];

const services = [
  "Candidate sourcing",
  "Professional talent identification",
  "Leadership search",
  "Executive search support",
  "Targeted candidate outreach",
  "Talent mapping",
  "Candidate assessment",
  "Candidate engagement",
  "Market research",
];

export function Recruitment() {
  usePageMeta(
    "Independent Recruitment — Joel Facco",
    "Talent aligned with business direction. Independent recruitment for organizations seeking leadership and professional talent — beyond matching titles and keywords.",
  );

  return (
    <>
      <PageHeader
        kicker="Independent recruitment"
        title="Talent Aligned With Business Direction"
        lede="Recruitment should go beyond matching titles and keywords."
      />

      <section className="section section--tint" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="prose prose--wide" style={{ paddingTop: 12 }}>
            <p>
              I focus on understanding the business need first — then the leadership requirement,
              the candidate capability that can meet it, the evidence that supports that reading,
              and the alignment that makes a conversation worth having.
            </p>
          </div>
          <ol className="flow flow--recruit" aria-label="Recruitment sequence">
            {flow.map((step, index) => (
              <li key={step.title}>
                <span className="flow__n">{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="container stack">
          <div className="two">
            <article>
              <p className="kicker">For organizations</p>
              <h2 className="section-title">A mandate, described accurately.</h2>
              <div className="prose">
                <p>
                  I work with organizations and decision-makers to identify, assess and engage
                  professionals aligned with business and leadership requirements — from executive
                  search support and leadership search to professional talent identification and
                  targeted outreach.
                </p>
                <p>
                  A useful first conversation covers the role, the context, what success requires,
                  the stakeholders, the constraints, and the confidentiality of the search. I will
                  say if I am not the right recruiter for the mandate.
                </p>
              </div>
            </article>
            <article>
              <p className="kicker">For professionals</p>
              <h2 className="section-title">Consideration rests on fit.</h2>
              <div className="prose">
                <p>
                  An introduction can be made directly. It is read against genuine opportunities.
                  Purchasing résumé, LinkedIn, advisory or positioning services is never a
                  condition of consideration — and buying advice does not create it.
                </p>
                <p>
                  <Link className="text-link" to="/contact?intent=candidacy">
                    Submit a résumé/CV for consideration
                  </Link>
                </p>
              </div>
            </article>
          </div>

          <div>
            <p className="kicker">Recruitment support</p>
            <h2 className="section-title">How I can help a search.</h2>
            <IncludeList items={services} />
          </div>

          <Assurance />
        </div>
      </section>

      <section className="section section--tint" id="hiring-enquiry">
        <div className="container engage-grid">
          <div className="engage-intro">
            <p className="kicker">Employer enquiry</p>
            <h2 className="section-title">Discuss Your Hiring Requirement</h2>
            <p className="lede">
              Describe the mandate with enough clarity for a serious conversation. This form is for
              organizations and hiring decision-makers. It is separate from candidate-paid career
              advisory.
            </p>
            <div className="prose">
              <p>You compose the note. I read it personally.</p>
              <p>
                If the fit is real, I propose a conversation. If I am not the right person for the
                search, I will say so.
              </p>
            </div>
          </div>
          <EmployerForm />
        </div>
      </section>

      <CtaBand
        title="Discuss a talent requirement."
        text="Hiring leaders start with a mandate conversation. Candidates who wish to be considered use a separate route. The two stay distinct."
        primary={{ href: "/recruitment#hiring-enquiry", label: "Discuss a Talent Requirement" }}
        secondary={{ href: "/contact?intent=candidacy", label: "Submit a Résumé/CV" }}
      />
    </>
  );
}
