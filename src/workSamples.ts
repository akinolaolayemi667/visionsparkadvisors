/**
 * Authorised sample works — PDFs and engagement write-ups.
 * Only include materials the practice has cleared for public demonstration.
 * Do not invent placement outcomes.
 */

export type WorkSample = {
  id: string;
  client: string;
  instrument: string;
  summary: string;
  /** Public PDF under /public/samples when available. */
  pdf?: string;
  /** Related case-study write-up slug. */
  caseStudySlug?: string;
};

export const workSamplesIntro = {
  kicker: "Sample works",
  title: "Résumé, Board biography and positioning samples from real engagements.",
  deck: "These materials show how VisionSpark Advisors structures executive documents. They are demonstration samples from authorised engagements — not claims of interviews, offers or appointments.",
};

export const workSamples: WorkSample[] = [
  {
    id: "edward-cloues-bio",
    client: "Edward Cloues",
    instrument: "Executive & Board Biography",
    summary:
      "Board-ready executive biography positioned for governance altitude, enterprise judgment and leadership narrative — prepared as a polished demonstration document.",
    pdf: "/samples/edward-cloues-executive-board-bio.pdf",
  },
  {
    id: "gerd-holl-cv",
    client: "Gerd Holl",
    instrument: "Executive CV",
    summary:
      "Premium executive CV layout for an international Managing Director / regional leadership career — evidence ordered for altitude, scale and market readability.",
    pdf: "/samples/gerd-holl-executive-cv.pdf",
    caseStudySlug: "international-executive-linkedin-positioning",
  },
  {
    id: "harold-wodlinger-writeup",
    client: "Harold M. Wodlinger, Ph.D.",
    instrument: "Board-ready CV & governance narrative",
    summary:
      "Independent Board Director / MedTech executive positioning — Board stewardship and commercialization leadership elevated for nomination-committee reading.",
    caseStudySlug: "medtech-independent-board-director",
  },
  {
    id: "mark-jones-writeup",
    client: "Mark Jones",
    instrument: "Chair & Board Director profile",
    summary:
      "Chair / NED narrative and standalone Board Director profile drawn from a long UK and international executive career across leisure, hospitality and enterprise leadership.",
    caseStudySlug: "chair-board-director-strategic-advisor",
  },
  {
    id: "lance-berg-writeup",
    client: "Lance K. R. Berg, P.Eng.",
    instrument: "Board & Strategic Adviser profile",
    summary:
      "Energy executive Board profile translating asset, capital and operational scale into governance-relevant value highlights.",
    caseStudySlug: "energy-board-strategic-adviser",
  },
];

export const publishWorkSamples = true;
