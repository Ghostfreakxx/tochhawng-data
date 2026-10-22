import type { Source, Stat } from "./types";

export const ruralStats: Stat[] = [
  {
    label: "Work guaranteed per household",
    value: "125 days",
    note: "Under VB-G RAM G from 1 Jul 2026, up from 100 days under MGNREGS",
  },
  {
    label: "Rural employment budget",
    value: "₹1,004 Cr",
    note: "State allocation for the rural employment programme, 2026–27",
  },
  {
    label: "Centre : State funding",
    value: "90 : 10",
    note: "Cost-sharing for North-Eastern states under the new Act",
  },
  {
    label: "Earlier MGNREGS state share",
    value: "₹28 Cr",
    note: "State share contribution reported by the department",
  },
];

export const ramgChanges = [
  {
    title: "More guaranteed work",
    detail: "125 days of wage employment per rural household each year, up from 100.",
  },
  {
    title: "Farm-season pause",
    detail:
      "Works can pause for up to 60 days during sowing and harvest so farm labour is not pulled away.",
  },
  {
    title: "Ongoing works carried over",
    detail:
      "MGNREGS works running on 30 June 2026 continue under the new framework.",
  },
  {
    title: "Normative allocation",
    detail:
      "The Centre now allocates funds to states by formula. It budgeted ₹95,692 Cr nationally for 2026–27.",
  },
];

export const ruralPriorities = [
  "Moving MGNREGS job cards and works onto VB-G RAM G",
  "Village infrastructure and community assets",
  "Rural livelihoods alongside Bana Kaih",
  "Village roads and local connectivity",
  "Direct benefit transfer of wages",
  "Village-level SDG monitoring",
];

export const ruralChallenges = [
  "Funding the 10% state share of the larger programme",
  "Timely release of wages",
  "Maintaining community assets",
  "Migration from villages to towns",
  "Monitoring and transparency",
  "Balanced development across districts",
];

export const ruralSources: Source[] = [
  {
    label: "PIB: VB-G RAM G Act commencement",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703",
  },
  {
    label: "The Statesman: how VB-G RAM G differs from MGNREGA",
    url: "https://www.thestatesman.com/india/parliament-clears-vb-g-ram-g-bill-2025-how-it-is-different-from-mgnrega-1503527873.html",
  },
  {
    label: "Outlook: what VB-G RAM G changes for rural workers",
    url: "https://www.outlookindia.com/national/outlook-explains-what-vb-g-ram-g-changes-for-rural-workers",
  },
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
  { label: "Rural Development Department, Mizoram" },
];
