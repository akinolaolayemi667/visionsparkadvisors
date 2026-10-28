import { PageHeader } from "../components/Blocks";
import { practice } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";

export function Privacy() {
  usePageMeta(
    "Privacy — Fakorede Joel",
    "How enquiries to Fakorede Joel are handled. This site does not sell personal information and does not use advertising trackers.",
  );

  return (
    <>
      <PageHeader
        kicker="Privacy"
        title="Enquiries are for a conversation, not a list."
        lede="This note explains what the site does with information. It is short because the practice is direct."
      />
      <section className="page-section">
        <div className="container prose prose--wide">
          <p>
            The enquiry form composes a message in your browser. It is sent when you choose to send
            it — through email, once a correspondence address is in use, or by copying the note
            into a channel you already trust. Until you send it, the message stays on your device.
          </p>
          <p>
            If you send a message to {practice.name}, it is used to respond and to judge whether
            the practice can help. It is not sold. It is not added to a marketing list. Career
            content you choose to share is treated as confidential, on the terms described in the
            principles.
          </p>
          <p>
            Do not include information you are not prepared to share for the purpose of a
            professional conversation. Avoid account numbers, identity documents, and other
            material a first enquiry does not need.
          </p>
          <p>
            This site does not use third-party advertising trackers and does not set analytics
            cookies. Fonts are loaded from Google Fonts, which receives the technical request
            required to deliver those files.
          </p>
          <p>
            To ask a question about a message you have already sent, reply on the same thread or
            send a fresh enquiry through the contact page.
          </p>
        </div>
      </section>
    </>
  );
}
