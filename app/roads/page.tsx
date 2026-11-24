import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import DataChart from "../components/DataChart";
import Sources from "../components/Sources";

export default function RoadsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Roads Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Roads, highways, connectivity, public works, and transport
          infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Road Density"
            value="46.37 km"
            note="per 100 sq km, against a national average of about 116 (2025)"
          />
          <DashboardCard
            title="PMGSY-IV Roads"
            value="₹710 Cr"
            note="45 rural road projects covering 500+ km, sanctioned by the Centre for 2026–27"
          />
          <DashboardCard
            title="Road Maintenance"
            value="₹183 Cr"
            note="Total state road maintenance allocation, Budget 2026–27"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Infrastructure Overview</h2>

          <p className="text-gray-400 leading-7">
            Mizoram&apos;s road density is less than half the national average,
            according to the Chief Minister in June 2025. Roads and bridges
            receive about 2% of state expenditure in 2026–27, so most new
            road building is funded by the Centre. In 2026 the Centre
            sanctioned 45 projects under PMGSY-IV and ₹256.7 crore for six
            roads through the Ministry of Road Transport and Highways.
            Mountainous terrain, heavy rainfall and landslides keep
            construction and maintenance costs high.
          </p>
        </div>

        <DataChart
          title="Central Road Sanctions, 2026 (₹ Crore)"
          type="bar"
          unit="₹ Cr"
          data={[
            { year: "PMGSY-IV (45 roads)", value: 710 },
            { year: "MoRTH (6 roads)", value: 256.7 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Major Road Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• National Highway Connectivity</p>
            <p>• Kaladan Multi-Modal Corridor Linkages</p>
            <p>• PMGSY-IV Rural Roads</p>
            <p>• District Road Upgradation</p>
            <p>• Border Area Connectivity</p>
            <p>• Urban Road Improvement Projects</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Landslides and erosion</p>
            <p>• High construction costs</p>
            <p>• Difficult terrain</p>
            <p>• Maintenance funding requirements</p>
            <p>• Rural accessibility gaps</p>
            <p>• Weather-related disruptions</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "EastMojo — Mizoram's road density lags national average: CM Lalduhoma",
              url: "https://eastmojo.com/free-digest/2025/06/20/mizorams-road-density-lags-national-average-cm-lalduhoma/",
            },
            {
              label: "All India Radio — Centre approves 45 road projects worth ₹710 crore under PMGSY-IV",
              url: "https://newsonair.gov.in/centre-approves-45-road-projects-worth-%e2%82%b9710-crore-in-mizoram-under-pmgsy-iv/",
            },
            {
              label: "All India Radio — Nitin Gadkari approves ₹256.7 crore for six roads in Mizoram",
              url: "https://newsonair.gov.in/union-minister-nitin-gadkari-approves-256-7-crore-rupees-for-construction-of-six-roads-in-mizoram/",
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
