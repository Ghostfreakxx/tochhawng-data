import DataChart from "../components/DataChart";

export default function ElectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Elections Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Voter turnout, constituencies, and election trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Assembly Seats
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              40
            </p>

            <p className="text-gray-500 mt-2">
              Mizoram Legislative Assembly
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Voter Turnout
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              80%
            </p>

            <p className="text-gray-500 mt-2">
              Estimated recent participation
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Main Focus
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Turnout
            </p>

            <p className="text-gray-500 mt-2">
              Electoral participation and trends
            </p>
          </div>

        </div>

        <DataChart
          title="Voter Turnout Trend"
          data={[
            { year: "2008", value: 75 },
            { year: "2013", value: 81 },
            { year: "2018", value: 80 },
            { year: "2023", value: 84 },
          ]}
        />

      </div>
    </main>
  );
}