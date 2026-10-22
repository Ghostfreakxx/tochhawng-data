import type { Datum, Source, Stat } from "./types";

export const populationStats: Stat[] = [
  {
    label: "Population (Census 2011)",
    value: "10,97,206",
    note: "About 12.5 lakh estimated for 2024",
  },
  {
    label: "Urban population",
    value: "52.1%",
    note: "Among the most urbanised states in India (2011)",
  },
  {
    label: "Sex ratio",
    value: "976",
    note: "Females per 1,000 males (2011)",
  },
  {
    label: "Districts",
    value: "11",
    note: "Administrative districts",
  },
];

// Census counts in lakh; 2024 is an estimate, not a census figure.
export const populationTrend: Datum[] = [
  { label: "1991", value: 6.9 },
  { label: "2001", value: 8.89 },
  { label: "2011", value: 10.97 },
  { label: "2024 (est.)", value: 12.5 },
];

export const demographicHighlights = [
  "Density of about 52 people per sq km (2011)",
  "Over half the population lives in towns",
  "Young and educated workforce",
  "Strong community-based social structure",
  "Steady migration toward Aizawl",
  "Rising demand for housing and services",
];

export const populationChallenges = [
  "Congestion in Aizawl",
  "Jobs for young people",
  "Rural to urban migration",
  "Infrastructure demand",
  "Housing affordability",
  "Balanced regional development",
];

export const populationSources: Source[] = [
  { label: "Census of India 1991, 2001 and 2011" },
  { label: "Statistical Handbook of Mizoram" },
  { label: "Office of the Registrar General & Census Commissioner, India", url: "https://censusindia.gov.in/" },
];
