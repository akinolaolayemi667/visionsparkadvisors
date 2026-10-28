import { Link } from "react-router-dom";
import { CtaBand, PageHeader } from "../components/Blocks";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

const sections = [
  {
    id: "who",
    title: "Who I Am",
    body: [
      `${practice.name} is an Executive Career Strategist and Independent Recruiter operating as ${practice.brand}. The practice combines executive search work with candidate-paid career strategy — held as separate activities, with clear boundaries.`,
      "If you are verifying a message you received, this page is intended to make the identity, purpose and standards of that outreach easier to assess.",
    ],
  },
  {
    id: "why",
    title: "Why I May Have Contacted You",
    body: [
      "I use professional talent-sourcing and research platforms to identify individuals whose experience may align with recruitment opportunities, career-market conversations or professional networking relevant to my work.",
      "A message is an invitation to explore relevance — not a guarantee that a role exists for you, not a claim that you have been shortlisted, and not a request to purchase a service.",
    ],
  },
  {
    id: "information",
    title: "How Candidate Information Is Used",
    body: [
      "Professional sourcing platforms and publicly or professionally available information may be used for talent research, where applicable. That information supports an initial judgment of relevance and a confidential outreach.",
      "It is not treated as consent to publish a candidacy, circulate materials as marketing proof, or add anyone to a promotional list. Further use in a recruitment process happens only with a clear understanding of what may be shared.",
    ],
  },
  {
    id: "separation",
    title: "Recruitment vs Career Advisory",
    body: [
      "Recruitment is engaged around genuine employment opportunities. Career advisory — résumé/CV positioning, LinkedIn, job-search strategy, Board narratives and related counsel — is engaged independently by the individual.",
      "Purchasing a career advisory or positioning service is never a condition of consideration for a genuine recruitment opportunity. Declining advisory does not remove consideration. Purchasing advisory does not create it.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: [
      "Your career is personal. Outreach conversations and any materials you choose to share are handled with discretion and used in accordance with the purpose communicated.",
      "No interview, placement, Board appointment or employment outcome is guaranteed by a conversation, a clearer narrative, or an advisory engagement.",
    ],
  },
];

const outreachFaqs = [
  {
    q: "Why did you contact me?",
    a: "Professional sourcing and research identified a possible alignment with recruitment opportunities, career-market conversations, or networking relevant to the practice. The message invites a confidential conversation.",
  },
  {
    q: "Where did you find my information?",
    a: "Professional sourcing platforms and publicly or professionally available information may be used for talent research, where applicable.",
  },
  {
    q: "Do I need to buy a résumé service to continue?",
    a: "No. Advisory services are optional and separate from recruitment consideration.",
  },
  {
    q: "Is this confidential?",
    a: "Yes. Outreach and any follow-up are treated as confidential professional correspondence.",
  },
];

export function ExecutiveOpportunities() {
  usePageMeta(
    "Executive Opportunities — Joel Facco",
    "You received a message from Joel Facco. Verify who I am, how outreach works, how information is used, and how recruitment differs from career advisory.",
  );

  return (
    <>
      <PageHeader
        kicker="Professional outreach"
        title="You Received a Message From Me. Here’s Why."
        lede="I use professional talent-sourcing and research platforms to identify individuals whose experience may align with recruitment opportunities, career-market conversations or professional networking relevant to my work. If you received a message from me, you can use this page to verify who I am, understand how I work and decide whether you would like to continue the conversation."
      />

      <section className="page-section" style={{ paddingTop: 0 }}>
        <div className="container stack">
          {sections.map((section) => (
            <article className="outreach-block" id={section.id} key={section.id}>
              <h2 className="section-title">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}

          <article className="outreach-block" id="faq">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {outreachFaqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <p className="quiet-note">
              More answers on the <Link to="/faq">FAQ page</Link> and in the{" "}
              <Link to="/principles">principles</Link>.
            </p>
          </article>

          <article className="outreach-block" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <p>
              If you would like to continue, send a confidential note. Say whether your interest is
              a recruitment conversation, a career-market discussion, or simply to clarify the
              outreach. I read correspondence personally.
            </p>
            <div className="hero__actions" style={{ marginTop: 22 }}>
              <Link className="btn" to="/contact?intent=outreach">
                Continue Our Conversation
              </Link>
              <Link className="btn btn--ghost" to="/about">
                About {practice.name.split(" ")[0]}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaBand
        title="A clear conversation is the right next step."
        text="No purchase is required to respond. No interview or placement is guaranteed by continuing."
        primary={{ href: "/contact?intent=outreach", label: "Continue Our Conversation" }}
        secondary={{ href: "/faq", label: "Read the FAQ" }}
      />
    </>
  );
}
