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
 * 5. Private jobs usually have no closing date. Set `openUntilFilled: true`,
 *    `publishedDate` to the day you saw the posting, and `lastDate` to 30 days
 *    later. The card then shows "Open until filled" and the listing drops off
 *    by itself after 30 days, so stale private postings don't pile up.
 *
 * Categories and sectors are free text, but reusing the existing values keeps
 * the filters tidy.
 */

export type JobCategory =
  | "State Government"
  | "MPSC"
  | "Central Government"
  | "Public Sector"
  | "Private Sector"
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
  /** "YYYY-MM-DD" — last date to apply (for openUntilFilled jobs: when to stop showing it). */
  lastDate: string;
  /** Posting has no closing date (typical for private jobs). */
  openUntilFilled?: boolean;
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
  {
    id: "rrb-isolated-cen-09-2026",
    title: "Ministerial & Isolated Categories (CEN 09/2026)",
    department: "Railway Recruitment Boards (RRB), Ministry of Railways",
    category: "Central Government",
    posts: 191,
    qualification: "Varies by post (e.g. Junior Translator, Inspector and other isolated categories)",
    location: "All India (choose an RRB region)",
    publishedDate: "2026-11-05",
    lastDate: "2026-12-04",
    howToApply: "Online at rrbapply.gov.in. Fee payment until 6 Dec; corrections 7–16 Dec",
    link: "https://www.rrbapply.gov.in",
    linkLabel: "Apply at rrbapply.gov.in",
    note: "Centralised Employment Notice 09/2026. For the Northeast, RRB Guwahati is the nearest board.",
  },
  {
    id: "assam-rifles-tech-tradesman-2026",
    title: "Technical & Tradesman (Rifleman, Havildar, Warrant Officer)",
    department: "Assam Rifles, Ministry of Home Affairs",
    category: "Central Government",
    posts: 354,
    qualification: "Varies by trade; see the notification",
    location: "All India; recruitment rally expected from January 2027",
    publishedDate: "2026-11-15",
    lastDate: "2026-12-14",
    howToApply: "Online at assamrifles.gov.in (closes 11:59 PM)",
    ageLimit: "18–23 or 18–25 years depending on post (check notification)",
    link: "https://www.assamrifles.gov.in",
    linkLabel: "Apply at assamrifles.gov.in",
    note: "Fresh notification issued 3 November 2026 after an earlier advertisement was cancelled. Listings say male candidates only.",
  },
  {
    id: "exim-bank-mt-manager-2026",
    title: "Management Trainee (90) & Manager (30)",
    department: "Export-Import Bank of India (EXIM Bank)",
    category: "Public Sector",
    posts: 120,
    qualification: "As per Advertisement No. HRM/MT/M/2026-27/05",
    location: "All India",
    publishedDate: "2026-11-27",
    lastDate: "2026-12-11",
    howToApply: "Online at eximbankindia.in (Careers)",
    link: "https://www.eximbankindia.in",
    linkLabel: "Official site (eximbankindia.in)",
    note: "Applications open 27 November 2026.",
  },
  {
    id: "geovista-field-surveyor-2026-11",
    title: "Field Surveyor",
    department: "GeoVista Technologies Private Limited",
    category: "Private Sector",
    posts: null,
    qualification: "Freshers and experienced candidates",
    location: "Aizawl",
    publishedDate: "2026-11-12",
    lastDate: "2026-12-12",
    openUntilFilled: true,
    howToApply: "Apply through the Indeed listing",
    pay: "From about ₹900 per day (fresher listing)",
    link: "https://in.indeed.com/jobs-in-Aizawl,-Mizoram",
    linkLabel: "Find it on Indeed (Aizawl jobs)",
    note: "Full-time, permanent field role collecting, verifying and reporting survey data. Listings mention health and life insurance. Seen on Indeed on 12 November 2026.",
  },
  {
    id: "tamz-group-bdm-aizawl-2026-11",
    title: "Manager – Business Development",
    department: "Tamz Group",
    category: "Private Sector",
    posts: null,
    qualification: "Business development / sales experience",
    location: "Aizawl & Lunglei",
    publishedDate: "2026-11-12",
    lastDate: "2026-12-12",
    openUntilFilled: true,
    howToApply: "Apply through the job board listing",
    pay: "₹20,466–₹36,389 per month (employer-provided range on Glassdoor)",
    link: "https://www.glassdoor.com/Job/mizoram-jobs-SRCH_IL.0,7_IS4958.htm",
    linkLabel: "Find it on Glassdoor (Mizoram jobs)",
    note: "Set up the company's commercial operations in Aizawl and Lunglei, reporting to the Head of North-East. Also listed on Indeed (12 November 2026).",
  },
];

/** Places to search for private sector jobs in Mizoram. */
export const privateJobSites = [
  {
    name: "Mizoram EmpEx — Employment Exchange",
    url: "https://empex.mizoram.gov.in",
    description: "The state's official online employment exchange (LESDE Department). Register and see placement listings.",
  },
  {
    name: "National Career Service (NCS)",
    url: "https://www.ncs.gov.in",
    description: "Government portal with private-sector vacancies and job fairs across India, including the Northeast.",
  },
  {
    name: "Indeed — Jobs in Aizawl",
    url: "https://in.indeed.com/jobs-in-Aizawl,-Mizoram",
    description: "Private jobs in Aizawl: sales, field work, accounting, healthcare and more. Updated daily.",
  },
  {
    name: "Glassdoor — Jobs in Mizoram",
    url: "https://www.glassdoor.com/Job/mizoram-jobs-SRCH_IL.0,7_IS4958.htm",
    description: "Private jobs across Mizoram, often with salary ranges.",
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
    name: "Railway Recruitment Boards (RRB Apply)",
    url: "https://www.rrbapply.gov.in",
    description: "Single portal for all Indian Railways recruitment (NTPC, Group D, ALP, JE and more).",
  },
  {
    name: "Assam Rifles",
    url: "https://www.assamrifles.gov.in",
    description: "Recruitment for Rifleman, Havildar, Warrant Officer and technical trades.",
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
