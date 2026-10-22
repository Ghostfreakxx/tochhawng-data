import type { Datum, Source, Stat } from "./types";

export const budgetStats: Stat[] = [
  {
    label: "Budgeted spending 2026–27",
    value: "₹17,077 Cr",
    note: "Total expenditure. Receipts ₹17,470 Cr, leaving a ₹393 Cr surplus",
  },
  {
    label: "Capital expenditure",
    value: "₹2,982 Cr",
    note: "Up 12.2% on 2025–26, for roads, buildings and other assets",
  },
  {
    label: "Central tax devolution",
    value: "₹8,608 Cr",
    note: "Share of central taxes, about half of all receipts",
  },
  {
    label: "Projected GSDP",
    value: "₹43,817 Cr",
    note: "Size of the state economy assumed for 2026–27",
  },
  {
    label: "Bana Kaih scheme",
    value: "₹350 Cr",
    note: "Flagship handholding scheme, including ₹150 Cr for crop procurement",
  },
  {
    label: "New taxes",
    value: "None",
    note: "No new taxes were proposed in Budget 2026–27",
  },
];

// Total budgeted expenditure as presented in each year's budget speech.
export const budgetTrend: Datum[] = [
  { label: "2024–25", value: 14412 },
  { label: "2025–26", value: 15199 },
  { label: "2026–27", value: 17077 },
];

// 2026–27 Budget Estimates, PRS Legislative Research.
export const sectorAllocations: Datum[] = [
  { label: "Education, Sports, Arts & Culture", value: 2283 },
  { label: "Agriculture & allied", value: 940 },
  { label: "Health & Family Welfare", value: 909 },
  { label: "Police", value: 781 },
  { label: "Roads & Bridges (Transport)", value: 359 },
];

export const budgetHighlights = [
  "₹1,004 Cr for the rural employment programme",
  "₹584 Cr for Samagra Shiksha Abhiyan",
  "₹235 Cr for the Bana Kaih handholding scheme within agriculture",
  "₹183.25 Cr total outlay for road maintenance",
  "₹176 Cr for district police",
  "₹130 Cr to settle MUHCS healthcare bills",
  "Revenue expenditure of ₹14,094 Cr",
  "Supplementary demands of ₹3,724 Cr for 2025–26",
];

export const budgetSources: Source[] = [
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
  {
    label: "Budget Speech 2026–27, Mizoram Legislative Assembly",
    url: "https://www.mizoramassembly.in/storage/budget-speeches/February2026/BS-01KJCAQ2SZ2441Q8D8M4FNHX63.pdf",
  },
  {
    label: "NE Now: ₹17,469 crore budget with no new taxes",
    url: "https://nenow.in/north-east-news/mizoram/mizoram-cm-lalduhoma-presents-rs-17469-crore-budget-with-no-new-taxes.html",
  },
  {
    label: "Outlook: Mizoram CM presents ₹17,469.91 crore budget",
    url: "https://www.outlookindia.com/national/mizoram-cm-presents-rs-1746991-crore-budget-for-2026-27",
  },
  {
    label: "PRS: Mizoram Budget Analysis 2025–26",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2025-26",
  },
  {
    label: "Akashvani: Mizoram budget 2025–26 presented",
    url: "https://www.newsonair.gov.in/mizoram-annual-budget-for-fy-2025-26-presented-in-the-assembly",
  },
  { label: "Finance Department, Mizoram", url: "https://finance.mizoram.gov.in/" },
];
