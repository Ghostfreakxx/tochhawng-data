import type { Datum, Source, Stat } from "./types";

export const electionStats: Stat[] = [
  {
    label: "Assembly seats",
    value: "40",
    note: "ZPM won 27 in 2023 and formed the government",
  },
  {
    label: "Lok Sabha 2024",
    value: "ZPM",
    note: "Richard Vanlalhmangaiha won by 68,288 votes",
  },
  {
    label: "Aizawl Municipal Corporation 2026",
    value: "17 / 19",
    note: "Wards won by ZPM. MNF fell from 11 seats in 2021 to 1",
  },
  {
    label: "Assembly turnout 2023",
    value: "80.4%",
    note: "Provisional figure on polling day, 7 Nov 2023",
  },
];

export const assembly2023: Datum[] = [
  { label: "ZPM", value: 27 },
  { label: "MNF", value: 10 },
  { label: "BJP", value: 2 },
  { label: "INC", value: 1 },
];

export const turnoutTrend: Datum[] = [
  { label: "2008", value: 82.35 },
  { label: "2013", value: 83.41 },
  { label: "2018", value: 81.61 },
  { label: "2023", value: 80.43 },
];

export const lokSabha2024 = [
  { candidate: "Richard Vanlalhmangaiha", party: "ZPM", votes: 208552 },
  { candidate: "K. Vanlalvena", party: "MNF", votes: 140264 },
  { candidate: "Lalbiakzama", party: "INC", votes: 98595 },
  { candidate: "Vanlalhmuaka", party: "BJP", votes: 33533 },
];

export const amc2026 = [
  { party: "ZPM", wards: 17 },
  { party: "MNF", wards: 1 },
  { party: "INC", wards: 1 },
  { party: "BJP", wards: 0 },
];

export const electionFacts = [
  "40 Assembly constituencies, 1 Lok Sabha and 1 Rajya Sabha seat",
  "Lok Sabha 2024 turnout was 56.87%, far below Assembly polls",
  "AMC 2026: BJP contested 11 wards and won none",
  "Peaceful, regular transfers of power",
  "Autonomous District Councils for the Lai, Mara and Chakma areas",
  "Village Council elections run by the State Election Commission",
];

export const electionSources: Source[] = [
  { label: "Election Commission of India", url: "https://eci.gov.in/" },
  {
    label: "EastMojo: Mizoram records 80.43% turnout (2023)",
    url: "https://eastmojo.com/mizoram/2023/11/08/mizoram-records-80-43-voter-turnout-in-state-elections/",
  },
  {
    label: "NE Now: ZPM bags lone Mizoram Lok Sabha seat",
    url: "https://nenow.in/lok-sabha-election-2024/zpm-bags-lone-mizoram-lok-sabha-seat.html",
  },
  {
    label: "Sentinel Assam: ZPM sweeps Aizawl Municipal Corporation polls",
    url: "https://www.sentinelassam.com/north-east-india-news/mizoram-news/zpm-sweeps-aizawl-municipal-corporation-polls-wins-17-of-19-wards-in-major-civic-shift",
  },
  { label: "Chief Electoral Officer, Mizoram" },
];
