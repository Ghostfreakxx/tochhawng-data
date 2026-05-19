import DataChart from "../components/DataChart";

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Budget Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Public finance overview of Mizoram government departments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Total Budget</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹14,412 Cr</p>
            <p className="text-gray-500 mt-2">Mizoram Budget 2024–25</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹2,374 Cr</p>
            <p className="text-gray-500 mt-2">Education, Sports, Arts and Culture</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Health</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹840 Cr</p>
            <p className="text-gray-500 mt-2">Health and Family Welfare</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Agriculture</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹727 Cr</p>
            <p className="text-gray-500 mt-2">Agriculture and allied sector</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Police</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹726 Cr</p>
            <p className="text-gray-500 mt-2">Police and internal security</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Roads & Bridges</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹645 Cr</p>
            <p className="text-gray-500 mt-2">Road infrastructure</p>
          </div>
        </div>

        <DataChart
          title="Selected Department Budget Allocation"
          data={[
            { year: "Education", value: 2374 },
            { year: "Health", value: 840 },
            { year: "Agriculture", value: 727 },
            { year: "Police", value: 726 },
            { year: "Roads", value: 645 },
          ]}
        />
      </div>
    </main>
  );
}