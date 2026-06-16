const stats = [
  {
    title: "Population",
    value: "12.5 Lakh",
    note: "Estimated population of Mizoram",
  },
  {
    title: "Literacy Rate",
    value: "91.3%",
    note: "Among the highest in India",
  },
  {
    title: "State Budget",
    value: "₹14,412 Cr",
    note: "Budget Estimate 2024–25",
  },
  {
    title: "Capital",
    value: "Aizawl",
    note: "Administrative centre of Mizoram",
  },
  {
    title: "Districts",
    value: "11",
    note: "Administrative districts",
  },
  {
    title: "Focus",
    value: "Governance",
    note: "Data, development, and public policy",
  },
{
  name: "Rural Development",
  href: "/rural",
  description: "MGNREGS, village infrastructure, livelihood, and rural development.",
},
];

const sections = [
  {
    name: "Budget & Finance",
    href: "/budget",
    description: "Government expenditure, allocations, and public finance.",
  },
  {
    name: "Population",
    href: "/population",
    description: "Population growth, demographics, and urbanisation.",
  },
  {
    name: "Education",
    href: "/education",
    description: "Literacy, institutions, and educational development.",
  },
  {
    name: "Health",
    href: "/health",
    description: "Healthcare services, hospitals, and public health.",
  },
  {
    name: "Roads & Infrastructure",
    href: "/roads",
    description: "Connectivity, highways, and infrastructure projects.",
  },
  {
    name: "Employment",
    href: "/employment",
    description: "Jobs, labour market, and livelihood indicators.",
  },
  {
    name: "Agriculture",
    href: "/agriculture",
    description: "Farming, crops, rural economy, and agricultural support.",
  },
  {
    name: "Elections",
    href: "/elections",
    description: "Democracy, participation, and electoral statistics.",
  },
  {
    name: "Crime & Public Safety",
    href: "/crime",
    description: "Crime trends, cybercrime, and public safety indicators.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">

      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-20">
        <h1 className="text-xl font-bold tracking-wide">
          Tochhawng Data
        </h1>

        <p className="text-sm text-gray-400">
          Mizoram Through Numbers
        </p>
      </nav>

      <section className="max-w-7xl mx-auto mb-16">
        <p className="text-sm text-gray-400 mb-4">
          Public Data Dashboard for Mizoram
        </p>

        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          Understanding Mizoram through data, governance, development, and public policy.
        </h2>

        <p className="text-gray-400 max-w-3xl mt-6 text-lg">
          Tochhawng Data presents publicly available information in a simple and
          accessible format for students, researchers, policymakers, journalists,
          and citizens interested in Mizoram.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition"
          >
            <p className="text-gray-400 text-sm">
              {item.title}
            </p>

            <h3 className="text-4xl font-bold mt-3 text-green-400">
              {item.value}
            </h3>

            <p className="text-gray-500 mt-3 text-sm">
              {item.note}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Dashboard Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div
              key={section.name}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg">
                {section.name}
              </h3>

              <p className="text-gray-500 text-sm mt-3 mb-4">
                {section.description}
              </p>

              <a
                href={section.href}
                className="text-green-400 text-sm hover:text-green-300"
              >
                Open Dashboard →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            About Tochhawng Data
          </h2>

          <p className="text-gray-400 leading-7">
            This project aims to improve public understanding of Mizoram through
            accessible data visualisation and policy-focused dashboards. The
            platform covers governance, development, demographics, education,
            health, infrastructure, public finance, employment, agriculture,
            elections, and public safety.
          </p>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto border-t border-zinc-800 pt-6 text-sm text-gray-500">
        Sources include Mizoram Budget Documents, Census of India,
        Election Commission of India, Government of Mizoram publications,
        RBI reports, NCRB reports, Economic Survey reports, and departmental data.
      </footer>

    </main>
  );
}