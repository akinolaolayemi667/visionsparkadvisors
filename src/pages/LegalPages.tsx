import { LegalDoc } from "../components/LegalDoc";
import {
  candidateNotice,
  careerAdvisoryTerms,
  cookiePolicy,
  privacyPolicy,
  termsOfUse,
} from "../content/legal";
import { usePageMeta } from "../hooks/usePageMeta";

export function Privacy() {
  usePageMeta(
    "Privacy Policy — Fakorede Joel",
    "How enquiries and professional information shared with Fakorede Joel are handled. Working template pending final approval.",
  );
  return (
    <LegalDoc
      title={privacyPolicy.title}
      updated={privacyPolicy.updated}
      sections={privacyPolicy.sections}
    />
  );
}

export function Terms() {
  usePageMeta(
    "Terms of Use — Fakorede Joel",
    "Website terms for Fakorede Joel’s practice site. Working template — no fabricated compliance claims.",
  );
  return (
    <LegalDoc title={termsOfUse.title} updated={termsOfUse.updated} sections={termsOfUse.sections} />
  );
}

export function Cookies() {
  usePageMeta(
    "Cookie Policy — Fakorede Joel",
    "Cookie and browser-storage practices for the Fakorede Joel website. Working template.",
  );
  return (
    <LegalDoc
      title={cookiePolicy.title}
      updated={cookiePolicy.updated}
      sections={cookiePolicy.sections}
    />
  );
}

export function CandidateNotice() {
  usePageMeta(
    "Recruitment & Candidate Notice — Fakorede Joel",
    "How recruitment outreach and candidate information relate to advisory services. ContactOut is a sourcing platform, not an employer.",
  );
  return (
    <LegalDoc
      kicker="Recruitment"
      title={candidateNotice.title}
      updated={candidateNotice.updated}
      sections={candidateNotice.sections}
    />
  );
}

export function AdvisoryTerms() {
  usePageMeta(
    "Career Advisory Terms — Fakorede Joel",
    "Scope, deliverables, confidentiality, guarantees and the distinction between recruitment and advisory. Editable placeholders until approved.",
  );
  return (
    <LegalDoc
      kicker="Advisory"
      title={careerAdvisoryTerms.title}
      updated={careerAdvisoryTerms.updated}
      intro={careerAdvisoryTerms.intro}
      sections={careerAdvisoryTerms.sections}
    />
  );
}
