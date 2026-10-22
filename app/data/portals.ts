import type { Source, Stat } from "./types";

export const portalCategories = [
  "Finance & Tax",
  "Health",
  "Jobs & Education",
  "Citizen Services",
  "Governance & Data",
] as const;

export type PortalCategory = (typeof portalCategories)[number];

export type Portal = {
  name: string;
  url?: string;
  department: string;
  category: PortalCategory;
  description: string;
  // ISO date (YYYY-MM-DD) or month (YYYY-MM) of launch, when known.
  launched?: string;
};

export const portals: Portal[] = [
  // Launched 2025–2026
  {
    name: "MIWAS (Integrated Works Accounts System)",
    department: "Finance Department",
    category: "Finance & Tax",
    launched: "2026-10-15",
    description:
      "Brings the works accounts of PWD, PHE, Power & Electricity, Irrigation & Water Resources, Environment & Forests and Land Resources onto one system for reconciliation with the Accountant General.",
  },
  {
    name: "e-Sanction",
    department: "Finance Department",
    category: "Finance & Tax",
    launched: "2026-10-15",
    description:
      "Expenditure proposals move electronically from DDOs and Heads of Department to Finance, and spending beyond the available budget is blocked.",
  },
  {
    name: "e-Budget",
    department: "Finance Department",
    category: "Finance & Tax",
    launched: "2026-10-15",
    description:
      "Departments prepare and submit budget proposals online through IFMIS.",
  },
  {
    name: "100% Direct Benefit Transfer",
    department: "Finance Department",
    category: "Finance & Tax",
    launched: "2026-10-15",
    description:
      "Payments under Bana Kaih, Thlai Thar Leina, power subsidies and other schemes go straight to beneficiaries' bank accounts, trackable through IFMIS.",
  },
  {
    name: "Online Land Tax Portal 2.0",
    url: "https://landtax.mizoram.gov.in/",
    department: "Land Revenue & Settlement, with ICT",
    category: "Finance & Tax",
    launched: "2026-05-28",
    description:
      "Pay land tax and Zoramchhiah with GPay, PhonePe, BHIM or Amazon Pay through BBPS using a Family ID or ration card number. Tax is now calculated yearly from an annual proforma.",
  },
  {
    name: "Online Medical Referral System",
    url: "https://medicalreferralmizoram.in/",
    department: "Hospital & Medical Education, with MSeGS",
    category: "Health",
    launched: "2026-05-20",
    description:
      "Apply online (₹20 fee) for provisional permission for treatment outside Mizoram under MUHCS. Referral boards in Aizawl and Lunglei review cases by video conference.",
  },
  {
    name: "Quarters Allotment Management System (QAMS)",
    url: "https://qams.mizoram.gov.in/",
    department: "General Administration Department",
    category: "Citizen Services",
    launched: "2026-05-14",
    description:
      "Apply for and track government quarters allotment online instead of on paper.",
  },
  {
    name: "Mizoram House Online Reservation",
    department: "General Administration Department, built by MSeGS",
    category: "Citizen Services",
    launched: "2026-05-14",
    description:
      "Book rooms at the Mizoram Houses in Delhi, Kolkata, Guwahati and Mumbai. It received 2,796 applications and made 1,640 allotments after its trial launch on 2 March 2026.",
  },
  {
    name: "Registrar of Cooperative Societies online",
    url: "https://cooperation.mizoram.gov.in/",
    department: "Cooperation Department",
    category: "Citizen Services",
    launched: "2026-02-03",
    description:
      "Computerised services for the RCS office and every district cooperative office. The Cooperation Minister said Mizoram is the first state to computerise all its cooperation offices.",
  },
  {
    name: "Mizoram CSR Connect",
    department: "Planning & Programme Implementation (CSR Cell), with UNDP India",
    category: "Governance & Data",
    launched: "2026-01",
    description:
      "Matches companies' CSR funds with development projects. Mizoram received only 0.06% of India's CSR spending in 2023–24.",
  },
  {
    name: "Mizo DiasporaHub",
    department: "Chief Minister's Office (Mizo Diaspora Cell)",
    category: "Governance & Data",
    launched: "2025-07-21",
    description:
      "Connects Mizo communities and welfare associations living outside the state and abroad.",
  },
  {
    name: "Mipui Aw grievance system",
    department: "Government of Mizoram",
    category: "Citizen Services",
    description:
      "Upgraded system for filing and monitoring public grievances, showcased at the Digital Transformation Conclave in May 2025.",
  },
  {
    name: "SDG Dashboard",
    department: "Government of Mizoram",
    category: "Governance & Data",
    description:
      "Village-level data on progress towards the Sustainable Development Goals.",
  },
  {
    name: "MPLAN project dashboard",
    department: "Government of Mizoram",
    category: "Governance & Data",
    description: "Real-time monitoring of state government projects.",
  },
  {
    name: "e-RAM",
    department: "Government of Mizoram",
    category: "Citizen Services",
    description: "Online land records, tax and revenue services.",
  },
  {
    name: "Inner Line Permit (ILP) online",
    url: "https://ilp.mizoram.gov.in/",
    department: "Home Department",
    category: "Citizen Services",
    launched: "2023-01",
    description:
      "Apply online for the Inner Line Permit needed to enter Mizoram. Phase I went live in January 2023.",
  },
  {
    name: "Civil Hospital Aizawl online OPD",
    department: "Health & Family Welfare",
    category: "Health",
    description: "Book outpatient registration at Civil Hospital Aizawl online.",
  },
  {
    name: "RTI Online",
    department: "Implemented by MSeGS",
    category: "Citizen Services",
    launched: "2022-07-01",
    description:
      "File RTI applications and appeals online and track replies. Mizoram was the eighth state to offer this. About 800 CSCs and rural kiosks help people without a device.",
  },
  // Established portals
  {
    name: "Mizoram State Portal",
    url: "https://mizoram.gov.in/",
    department: "Government of Mizoram",
    category: "Governance & Data",
    description: "Official gateway to state departments, schemes and services.",
  },
  {
    name: "DIPR press releases",
    url: "https://dipr.mizoram.gov.in/",
    department: "Information & Public Relations",
    category: "Governance & Data",
    description: "Official press releases, updated daily.",
  },
  {
    name: "e-Gazette",
    url: "https://egazette.mizoram.gov.in/",
    department: "Government of Mizoram",
    category: "Governance & Data",
    description: "Official gazette notifications, rules and appointments.",
  },
  {
    name: "MyGov Mizoram",
    url: "https://mizoram.mygov.in/",
    department: "Government of Mizoram",
    category: "Governance & Data",
    description: "Citizen engagement, consultations and campaigns.",
  },
  {
    name: "Finance Department",
    url: "https://finance.mizoram.gov.in/",
    department: "Finance Department",
    category: "Finance & Tax",
    description: "Budget documents, circulars and financial rules.",
  },
  {
    name: "Taxation e-services",
    url: "https://zotax.nic.in/",
    department: "Taxation Department",
    category: "Finance & Tax",
    description: "GST and state tax registration, returns and e-payment.",
  },
  {
    name: "Mizoram Legislative Assembly",
    url: "https://mizoramassembly.in/",
    department: "Legislative Assembly",
    category: "Governance & Data",
    description: "Budget speeches, debates, bills and assembly gazettes.",
  },
  {
    name: "MPSC Online",
    url: "https://mpsconline.mizoram.gov.in/",
    department: "Mizoram Public Service Commission",
    category: "Jobs & Education",
    description: "Apply online for MPSC recruitment.",
  },
  {
    name: "Mizoram Public Service Commission",
    url: "https://mpsc.mizoram.gov.in/",
    department: "Mizoram Public Service Commission",
    category: "Jobs & Education",
    description: "Advertisements, exam schedules and results.",
  },
  {
    name: "Employment Exchange (EmpEx)",
    url: "https://empex.mizoram.gov.in/",
    department: "LESDE Department",
    category: "Jobs & Education",
    description:
      "Online job-seeker registration, which replaced manual registration, and employment news.",
  },
  {
    name: "LESDE Department",
    url: "https://lesde.mizoram.gov.in/",
    department: "Labour, Employment, Skill Development & Entrepreneurship",
    category: "Jobs & Education",
    description: "Skills, job fairs, labour welfare and startup schemes.",
  },
  {
    name: "MBSE online portal",
    url: "https://mbse.edu.in/",
    department: "Mizoram Board of School Education",
    category: "Jobs & Education",
    launched: "2022-07",
    description: "HSLC and HSSLC results, registration and board notices.",
  },
  {
    name: "Mizoram Police",
    url: "https://police.mizoram.gov.in/",
    department: "Home Department",
    category: "Citizen Services",
    description: "Police services, notices and recruitment.",
  },
  {
    name: "Home Department",
    url: "https://home.mizoram.gov.in/",
    department: "Home Department",
    category: "Governance & Data",
    description: "Law and order, ILP rules and performance reports.",
  },
  {
    name: "Transport Department",
    url: "https://transport.mizoram.gov.in/",
    department: "Transport Department",
    category: "Citizen Services",
    description: "Vehicle registration, permits and transport notices.",
  },
  {
    name: "Department of ICT",
    url: "https://dict.mizoram.gov.in/",
    department: "Information & Communication Technology",
    category: "Governance & Data",
    description: "The state's e-governance programmes and IT policy.",
  },
  {
    name: "Mizoram State e-Governance Society",
    url: "https://msegs.mizoram.gov.in/",
    department: "Department of ICT",
    category: "Governance & Data",
    description:
      "Builds and runs many state portals, the State Data Centre and the payment gateway.",
  },
  {
    name: "Lok Bhavan Mizoram",
    url: "https://rajbhavan.mizoram.gov.in/",
    department: "Office of the Governor",
    category: "Governance & Data",
    description: "The Governor's official engagements and announcements.",
  },
  {
    name: "Aizawl District",
    url: "https://aizawl.nic.in/",
    department: "Deputy Commissioner, Aizawl",
    category: "Citizen Services",
    description: "District notices, certificates and local services.",
  },
  {
    name: "IGOD: all Mizoram websites",
    url: "https://igod.gov.in/sg/MZ/categories",
    department: "Government of India",
    category: "Governance & Data",
    description: "National directory listing every Mizoram government website.",
  },
];

export const recentLaunches = portals
  .filter((p) => p.launched && p.launched >= "2025")
  .sort((a, b) => (b.launched ?? "").localeCompare(a.launched ?? ""));

export const portalStats: Stat[] = [
  {
    label: "Online service portals",
    value: "20+",
    note: "Launched in two years, according to the Chief Minister (Feb 2026)",
  },
  {
    label: "Finance systems in one day",
    value: "4",
    note: "MIWAS, e-Sanction, e-Budget and 100% DBT, launched 15 Oct 2026",
  },
  {
    label: "Mizoram House bookings",
    value: "2,796",
    note: "Online applications in the first ten weeks; 1,640 allotted",
  },
  {
    label: "Portals listed here",
    value: String(portals.length),
    note: `${recentLaunches.length} of them launched since 2025`,
  },
];

export const portalSources: Source[] = [
  {
    label: "India Today NE: four digital finance systems (Oct 2026)",
    url: "https://www.indiatodayne.in/mizoram/story/mizoram-launches-four-digital-systems-to-strengthen-fiscal-transparency-1463616-2026-10-16",
  },
  {
    label: "NE Now: CM launches four digital financial management initiatives",
    url: "https://nenow.in/north-east-news/mizoram/mizoram-cm-lalduhoma-launches-four-digital-financial-management-initiatives.html",
  },
  {
    label: "UNI: upgraded online land tax payment system",
    url: "https://www.uniindia.com/mizoram-launches-upgraded-online-land-tax-payment-system/east/news/3859267.html",
  },
  {
    label: "India Today NE: online medical referral system",
    url: "https://www.indiatodayne.in/mizoram/story/mizoram-launches-online-medical-referral-system-for-out-of-state-treatment-1394957-2026-05-20",
  },
  {
    label: "The News Mill: quarters allotment and Mizoram House reservation",
    url: "https://thenewsmill.com/2026/05/mizoram-launches-online-system-for-government-quarters-allotment-and-house-reservation/",
  },
  {
    label: "Northeast Today: Registrar of Cooperative Societies goes digital",
    url: "https://northeasttoday.in/northeast/mizoram-launches-digital-platform-for-registrar-of-cooperative-societies/",
  },
  {
    label: "The Northeast Post: 20+ portals in two years",
    url: "https://www.thenortheastpost.com/2026/02/mizoram-cm-inaugurates-computerisation.html",
  },
  {
    label: "The News Mill: Mizoram CSR Connect",
    url: "https://thenewsmill.com/2026/01/mizoram-launches-csr-portal-to-link-corporates-with-development-projects/",
  },
  {
    label: "EastMojo: Mizo DiasporaHub",
    url: "https://eastmojo.com/mizoram/2025/07/22/mizoram-cm-launches-mizo-diasporahub-to-connect-global-mizo-communities/",
  },
  {
    label: "ThePrint: CM on digital governance (May 2025 conclave)",
    url: "https://theprint.in/india/mizoram-govt-making-efforts-to-enhance-digital-governance-cm/2628417/",
  },
  {
    label: "IGOD: Mizoram government websites",
    url: "https://igod.gov.in/sg/MZ/categories",
  },
];
