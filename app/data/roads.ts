import type { Source, Stat } from "./types";

export const roadStats: Stat[] = [
  {
    label: "Roads & bridges 2026–27",
    value: "₹359 Cr",
    note: "Transport (roads and bridges) budget estimate",
  },
  {
    label: "Road maintenance",
    value: "₹183.25 Cr",
    note: "Total outlay for road maintenance in 2026–27",
  },
  {
    label: "Rail to Aizawl",
    value: "51.38 km",
    note: "Bairabi–Sairang line, opened Sep 2025",
  },
  {
    label: "Works accounts on MIWAS",
    value: "6 depts",
    note: "PWD and five other works departments, from Oct 2026",
  },
];

export const roadProjects = [
  "Bairabi–Sairang railway, linking Aizawl to the national rail network",
  "Kaladan Multi-Modal Transit corridor links",
  "National highway upgrades",
  "District road upgrades",
  "Rural and border-area roads",
  "Urban road improvements in Aizawl",
];

export const roadChallenges = [
  "Landslides and erosion every monsoon",
  "High construction costs on hill terrain",
  "Maintenance funding",
  "Rural accessibility gaps",
  "Weather disruptions to projects",
  "Slow reconciliation of works accounts, which MIWAS aims to fix",
];

export const roadSources: Source[] = [
  {
    label: "PRS: Mizoram Budget Analysis 2026–27",
    url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
  },
  {
    label: "The Tribune: PM inaugurates ₹9,000 crore projects in Mizoram",
    url: "https://www.tribuneindia.com/news/india/heavy-rains-lash-mizoram-pm-modi-inaugurates-rs-9000-crore-projects-virtually",
  },
  {
    label: "NE Now: four digital financial management initiatives",
    url: "https://nenow.in/north-east-news/mizoram/mizoram-cm-lalduhoma-launches-four-digital-financial-management-initiatives.html",
  },
  { label: "Public Works Department, Mizoram" },
];
