const stats = [
  { title: "Population", value: "12.5 lakh", note: "Estimated Mizoram population" },
  { title: "Literacy Rate", value: "91.3%", note: "One of India’s highest" },
  { title: "State Budget", value: "₹14,412 Cr", note: "Annual state budget figure" },
  { title: "Capital", value: "Aizawl", note: "Administrative centre" },
  { title: "Districts", value: "11", note: "Administrative districts" },
  { title: "Focus", value: "Governance", note: "Budget, society, economy" },
];

const sections = [
  "Budget & Finance",
  "Population",
  "Education",
  "Health",
  "Roads & Infrastructure",
  "Employment",
  "Agriculture",
  "Elections",
  "Crime & Drugs",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-20">
        <h1 className="text-xl font-bold tracking-wide">Tochhawng Data</h1>
        <p className="text-sm text-gray-400">Mizoram Through Numbers</p>
      </nav>

      <section className="max-w-7xl mx-auto mb-16">
        <p className="text-sm text-gray-400 mb-4">Public data dashboard for Mizoram</p>

        <h2 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Understanding Mizoram through data, budget, and governance.
        </h2>

        <p className="text-gray-400 max-w-2xl mt-6 text-lg">
          Tochhawng Data collects public information and turns it into simple
          visual summaries for citizens, students, researchers, and policy watchers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h3 className="text-4xl font-bold mt-3">{item.value}</h3>
            <p className="text-gray-500 mt-3 text-sm">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Data Sections</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <div
              key={section}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="font-semibold">{section}</h3>
              <a
  href="/budget"
  className="text-green-400 text-sm mt-2 inline-block hover:text-green-300"
>
  Open Dashboard →
</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto border-t border-zinc-800 pt-6 text-sm text-gray-500">
        Data sources will include government budget documents, census data, RBI reports,
        NCRB reports, election data, and official Mizoram department publications.
      </footer>
    </main>
  );
}