import DataChart from "../components/DataChart";

export default function CrimePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Crime Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Crime, drugs, cybercrime, and public safety indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Main Concern
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Drugs
            </p>

            <p className="text-gray-500 mt-2">
              Narcotics and trafficking concerns
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Cybercrime
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Rising
            </p>

            <p className="text-gray-500 mt-2">
              Digital fraud and online scams
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Police Budget
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹726 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Police and internal security allocation
            </p>
          </div>

        </div>

        <DataChart
          title="Cybercrime Trend"
          data={[
            { year: "2020", value: 120 },
            { year: "2021", value: 180 },
            { year: "2022", value: 260 },
            { year: "2023", value: 210 },
            { year: "2024", value: 320 },
          ]}
        />

      </div>
    </main>
  );
}