import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function EmploymentPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Employment Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Employment, labour force, government recruitment, entrepreneurship,
          and livelihood trends.
        </p>

        <Link
          href="/jobs"
          className="block bg-green-950/40 border border-green-800 rounded-2xl p-6 mb-10 hover:border-green-500 transition"
        >
          <p className="text-green-400 text-sm font-semibold">Looking for a job?</p>
          <p className="text-2xl font-bold mt-1">Open the Mizoram Jobs Portal →</p>
          <p className="text-gray-400 mt-2">
            Current government vacancies with last dates, plus links to MPSC,
            NCS, SSC and other official recruitment sites.
          </p>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Job Preference"
            value="Government"
            note="Strong demand for secure public sector employment"
          />
          <DashboardCard
            title="Rural Development"
            value="₹1,322 Cr"
            note="Budget 2026–27, including rural employment programmes"
          />
          <DashboardCard
            title="Bana Kaih"
            value="₹350 Cr"
            note="Livelihood support for farmers, Budget 2026–27"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Employment Overview</h2>

          <p className="text-gray-400 leading-7">
            Employment remains one of the most important socio-economic issues
            in Mizoram. Government jobs continue to attract large numbers of
            applicants, while the private sector, entrepreneurship, tourism,
            agriculture and small businesses are increasingly important sources
            of livelihood. State-level unemployment rates are published in
            MoSPI&apos;s Periodic Labour Force Survey (PLFS). All-India
            unemployment for people aged 15 and above was 3.2% in 2023–24.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Major Employment Sources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Government Services</p>
            <p>• Education Sector</p>
            <p>• Healthcare Services</p>
            <p>• Agriculture and Allied Activities</p>
            <p>• Small Businesses and Trade</p>
            <p>• Tourism and Hospitality</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Graduate unemployment</p>
            <p>• Limited private sector opportunities</p>
            <p>• Skills mismatch in the labour market</p>
            <p>• Rural employment diversification</p>
            <p>• Migration for higher-paying jobs</p>
            <p>• Startup financing and business support</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "MoSPI — PLFS Annual Report 2023–24",
              url: "https://mospi.gov.in/sites/default/files/publication_reports/AnnualReport_PLFS2023-24L.pdf",
            },
            {
              label: "PRS Legislative Research — Mizoram Budget Analysis 2026–27",
              url: "https://prsindia.org/budgets/states/mizoram-budget-analysis-2026-27",
            },
          ]}
        />
      </div>
    </main>
  );
}
