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
  {
    id: "axis-bank-rm-priority-aizawl-2026-11",
    title: "Relationship Manager – Priority Banking",
    department: "Axis Bank",
    category: "Private Sector",
    posts: null,
    qualification: "Graduate; 6–10 years of BFSI experience in operations and lending",
    location: "Aizawl",
    publishedDate: "2026-11-24",
    lastDate: "2026-12-24",
    openUntilFilled: true,
    howToApply: "Apply through the job listing or Axis Bank careers",
    link: "https://www.jobaaj.com/job/axis-bank-branch-relationship-manager-priority-banking-aizawl-mizoram-6-to-10-years-1496828",
    linkLabel: "View listing (Jobaaj)",
    note: "Experienced banking role managing priority (high-value) customers at the Aizawl branch. Seen on 24 November 2026.",
  },
  {
    id: "bitumix-sr-sales-exec-aizawl-2026-11",
    title: "Senior Sales Executive",
    department: "Bitumix India LLP",
    category: "Private Sector",
    posts: null,
    qualification: "1–2 years of sales experience; must be a local resident",
    location: "Aizawl",
    publishedDate: "2026-11-24",
    lastDate: "2026-12-24",
    openUntilFilled: true,
    howToApply: "Apply through the Indeed listing",
    pay: "From ₹22,000 per month",
    link: "https://in.indeed.com/cmp/Bitumix-India-LLP",
    linkLabel: "View on Indeed (Bitumix India)",
    note: "Full-time B2B sales of industrial bitumen products: finding new business customers and looking after existing ones. Knowledge of the Aizawl/Mizoram market is an advantage. Seen on 24 November 2026.",
  },
  {
    id: "nit-mizoram-faculty-2026-11",
    title: "Associate Professor & Assistant Professor Grade-II",
    department: "National Institute of Technology (NIT) Mizoram",
    category: "Central Government",
    posts: 3,
    qualification: "As per NIT norms for each post (PhD / postgraduate in the subject)",
    location: "Aizawl",
    lastDate: "2026-11-30",
    howToApply: "By email, as set out in the advertisement (closes 5:00 PM)",
    link: "https://www.nitmz.ac.in/category/recruitment/",
    linkLabel: "NIT Mizoram recruitment page",
    note: "Associate Professor, Electrical Engineering (1, regular); Assistant Professor Grade-II on contract in Civil Engineering (1) and Economics (1).",
  },
  {
    id: "nabard-project-associate-2026",
    title: "Junior & Senior Project Associate",
    department: "National Bank for Agriculture and Rural Development (NABARD)",
    category: "Public Sector",
    posts: 24,
    qualification: "Specialist qualifications by post; eligibility cut-off date 1 October 2026",
    location: "All India",
    publishedDate: "2026-11-21",
    lastDate: "2026-12-07",
    howToApply: "Online via nabard.org (Advertisement No. 05)",
    link: "https://www.nabard.org",
    linkLabel: "Official site (nabard.org)",
    note: "Contract specialist posts. Open to candidates from all states.",
  },
  {
    id: "rrc-nr-act-apprentice-2026",
    title: "Act Apprentice",
    department: "Railway Recruitment Cell, Northern Railway (RRC NR)",
    category: "Central Government",
    posts: 4651,
    qualification: "Class 10 with ITI in the relevant trade",
    location: "Northern Railway units (North India)",
    publishedDate: "2026-11-11",
    lastDate: "2026-12-11",
    howToApply: "Online at rrcnr.org (closes 11:59 PM)",
    ageLimit: "15–24 years",
    link: "https://www.rrcnr.org",
    linkLabel: "Apply at rrcnr.org",
    note: "One-year apprenticeship training under the Apprentices Act, 1961, with a stipend. Training is at Northern Railway workshops and divisions, not in the Northeast.",
  },
  {
    id: "iocl-pipelines-apprentice-2026",
    title: "Technician, Trade & Data Entry Operator Apprentice",
    department: "Indian Oil Corporation Ltd (IOCL), Pipelines Division",
    category: "Public Sector",
    posts: 500,
    qualification: "ITI, diploma or graduate depending on the apprentice category",
    location: "IOCL Pipelines locations across India",
    publishedDate: "2026-11-06",
    lastDate: "2026-12-05",
    howToApply: "Online, via the IOCL apprenticeships page",
    link: "https://iocl.com/apprenticeships",
    linkLabel: "IOCL apprenticeships page",
    note: "Apprenticeship training under the Apprentices Act, with a monthly stipend.",
  },
  {
    id: "iocl-eastern-region-apprentice-2026",
    title: "Trade, Technician & Graduate Apprentice",
    department: "Indian Oil Corporation Ltd (IOCL), Marketing Division – Eastern Region",
    category: "Public Sector",
    posts: 409,
    qualification: "ITI, diploma or graduate depending on the apprentice category",
    location: "Eastern Region states (check the state list in the notice)",
    publishedDate: "2026-11-13",
    lastDate: "2026-12-12",
    howToApply: "Online, via the IOCL apprenticeships page (closes 5:00 PM)",
    link: "https://iocl.com/admin/img/Apprenticeships/Files/63db2afaa13e47c28e10030d5da6b525.pdf",
    linkLabel: "Official notice (PDF)",
    note: "Eligibility is reckoned as on 30 November 2026. Sources differ on which states are covered, so check the official notice.",
  },
  {
    id: "csir-group-b-c-2026",
    title: "Security Officer, Driver, MTS & other Group B/C posts",
    department: "Council of Scientific & Industrial Research (CSIR)",
    category: "Central Government",
    posts: 29,
    qualification: "Varies by post (Class 10 for MTS; higher for Group B posts)",
    location: "CSIR headquarters and labs",
    publishedDate: "2026-11-20",
    lastDate: "2026-12-21",
    howToApply: "Online, Advertisement No. R&A/02/2026 (fee by 5:00 PM on 21 Dec)",
    link: "https://www.csir.res.in",
    linkLabel: "Official site (csir.res.in)",
    note: "Age is counted as on the closing date.",
  },
  {
    id: "nspcl-field-engineer-2026",
    title: "Field Engineer",
    department: "NTPC-SAIL Power Company Ltd (NSPCL)",
    category: "Public Sector",
    posts: null,
    qualification: "Engineering degree in the relevant discipline (see notice)",
    location: "NSPCL plants",
    publishedDate: "2026-11-20",
    lastDate: "2026-12-04",
    howToApply: "Online, Advt. No. 03/2026 (closes 11:59 PM)",
    link: "https://nspclregistration.ibtexamination.com/App02NSpcL2026/index.php",
    linkLabel: "NSPCL application portal",
    note: "Listings give 17 or 18 posts. NSPCL is a joint venture of NTPC and SAIL.",
  },
  {
    id: "ntpc-finance-managers-2026",
    title: "Manager (Finance) & Deputy Manager (Finance)",
    department: "NTPC Limited",
    category: "Public Sector",
    posts: 40,
    qualification: "CA or CMA, with 12 years (Manager) or 10 years (Deputy Manager) of executive experience",
    location: "All India",
    publishedDate: "2026-11-19",
    lastDate: "2026-12-03",
    howToApply: "Online on NTPC careers, Advt. No. 18/26 (closes 6:00 PM)",
    ageLimit: "Up to 42 (Manager) or 40 (Deputy Manager)",
    pay: "E5 (Manager) and E4 (Deputy Manager) grades",
    link: "https://careers.ntpc.co.in",
    linkLabel: "NTPC careers",
    note: "15 Manager and 25 Deputy Manager posts for experienced finance professionals.",
  },
  {
    id: "supreme-court-jca-2026",
    title: "Junior Court Attendant",
    department: "Supreme Court of India",
    category: "Central Government",
    posts: 130,
    qualification: "As per the notification",
    location: "New Delhi",
    publishedDate: "2026-11-04",
    lastDate: "2026-11-25",
    howToApply: "Online (closes 11:55 PM)",
    link: "https://www.sci.gov.in",
    linkLabel: "Official site (sci.gov.in)",
    note: "Check the recruitment section of the Supreme Court website for the notification and application link.",
  },
  {
    id: "bhu-medical-non-teaching-2026",
    title: "Nursing Officer, Medical Officer, Lab Attendant & other non-teaching posts",
    department: "Banaras Hindu University (BHU) – Medical Sector",
    category: "Central Government",
    posts: 601,
    qualification: "Varies by post (B.Sc Nursing / GNM for Nursing Officer)",
    location: "Varanasi",
    publishedDate: "2026-11-16",
    lastDate: "2026-12-15",
    howToApply: "Online via the BHU SAMARTH recruitment portal (closes 5:00 PM)",
    link: "https://bhu.ac.in/rac",
    linkLabel: "BHU recruitment (bhu.ac.in/rac)",
    note: "Advertisement No. 06/2026-27, Group A, B and C. Includes 381 Nursing Officer posts. Some listings give a lower total, so check the notification.",
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
    name: "Freshersworld — Jobs in Aizawl",
    url: "https://www.freshersworld.com/jobs-in-aizawl/99990230102",
    description: "Entry-level openings in Aizawl for graduates, such as relationship manager and sales roles.",
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
