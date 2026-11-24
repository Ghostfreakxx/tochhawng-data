import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Agriculture Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Agriculture, allied activities, cash crops, rural livelihood, and
          market support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Agriculture Allocation"
            value="₹940 Cr"
            note="Agriculture and allied activities, 5.6% of expenditure, Budget 2026–27"
          />
          <DashboardCard
            title="Bana Kaih Scheme"
            value="₹350 Cr"
            note="Handholding programme for farmers, Budget 2026–27"
          />
          <DashboardCard
            title="Crop Procurement"
            value="₹150 Cr"
            note="Earmarked within Bana Kaih to buy designated key crops"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Agriculture Focus</h2>

          <p className="text-gray-400 leading-7">
            Agriculture was a headline priority in the 2026–27 budget. The
            Bana Kaih handholding scheme gets ₹350 crore, of which ₹150 crore
            is set aside for government procurement of key local crops at
            support prices. Policy is moving towards farmer support, assured
            procurement and better value chains for local produce.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            ["Ginger", "Major commercial crop"],
            ["Turmeric", "Supported local produce"],
            ["Mizo Chilli", "High value local crop"],
            ["Broom", "Important rural cash crop"],
          ].map(([title, note]) => (
            <div
              key={title}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="text-xl font-semibold text-green-400">{title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Market access and transport cost</p>
            <p>• Storage and processing facilities</p>
            <p>• Dependence on middlemen and price fluctuation</p>
            <p>• Need for value addition and export channels</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "PRS Legislative Research — Mizoram Budget Analysis 2026–27",
              url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
            },
            {
              label: "Outlook — Mizoram CM presents ₹17,469.91 crore Budget for 2026–27",
              url: "https://www.outlookindia.com/national/mizoram-cm-presents-rs-1746991-crore-budget-for-2026-27",
            },
          ]}
        />
      </div>
    </main>
  );
}
