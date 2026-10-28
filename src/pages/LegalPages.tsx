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
    "Privacy Policy — Joel Facco",
    "How enquiries and professional information shared with Joel Facco are handled. Working template pending final approval.",
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
    "Terms of Use — Joel Facco",
    "Website terms for Joel Facco’s practice site. Working template — no fabricated compliance claims.",
  );
  return (
    <LegalDoc title={termsOfUse.title} updated={termsOfUse.updated} sections={termsOfUse.sections} />
  );
}

export function Cookies() {
  usePageMeta(
    "Cookie Policy — Joel Facco",
    "Cookie and browser-storage practices for the Joel Facco website. Working template.",
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
    "Recruitment & Candidate Notice — Joel Facco",
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
    "Career Advisory Terms — Joel Facco",
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
