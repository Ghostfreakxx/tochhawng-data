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
  /** Optional extra details shown on the card when given. */
  pay?: string;
  ageLimit?: string;
  fee?: string;
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
  {
    id: "fcsca-ldc-2026",
    title: "Lower Divisional Clerk (LDC)",
    department: "Food, Civil Supplies & Consumer Affairs Department",
    category: "State Government",
    posts: 8,
    qualification: "As per the notice (listings differ: HSLC or Class 12)",
    location: "Aizawl",
    publishedDate: "2026-11-13",
    lastDate: "2026-12-12",
    howToApply:
      "Offline, to the Establishment Branch, 1st Floor, Treasury Square, Aizawl",
    pay: "₹16,920 per month (provisional employee)",
    ageLimit: "18–35 years as on 1 January 2026",
    fee: "₹200 (General), ₹150 (ST/SC/OBC)",
    link: "https://www.freejobalert.com/articles/fcs-ca-lower-divisional-clerk-ldc-provisional-recruitment-2026-3080567",
    linkLabel: "Listing (FreeJobAlert)",
    note: "Provisional posts. Check the official notice from the FCS&CA Department for the exact qualification.",
  },
  {
    id: "nit-mizoram-non-teaching-2026",
    title: "Technical Assistant, Stenographer, Technician & Office Attendant",
    department: "National Institute of Technology (NIT) Mizoram",
    category: "Central Government",
    posts: 5,
    qualification:
      "Office Attendant & Stenographer: 10+2 · Technician: 10+2, or 10th + ITI, or Civil Engineering Diploma · Technical Assistant: Engineering, MCA or Science",
    location: "Aizawl",
    publishedDate: "2026-10-30",
    lastDate: "2026-11-30",
    howToApply: "As per Advertisement No. NITMZ/R-1/NT/15/2026/2219 (closes 5:00 PM)",
    ageLimit: "18–30 years (Technical Assistant), 18–27 years (other posts) as on 30 Nov 2026",
    link: "https://www.freejobalert.com/articles/nit-mizoram-recruitment-2026-stenographer-group-technician-group-3077757",
    linkLabel: "Listing (FreeJobAlert)",
    note: "Technical Assistant Gr. B (1), Stenographer Gr. C (1), Technician Gr. C (1), Office Attendant Gr. C (2), all unreserved. Listings differ on whether to apply by email or online — check the notice on nitmz.ac.in.",
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
    name: "NIT Mizoram — Recruitment",
    url: "https://www.nitmz.ac.in/category/recruitment/",
    description: "Teaching and non-teaching vacancies at NIT Mizoram.",
  },
  {
    name: "Union Public Service Commission (UPSC)",
    url: "https://upsc.gov.in",
    description: "Civil Services, Engineering Services and other central recruitment.",
  },
];
