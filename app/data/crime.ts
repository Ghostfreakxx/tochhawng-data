import type { Datum, Source, Stat } from "./types";

export const crimeStats: Stat[] = [
  {
    label: "Drugs seized, Jan–Aug 2026",
    value: "₹846 Cr",
    note: "All security forces; 930 arrested, including 111 foreign nationals",
  },
  {
    label: "NDPS cases, Jan–Jun 2026",
    value: "219",
    note: "Mizoram Police; 312 arrested, including 57 foreign nationals",
  },
  {
    label: "Methamphetamine seized",
    value: "315.9 kg",
    note: "Worth ₹252.72 Cr, the largest category in Jan–Jun 2026",
  },
  {
    label: "Police budget 2026–27",
    value: "₹781 Cr",
    note: "Including ₹176 Cr for district police",
  },
];

// Jan–Jun 2026, estimated value in ₹ crore. "Other" is the remainder of the
// ₹414.66 Cr total after the three named drugs.
export const seizuresByDrug: Datum[] = [
  { label: "Methamphetamine tablets", value: 252.72 },
  { label: "Heroin", value: 69.85 },
  { label: "Crystal meth", value: 61.88 },
  { label: "Other (morphine, opium, codeine)", value: 30.21 },
];

export const cybercrimeTrend: Datum[] = [
  { label: "2020", value: 20 },
  { label: "2021", value: 46 },
  { label: "2022", value: 158 },
  { label: "2023", value: 62 },
  { label: "2024", value: 48 },
  { label: "2025", value: 24 },
  { label: "2026", value: 6 },
];

export const homeDeptHighlights = [
  { label: "Drug cases registered", value: "517" },
  { label: "Drug arrests", value: "573" },
  { label: "Drug seizure value", value: "₹318.19 Cr" },
  { label: "Illegal weapons seized", value: "54" },
  { label: "Ammunition recovered", value: "28,005" },
  { label: "Arms-related cases", value: "46" },
  { label: "Forensic samples tested", value: "15,662" },
  { label: "Fingerprints recorded", value: "10,265" },
  { label: "Fire service modernisation", value: "₹40 Cr" },
  { label: "Jail infrastructure", value: "₹55 Cr" },
];

export const crimeConcerns = [
  "Methamphetamine and heroin trafficking across the Myanmar border",
  "Online financial scams and phishing",
  "Cross-border smuggling networks",
  "Youth addiction risks",
  "Identity theft and digital fraud",
  "Illegal arms movement",
];

export const crimeSources: Source[] = [
  {
    label: "NE Now: Mizoram Police drug seizures, Jan–Jun 2026",
    url: "https://nenow.in/?p=520965",
  },
  {
    label: "Telangana Today (IANS): drugs worth over ₹846 crore seized in eight months",
    url: "https://telanganatoday.com/mizoram-drugs-worth-over-rs-846-crore-seized-930-arrested-in-eight-months",
  },
  { label: "Mizoram Police cybercrime research dataset" },
  {
    label: "Home Department performance report 2023–2025",
    url: "https://home.mizoram.gov.in/",
  },
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
  { label: "NCRB Crime in India reports", url: "https://www.ncrb.gov.in/" },
];
