import DataChart from "../components/DataChart";

export default function PopulationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">← Back to Overview</a>
        <h1 className="text-5xl font-bold mt-6 mb-4">Mizoram Population Dashboard</h1>
        <p className="text-gray-400 mb-10">Population, districts, density, and demographic indicators.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Population", "12.5 lakh", "Estimated population"],
            ["Districts", "11", "Administrative districts"],
            ["Urban Growth", "52%", "People living in urban areas"],
          ].map(([title, value, note]) => (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6" key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-4xl font-bold mt-4 text-green-400">{value}</p>
              <p className="text-gray-500 mt-2">{note}</p>
            </div>
          ))}
        </div>
      </div>
    <DataChart
  title="Population Growth Trend"
  data={[
    { year: "2001", value: 8.9 },
    { year: "2011", value: 10.9 },
    { year: "2024", value: 12.5 },
  ]}
/>
</main>
  );
}