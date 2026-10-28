import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "samples");

const writeups = [
  {
    file: "harold-wodlinger-engagement-writeup.pdf",
    client: "Harold M. Wodlinger, Ph.D.",
    instrument: "Board-ready CV & governance narrative",
    profile: "Independent Board Director · Chairman · MedTech Executive",
    challenge:
      "A deep MedTech operating and venture record needed to read clearly as Independent Director and Chair material — not only as an inventor or operator CV.",
    assessment:
      "Governance weight, board chairmanships, corporate exits, due diligence counsel and commercialization leadership were present in the career, but the narrative had to elevate board stewardship and shareholder-value judgment.",
    approach:
      "Rebuilt the materials around Independent Board Director and Chairman positioning: executive profile, key accomplishments, board and governance leadership, strategic advisory, academic contribution and intellectual property — ordered for nomination-committee and search reading.",
    outcome:
      "Deliverables: Board-ready executive CV and Independent Director / MedTech governance narrative. No appointment or interview outcome is claimed by the positioning work itself.",
  },
  {
    file: "mark-jones-engagement-writeup.pdf",
    client: "Mark Jones",
    instrument: "Chair & Board Director profile",
    profile: "Chair · Board Director · Strategic Advisor · Senior Executive Leader",
    challenge:
      "A long UK and international executive career across leisure, hospitality, visitor attractions and technology required a Chair / NED narrative distinct from a full operating CV.",
    assessment:
      "Chairmanship, enterprise transformation, P&L leadership and multi-site governance were strong; the market needed a concise Board Director profile alongside executive materials.",
    approach:
      "Produced Chair and Board Director positioning with a standalone Board Director profile: governance themes, enterprise value creation, transformation evidence and advisory readiness — written for Board and Advisory Board conversations.",
    outcome:
      "Deliverables: Executive positioning materials and a standalone Board Director profile. Placement or appointment results are not invented for this site.",
  },
  {
    file: "gerd-holl-linkedin-writeup.pdf",
    client: "Gerd Holl",
    instrument: "LinkedIn positioning write-up",
    profile: "International Executive · Managing Director · Regional Leadership · Executive Advisor",
    challenge:
      "An active international MD / regional leadership career needed LinkedIn positioning that preserved current employment accuracy while opening Executive Advisory and Board visibility.",
    assessment:
      "Headline and About risked either understating international P&L scale or implying an employment change. Advisory ambition belonged in Headline and About — not as a fabricated current Experience entry.",
    approach:
      "Refined LinkedIn headline, About, experience language, pinned skills and banner direction for international executive search visibility (DACH · CEE · EMEA), keeping employment chronology intact and holding advisory/Board ambition in narrative rather than inventing a role.",
    outcome:
      "Deliverables: LinkedIn positioning package (headline, About, experience refinements, skills architecture and implementation notes). No new role or board seat is claimed as a result.",
  },
  {
    file: "lance-berg-engagement-writeup.pdf",
    client: "Lance K. R. Berg, P.Eng.",
    instrument: "Board & Strategic Adviser profile",
    profile: "Board & Strategic Adviser · Energy Executive · Professional Engineer",
    challenge:
      "Technical and COO-level energy leadership needed a Board Profile that translated asset, capital and operational scale into governance-relevant value for boards and executive teams.",
    assessment:
      "Operating evidence was substantial; the reading required board-relevant value highlights, skills for oversight and a calm Board Profile rather than a dense technical CV alone.",
    approach:
      "Structured a Board & Strategic Adviser profile: board profile narrative, value highlights, skills architecture, professional experience and board/community service — oriented to capital allocation, risk oversight and stakeholder alignment.",
    outcome:
      "Deliverables: Board profile and strategic-adviser positioning materials. No board appointment is claimed by this engagement summary.",
  },
];

function wrapParagraph(doc, label, text, y) {
  const left = 54;
  const width = 504;
  doc.fillColor("#001848").font("Helvetica-Bold").fontSize(10).text(label.toUpperCase(), left, y, {
    width,
    characterSpacing: 0.8,
  });
  y = doc.y + 8;
  doc.fillColor("#1a3358").font("Helvetica").fontSize(11).text(text, left, y, {
    width,
    align: "left",
    lineGap: 3,
  });
  return doc.y + 18;
}

async function writePdf(item) {
  const target = path.join(outDir, item.file);
  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "LETTER",
      margins: { top: 54, bottom: 54, left: 54, right: 54 },
      info: {
        Title: `${item.client} — ${item.instrument}`,
        Author: "VisionSpark Advisors · Joel Facco",
        Subject: "Engagement write-up sample",
      },
    });
    const stream = fs.createWriteStream(target);
    doc.pipe(stream);

    doc
      .fillColor("#001848")
      .font("Helvetica-Bold")
      .fontSize(11)
      .text("VISIONSPARK ADVISORS", { characterSpacing: 1.2 });
    doc
      .moveDown(0.25)
      .fillColor("#c09030")
      .font("Helvetica")
      .fontSize(9)
      .text("Engagement write-up · Sample work");
    doc.moveDown(0.8);
    doc
      .moveTo(54, doc.y)
      .lineTo(558, doc.y)
      .strokeColor("#d0a840")
      .lineWidth(1.2)
      .stroke();
    doc.moveDown(1);

    doc.fillColor("#001848").font("Helvetica-Bold").fontSize(20).text(item.client, { lineGap: 2 });
    doc.moveDown(0.35);
    doc.fillColor("#1a3358").font("Helvetica").fontSize(12).text(item.instrument);
    doc.moveDown(0.2);
    doc.fillColor("#4a5d7a").font("Helvetica-Oblique").fontSize(10).text(item.profile);
    doc.moveDown(1.1);

    let y = doc.y;
    y = wrapParagraph(doc, "Challenge", item.challenge, y);
    y = wrapParagraph(doc, "Assessment", item.assessment, y);
    y = wrapParagraph(doc, "Approach", item.approach, y);
    y = wrapParagraph(doc, "Outcome", item.outcome, y);

    doc.y = Math.max(y, 700);
    doc
      .moveTo(54, doc.y)
      .lineTo(558, doc.y)
      .strokeColor("#d7dce5")
      .lineWidth(0.8)
      .stroke();
    doc.moveDown(0.7);
    doc
      .fillColor("#4a5d7a")
      .font("Helvetica")
      .fontSize(8.5)
      .text(
        "This document describes positioning deliverables produced by VisionSpark Advisors (Joel Facco). It does not claim interviews, placements, Board appointments or employment outcomes. Career advisory remains separate from recruitment consideration.",
        54,
        doc.y,
        { width: 504, lineGap: 2 },
      );

    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
  return target;
}

fs.mkdirSync(outDir, { recursive: true });

for (const item of writeups) {
  const file = await writePdf(item);
  console.log("Wrote", path.relative(root, file));
}
