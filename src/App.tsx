import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Agreement } from "./pages/Agreement";
import { Assessment } from "./pages/Assessment";
import { CaseStudies, CaseStudyArticle } from "./pages/CaseStudies";
import { Checklist } from "./pages/Checklist";
import { ClientPortal } from "./pages/ClientPortal";
import { Contact } from "./pages/Contact";
import { EngagementPath } from "./pages/EngagementPath";
import { Payment } from "./pages/Payment";
import { ExecutiveBoard } from "./pages/ExecutiveBoard";
import { ExecutiveOpportunities } from "./pages/ExecutiveOpportunities";
import { Faq } from "./pages/Faq";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { InsightArticle } from "./pages/InsightArticle";
import { Insights } from "./pages/Insights";
import {
  AdvisoryTerms,
  CandidateNotice,
  Cookies,
  Privacy,
  Terms,
} from "./pages/LegalPages";
import { NotFound } from "./pages/NotFound";
import { Packages } from "./pages/Packages";
import { Principles } from "./pages/Principles";
import { Recruitment } from "./pages/Recruitment";
import {
  JobSearchPage,
  LinkedInPage,
  PositioningPage,
  ResumePage,
} from "./pages/ServicePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="executive-career-positioning" element={<PositioningPage />} />
        <Route path="resume-cv" element={<ResumePage />} />
        <Route path="linkedin" element={<LinkedInPage />} />
        <Route path="job-search-strategy" element={<JobSearchPage />} />
        <Route path="executive-board" element={<ExecutiveBoard />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="packages" element={<Packages />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="executive-positioning-checklist" element={<Checklist />} />
        <Route path="executive-opportunities" element={<ExecutiveOpportunities />} />
        <Route path="engagement-path" element={<EngagementPath />} />
        <Route path="agreement" element={<Agreement />} />
        <Route path="payment" element={<Payment />} />
        <Route path="client-portal" element={<ClientPortal />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyArticle />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightArticle />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="principles" element={<Principles />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="candidate-notice" element={<CandidateNotice />} />
        <Route path="career-advisory-terms" element={<AdvisoryTerms />} />

        <Route path="engage" element={<Navigate to="/contact" replace />} />
        <Route path="services" element={<Navigate to="/#services" replace />} />
        <Route path="advisory" element={<Navigate to="/executive-career-positioning" replace />} />
        <Route path="approach" element={<Navigate to="/how-it-works" replace />} />
        <Route path="audiences" element={<Navigate to="/#audiences" replace />} />
        <Route path="board" element={<Navigate to="/executive-board" replace />} />
        <Route path="emerging" element={<Navigate to="/#audiences" replace />} />
        <Route path="perspectives" element={<Navigate to="/insights" replace />} />
        <Route path="perspectives/:slug" element={<InsightArticle />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
