import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function RuralPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Rural Development Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Rural development, rural employment, livelihood support, village
          infrastructure, and government spending.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Rural Development Budget"
            value="₹1,322 Cr"
            note="7.9% of state expenditure, Budget 2026–27"
          />
          <DashboardCard
            title="PMGSY-IV Rural Roads"
            value="45 roads"
            note="500+ km worth ₹710 Cr sanctioned for 2026–27"
          />
          <DashboardCard
            title="Bana Kaih"
            value="₹350 Cr"
            note="Farmer handholding and livelihood scheme, Budget 2026–27"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Rural Development Overview</h2>

          <p className="text-gray-400 leading-7">
            Rural development is the second-largest area of state spending in
            2026–27 after education. A large share of the population relies
            on village livelihoods, agriculture-linked activities and public
            employment programmes. Rural wage employment under MGNREGS has
            declined across India: the average fell to 43 days per household
            in 2025–26, the lowest in a decade.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Rural Development Priorities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Rural wage employment (MGNREGS)</p>
            <p>• Village infrastructure development</p>
            <p>• Rural livelihood support</p>
            <p>• Community assets creation</p>
            <p>• Rural road connectivity (PMGSY)</p>
            <p>• Strengthening village-level development works</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Timely release of funds</p>
            <p>• Sustainable rural employment</p>
            <p>• Maintenance of community assets</p>
            <p>• Migration from villages to towns</p>
            <p>• Monitoring and transparency</p>
            <p>• Balancing rural development across districts</p>
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
              label: "All India Radio — Centre approves 45 road projects worth ₹710 crore under PMGSY-IV",
              url: "https://newsonair.gov.in/centre-approves-45-road-projects-worth-%e2%82%b9710-crore-in-mizoram-under-pmgsy-iv/",
            },
            {
              label: "Deccan Chronicle — MGNREGS workdays hit decade low of 43 in FY26",
              url: "https://www.deccanchronicle.com/nation/mgnregs-workdays-hit-decade-low-of-43-in-fy26-govt-1974715",
            },
          ]}
        />
      </div>
    </main>
  );
}
