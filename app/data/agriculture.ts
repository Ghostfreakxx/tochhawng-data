import type { Source, Stat } from "./types";

export const agricultureStats: Stat[] = [
  {
    label: "Agriculture & allied 2026–27",
    value: "₹940 Cr",
    note: "Budget estimate, including ₹235 Cr for Bana Kaih",
  },
  {
    label: "Bana Kaih outlay",
    value: "₹350 Cr",
    note: "2026–27, up from ₹200 Cr in 2024–25. ₹150 Cr is for crop procurement",
  },
  {
    label: "Bana Kaih applications",
    value: "74,373",
    note: "Received by 12 Feb 2026",
  },
  {
    label: "Bana Kaih loans",
    value: "₹44.05 Cr",
    note: "Loans to 482 Progress Partners",
  },
];

export const banaKaihProgress = [
  { label: "Applications received (by 12 Feb 2026)", value: "74,373" },
  { label: "Progress Partners given grants (by Feb 2026)", value: "2,255" },
  { label: "Phase-II Progress Partners selected (Aug 2026)", value: "3,113" },
  { label: "Phase-II applications pending verification (Aug 2026)", value: "2,135" },
  { label: "Released to 683 beneficiaries in Aizawl district (Sep 2026)", value: "₹3.41 Cr" },
  { label: "Grant per beneficiary, Phase-II", value: "₹50,000" },
];

export const keyCrops = [
  { name: "Ginger", note: "Major commercial crop with support price" },
  { name: "Turmeric", note: "Procured under Bana Kaih" },
  { name: "Mizo chilli", note: "High-value local crop" },
  { name: "Broom", note: "Important rural cash crop" },
  { name: "Local paddy", note: "Procurement support for growers" },
];

export const agricultureChallenges = [
  "Market access and transport costs",
  "Storage and processing facilities",
  "Middlemen and price swings",
  "Value addition and export channels",
  "Slow verification of Bana Kaih applications",
  "Grant cut from ₹1 lakh to ₹50,000 to reach more people",
];

export const agricultureSources: Source[] = [
  {
    label: "NE Now: ₹3.41 crore to 683 Bana Kaih beneficiaries",
    url: "https://nenow.in/north-east-news/mizoram/mizoram-releases-rs-3-41-crore-to-683-beneficiaries-under-bana-kaih-scheme.html",
  },
  {
    label: "India Today NE: Bana Kaih attracts over 5,000 loan applicants",
    url: "https://www.indiatodayne.in/mizoram/story/mizoram-govt-claims-win-as-bana-kaih-scheme-attracts-over-5000-applicants-1355885-2026-03-06",
  },
  {
    label: "Northeast Today: CM reviews handholding scheme",
    url: "https://northeasttoday.in/northeast/mizoram-cm-reviews-handholding-scheme-directs-faster-disbursal-of-pending-funds/",
  },
  {
    label: "IMPRI: Mizoram department schemes update 2026",
    url: "https://www.impriindia.com/insights/policy-update/mizoram-department-schemes-update-2026/",
  },
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
];
