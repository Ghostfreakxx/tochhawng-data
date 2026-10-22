import type { Datum, Source, Stat } from "./types";

export const educationStats: Stat[] = [
  {
    label: "Literacy rate",
    value: "98.2%",
    note: "Mizoram was declared fully literate under ULLAS in May 2025",
  },
  {
    label: "HSLC 2026 pass rate",
    value: "80.31%",
    note: "14,663 of 18,257 students from 714 schools passed",
  },
  {
    label: "Education budget 2026–27",
    value: "₹2,283 Cr",
    note: "Education, sports, arts and culture, the largest sector allocation",
  },
  {
    label: "Samagra Shiksha",
    value: "₹584 Cr",
    note: "School education allocation within the 2026–27 budget",
  },
];

export const literacyTrend: Datum[] = [
  { label: "2001", value: 88.8 },
  { label: "2011", value: 91.3 },
  { label: "2023–24", value: 98.2 },
];

export const hsslcStreams = [
  { stream: "Arts", pass: "80.37%" },
  { stream: "Science", pass: "81.67%" },
  { stream: "Commerce", pass: "87.37%" },
];

export const hslcDistricts = [
  { label: "Highest: Aizawl", value: "89.60%" },
  { label: "Lowest: Lawngtlai", value: "61.49%" },
  { label: "Private candidates", value: "49.66%" },
  { label: "HSLC 2025, for comparison", value: "81.10%" },
];

export const institutions = [
  "Mizoram University (MZU)",
  "ICFAI University Mizoram",
  "Pachhunga University College (PUC)",
  "Government colleges across districts",
  "Technical and vocational institutions",
  "Teacher education and training centres",
];

export const educationChallenges = [
  "Graduate unemployment",
  "District gap in results: Aizawl 89.6% vs Lawngtlai 61.5%",
  "Rural school infrastructure",
  "Digital learning access",
  "Skills and employability",
  "Research and innovation capacity",
];

export const educationSources: Source[] = [
  {
    label: "EastMojo: HSLC results, 80.31% pass rate",
    url: "https://eastmojo.com/mizoram/2026/04/23/mizoram-hslc-results-80-31-pass-rate-board-drops-merit-list/",
  },
  {
    label: "AglaSem: MBSE HSLC result 2026",
    url: "https://news.aglasem.com/mbse-hslc-result-2026-out-mizoram-board-class-10-result-declared-at-mbse-edu-in-no-merit-list-this-year/",
  },
  { label: "Mizoram Board of School Education", url: "https://mbse.edu.in/" },
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
  { label: "Census of India 2001 and 2011" },
];
