export const lastUpdated = "22 October 2026";

export type Section = {
  name: string;
  shortName: string;
  href: string;
  description: string;
};

export const sections: Section[] = [
  {
    name: "Jobs & Employment",
    shortName: "Jobs",
    href: "/employment",
    description:
      "Government recruitment tracker, employment exchange register, job fairs and livelihood schemes.",
  },
  {
    name: "Government Portals",
    shortName: "Portals",
    href: "/portals",
    description:
      "Every new Mizoram government website and online service, with launch dates and links.",
  },
  {
    name: "Budget & Finance",
    shortName: "Budget",
    href: "/budget",
    description:
      "Budget 2026–27, sector allocations, capital spending and the state's fiscal position.",
  },
  {
    name: "Health",
    shortName: "Health",
    href: "/health",
    description:
      "MUHCS 2.0 enrolment, treatment spending, medical referrals and health infrastructure.",
  },
  {
    name: "Education",
    shortName: "Education",
    href: "/education",
    description:
      "Literacy, HSLC and HSSLC results, education spending and institutions.",
  },
  {
    name: "Agriculture",
    shortName: "Agriculture",
    href: "/agriculture",
    description:
      "Bana Kaih handholding scheme, crop procurement and agriculture allocations.",
  },
  {
    name: "Rural Development",
    shortName: "Rural",
    href: "/rural",
    description:
      "VB-G RAM G rural jobs guarantee, the MGNREGS transition and village infrastructure.",
  },
  {
    name: "Roads & Connectivity",
    shortName: "Roads",
    href: "/roads",
    description:
      "Roads and bridges budget, road maintenance, rail connectivity and key projects.",
  },
  {
    name: "Population",
    shortName: "Population",
    href: "/population",
    description:
      "Census figures, growth, urbanisation and the Census 2027 round.",
  },
  {
    name: "Elections",
    shortName: "Elections",
    href: "/elections",
    description:
      "Assembly, Lok Sabha and Aizawl Municipal Corporation results and turnout.",
  },
  {
    name: "Crime & Public Safety",
    shortName: "Crime",
    href: "/crime",
    description:
      "Drug seizures, cybercrime, arms recoveries and police spending.",
  },
];
