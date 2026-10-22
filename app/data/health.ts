import type { Datum, Source, Stat } from "./types";

export const healthStats: Stat[] = [
  {
    label: "MUHCS 2.0 families",
    value: "3,22,243",
    note: "Families enrolled in the Mizoram Universal Health Care Scheme (Sep 2026)",
  },
  {
    label: "Treatment bills paid",
    value: "₹271 Cr",
    note: "Disbursed under MUHCS phases 1 and 2 since 2025",
  },
  {
    label: "MUHCS 2.0 patients",
    value: "31,832",
    note: "Treated by 24 Aug 2026, with ₹99.60 Cr disbursed",
  },
  {
    label: "Health budget 2026–27",
    value: "₹909 Cr",
    note: "Health & Family Welfare, including ₹130 Cr for MUHCS bills",
  },
];

export const muhcsEnrolment: Datum[] = [
  { label: "AB-PMJAY beneficiaries", value: 226899 },
  { label: "General", value: 48091 },
  { label: "Government employees", value: 35325 },
  { label: "Pensioners", value: 11928 },
];

export const healthMilestones = [
  {
    date: "2025–26",
    title: "MUHCS 1.0",
    detail:
      "More than 1 lakh patients treated and ₹171.57 Cr released for treatment. Claims passed the ₹50 Cr allocation within six months.",
  },
  {
    date: "20 May 2026",
    title: "Online Medical Referral System",
    detail:
      "Patients apply online for permission to be treated outside Mizoram, instead of carrying papers between offices in Aizawl or Lunglei.",
  },
  {
    date: "Sep 2026",
    title: "MUHCS 2.0 crosses 3.2 lakh families",
    detail:
      "Most enrolled families are AB-PMJAY households covered with the Centre.",
  },
];

export const healthInstitutions = [
  "Civil Hospital, Aizawl (online OPD registration)",
  "Zoram Medical College",
  "District hospitals",
  "Community health centres",
  "Primary health centres",
  "Sub-centres and rural clinics",
  "Medical referral boards, Aizawl and Lunglei",
  "Blood banks and emergency services",
];

export const healthChallenges = [
  "Keeping MUHCS claims within the budget",
  "Healthcare access in remote areas",
  "Shortage of specialist doctors",
  "Non-communicable diseases",
  "Mental health and substance-use treatment",
  "Cost of treatment outside the state",
];

export const healthSources: Source[] = [
  {
    label: "NE Now: over 3.2 lakh families enrolled under MUHCS 2.0",
    url: "https://nenow.in/north-east-news/mizoram/mizoram-over-3-2-lakh-families-enrolled-under-universal-healthcare-scheme-phase-2.html",
  },
  {
    label: "EastMojo: Is Mizoram's healthcare scheme on life support?",
    url: "https://eastmojo.com/premium/2026/04/30/is-mizorams-famed-healthcare-scheme-already-on-life-support/",
  },
  {
    label: "India Today NE: online medical referral system",
    url: "https://www.indiatodayne.in/mizoram/story/mizoram-launches-online-medical-referral-system-for-out-of-state-treatment-1394957-2026-05-20",
  },
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
];
