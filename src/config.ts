/**
 * Practice configuration.
 * Set `email` to publish a correspondence address and to let the
 * enquiry form open a pre-addressed message.
 * Place a portrait at /public/portrait.jpg to replace the hero placeholder.
 */
export const practice = {
  name: "Fakorede Joel",
  role: "Executive Career Strategist | Independent Recruiter",
  extendedRole: [
    "Independent Recruiter",
    "Executive Job Search Specialist",
    "Executive Résumé/CV Positioning Specialist",
    "LinkedIn Positioning Strategist",
  ],
  statement: "Positioning leadership. Connecting talent. Creating career momentum.",
  supporting:
    "Executive Career Strategy · Independent Recruitment · Resume/CV Positioning · LinkedIn Strategy · Executive Job Search",
  trustMarks: ["Confidential", "Professional", "Evidence-Led", "Candidate-Centered"],
  /** Relative to /public. Leave empty until a portrait file is added. */
  portrait: "/portrait.jpg",
  portraitAvailable: false,
  email: "",
  phone: "",
  linkedin: "",
};

export const cta = {
  assessment: { href: "/contact?intent=assessment", label: "Request a Career Assessment" },
  talent: { href: "/contact?intent=talent", label: "Discuss a Talent Requirement" },
  hiring: { href: "/recruitment#hiring-enquiry", label: "Discuss Your Hiring Requirement" },
  executive: { href: "/contact?intent=board", label: "Discuss My Executive Positioning" },
  services: { href: "/#services", label: "Explore My Services" },
};
