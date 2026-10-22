import type { Source, Stat } from "./types";

export type Recruitment = {
  title: string;
  recruiter: "MPSC" | "Mizoram Police";
  posts: number | null;
  // ISO date (YYYY-MM-DD). null when the notice has no single closing date.
  lastDate: string | null;
  detail: string;
  link: string;
};

// Compiled from MPSC notices and job listings as reported in 2026. Always
// confirm dates and eligibility on the official notice before applying.
export const recruitments: Recruitment[] = [
  {
    title: "Departmental Junior Grade examination",
    recruiter: "MPSC",
    posts: null,
    lastDate: "2026-11-09",
    detail: "Open to serving employees. Notice listed on MPSC Online.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Constable (Unarmed & Armed Branch)",
    recruiter: "Mizoram Police",
    posts: 350,
    lastDate: "2026-10-22",
    detail:
      "Common Group C drive with women's reservation in the Unarmed Branch. HSLC pass; pay ₹19,900–63,200.",
    link: "https://police.mizoram.gov.in/",
  },
  {
    title: "Peon",
    recruiter: "MPSC",
    posts: 3,
    lastDate: "2026-10-13",
    detail: "Direct recruitment.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Lower Division Clerk",
    recruiter: "MPSC",
    posts: 4,
    lastDate: "2026-10-12",
    detail:
      "Advt. No. 25 of 2026–27. HSSLC plus computer qualification; Pay Level 4.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Junior Accounts Officer & Warden",
    recruiter: "MPSC",
    posts: 8,
    lastDate: "2026-09-21",
    detail:
      "Advt. No. 24 of 2026–27. 6 JAO (Transport) and 2 Warden (Social Welfare).",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Senior Grade, Mizoram Health Service",
    recruiter: "MPSC",
    posts: 5,
    lastDate: "2026-09-16",
    detail: "Medical officers' senior grade.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Group A & B posts",
    recruiter: "MPSC",
    posts: 33,
    lastDate: "2026-09-07",
    detail:
      "Legal Officer, Junior Scientific Officer, Sub-Inspector, Soil Conservation Ranger and others. Closing dates ran from 24 Aug to 7 Sep.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Upper Division Clerk",
    recruiter: "MPSC",
    posts: 18,
    lastDate: "2026-07-24",
    detail: "Direct recruitment.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Nursing Officer & Staff Nurse",
    recruiter: "MPSC",
    posts: 42,
    lastDate: "2026-06-12",
    detail: "Health & Family Welfare posts.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Junior Grade of MSS",
    recruiter: "MPSC",
    posts: 11,
    lastDate: "2026-05-25",
    detail:
      "Advt. No. 13 of 2026–27. Limited departmental exam; 5 years' service as Assistant required.",
    link: "https://mpsconline.mizoram.gov.in/",
  },
  {
    title: "Limited Departmental Exams (11 notices)",
    recruiter: "MPSC",
    posts: 187,
    lastDate: null,
    detail:
      "Includes 164 Headmaster posts in Government Middle Schools, plus Stenographer and Bench Clerk posts.",
    link: "https://mpsc.mizoram.gov.in/",
  },
  {
    title: "Assistant Grade, SAS-I & Senior Horticulture Demonstrator",
    recruiter: "MPSC",
    posts: 51,
    lastDate: null,
    detail: "41 Assistant Grade posts through LDE and 10 by direct recruitment.",
    link: "https://mpsc.mizoram.gov.in/",
  },
];

export const totalPostsTracked = recruitments.reduce(
  (sum, r) => sum + (r.posts ?? 0),
  0,
);

export const jobStats: Stat[] = [
  {
    label: "Posts in tracked 2026 notices",
    value: totalPostsTracked.toLocaleString("en-IN"),
    note: `Across ${recruitments.length} MPSC and Mizoram Police recruitment notices`,
  },
  {
    label: "Employment exchange register",
    value: "2,20,102",
    note: "Total registrations on EmpEx, of which 23,289 are active",
  },
  {
    label: "Unemployment rate",
    value: "2.4%",
    note: "Persons aged 15+, PLFS calendar year 2025 (India: youth rate 9.9%)",
  },
  {
    label: "Police constable drive",
    value: "350",
    note: "Largest single recruitment of 2026; last date was 22 Oct 2026",
  },
];

export const jobChannels = [
  {
    name: "MPSC Online",
    url: "https://mpsconline.mizoram.gov.in/",
    note: "Apply for MPSC posts. Users of the old portal must create a new account.",
  },
  {
    name: "Mizoram Public Service Commission",
    url: "https://mpsc.mizoram.gov.in/",
    note: "Advertisements, exam schedules, syllabi and results.",
  },
  {
    name: "Employment Exchange (EmpEx)",
    url: "https://empex.mizoram.gov.in/",
    note: "Register as a job seeker online and read employment news.",
  },
  {
    name: "LESDE Department",
    url: "https://lesde.mizoram.gov.in/",
    note: "Labour, skill development, job fairs and entrepreneurship schemes.",
  },
  {
    name: "Mizoram Police",
    url: "https://police.mizoram.gov.in/",
    note: "Constable and other police recruitment notices.",
  },
  {
    name: "National Career Service",
    url: "https://www.ncs.gov.in/",
    note: "Central job portal that Mizoram's career centres use.",
  },
];

export const jobEvents = [
  {
    date: "10–14 Feb 2026",
    title: "LESDE Kût 2026, Aizawl",
    detail:
      "Five-day skills and jobs festival at Lammual with a job fair. The Governor launched two schemes for registered construction workers: Eizawnna Kailawn (skill training) and Rahbi Chhertu (new career pathways).",
  },
  {
    date: "Jul 2026",
    title: "LESDE Job Fair & Career Fair, Lunglei",
    detail:
      "27 employer stalls, run under the National Career Service Model Career Centre scheme.",
  },
  {
    date: "Jul 2026",
    title: "Job fairs in Siaha and Champhai",
    detail: "District job fairs with stalls from companies and institutions.",
  },
  {
    date: "From 1 Jul 2026",
    title: "VB-G RAM G replaces MGNREGS",
    detail:
      "Rural households are now guaranteed 125 days of wage work a year instead of 100. The state budgeted ₹1,004 Cr for rural employment in 2026–27.",
  },
];

export const jobSources: Source[] = [
  { label: "MPSC Online", url: "https://mpsconline.mizoram.gov.in/" },
  {
    label: "Employment Exchange Mizoram (EmpEx)",
    url: "https://empex.mizoram.gov.in/",
  },
  {
    label: "India Labour Observatory: PLFS 2024 and 2025",
    url: "https://indialabourobservatory.com/data/plfs-2025/2024-and-2025/",
  },
  {
    label: "PIB: PLFS Annual Report 2025",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246009",
  },
  {
    label: "EastMojo: LESDE Kût 2026",
    url: "https://eastmojo.com/mizoram/2026/02/11/mizoram-hosts-lesde-kut-2026-with-focus-on-skills-jobs/",
  },
  {
    label: "Lok Bhavan Mizoram: Governor inaugurates LESDE Kût 2026",
    url: "https://rajbhavan.mizoram.gov.in/mizoram-governor-inaugurates-lesde-kut-2026-in-aizawl/",
  },
  {
    label: "PIB: VB-G RAM G Act commencement",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703",
  },
];
