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
          State finances, departmental allocations, development priorities, and public expenditure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Total Budget
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹14,412 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Budget Estimate 2024–25
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Education Sector
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹2,374 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Largest social sector allocation
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Health Sector
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹840 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Health and Family Welfare
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Agriculture
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹727 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Agriculture and allied activities
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Police & Security
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹726 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Internal security and policing
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Roads & Bridges
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹645 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Transport infrastructure
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Budget Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram's budget prioritizes education, healthcare,
            infrastructure, agriculture, rural development, and public
            administration. The state remains significantly dependent on
            transfers from the Union Government while gradually expanding
            investment in development and social welfare programmes.
          </p>
        </div>

        <DataChart
          title="Major Department Allocation (₹ Crore)"
          data={[
            { year: "Education", value: 2374 },
            { year: "Health", value: 840 },
            { year: "Agriculture", value: 727 },
            { year: "Police", value: 726 },
            { year: "Roads", value: 645 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Budget Priorities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Education and human resource development</p>
            <p>• Healthcare and public welfare</p>
            <p>• Rural livelihood and agriculture</p>
            <p>• Roads, bridges, and connectivity</p>
            <p>• Public administration and governance</p>
            <p>• Internal security and law enforcement</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Mizoram Budget Documents, Finance Department Mizoram,
          PRS Legislative Research.
        </p>
      </div>
    </main>
  );
}