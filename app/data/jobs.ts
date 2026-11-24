/*
 * Job listings shown on /jobs.
 *
 * HOW TO ADD A JOB
 * 1. Copy one of the entries below and change the fields.
 * 2. `lastDate` is the last date to apply, as "YYYY-MM-DD". The portal
 *    automatically moves a listing to "Closed" after this date, so old
 *    listings never need to be deleted by hand (but you can).
 * 3. `link` should point to the official notification or the page where it
 *    was published. Always check the official notice before adding a job.
 * 4. `id` just needs to be unique.
 *
 * Categories and sectors are free text, but reusing the existing values keeps
 * the filters tidy.
 */

export type JobCategory =
  | "State Government"
  | "MPSC"
  | "Central Government"
  | "Public Sector"
  | "Other";

export type Job = {
  id: string;
  title: string;
  department: string;
  category: JobCategory;
  posts: number | null;
  qualification: string;
  location: string;
  /** "YYYY-MM-DD" — first day applications are accepted (optional). */
  publishedDate?: string;
  /** "YYYY-MM-DD" — last date to apply. */
  lastDate: string;
  howToApply: string;
  link: string;
  linkLabel: string;
  note?: string;
};

export const jobs: Job[] = [
  {
    id: "law-judicial-deputy-secretary-2026",
    title: "Deputy Secretary",
    department: "Law & Judicial Department, Government of Mizoram",
    category: "State Government",
    posts: 1,
    qualification: "As per the vacancy circular",
    location: "Aizawl",
    publishedDate: "2026-11-20",
    lastDate: "2026-12-04",
    howToApply: "Offline application, as set out in the vacancy circular",
    link: "https://www.freejobalert.com/articles/mizoram-law-and-judicial-department-deputy-secretary-recruitment-2026-3083795",
    linkLabel: "Listing (FreeJobAlert)",
    note: "Vacancy circular dated 20 November 2026. Confirm details with the Law & Judicial Department before applying.",
  },
  {
    id: "gad-protocol-group-d-2026",
    title: "Group D (P.E) posts",
    department: "General Administration Department — Protocol & Hospitality Wing",
    category: "State Government",
    posts: 6,
    qualification: "As per the advertisement",
    location: "Aizawl",
    publishedDate: "2026-10-28",
    lastDate: "2026-11-27",
    howToApply: "Within 30 days of the advertisement dated 28 October 2026",
    link: "https://www.northeastjob.in/2026/11/gad-mizoram.html",
    linkLabel: "Listing (NortheastJob)",
    note: "Last date worked out as 30 days from the 28 October 2026 advertisement. Confirm with GAD.",
  },
];

/** Official places to find new government jobs. */
export const officialJobSites = [
  {
    name: "Mizoram Public Service Commission (MPSC)",
    url: "https://mpsc.mizoram.gov.in",
    description: "State civil service and departmental recruitment notices, exam schedules and results.",
  },
  {
    name: "MPSC Online",
    url: "https://mpsconline.mizoram.gov.in",
    description: "Online application portal for MPSC examinations.",
  },
  {
    name: "Government of Mizoram",
    url: "https://mizoram.gov.in",
    description: "State government portal with department notices and announcements.",
  },
  {
    name: "National Career Service (NCS)",
    url: "https://www.ncs.gov.in",
    description: "Central job portal from the Ministry of Labour — public and private vacancies, job fairs.",
  },
  {
    name: "Employment News",
    url: "https://www.employmentnews.gov.in",
    description: "Weekly Government of India publication listing central government vacancies.",
  },
  {
    name: "Staff Selection Commission (SSC)",
    url: "https://ssc.gov.in",
    description: "Central government Group B and C recruitment (CGL, CHSL, MTS, GD Constable).",
  },
  {
    name: "Union Public Service Commission (UPSC)",
    url: "https://upsc.gov.in",
    description: "Civil Services, Engineering Services and other central recruitment.",
  },
];
