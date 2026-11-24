import Link from "next/link";
import DataChart from "../components/DataChart";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function PopulationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Population Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Population, demographics, districts, urbanisation, and social
          indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Population"
            value="12.64 Lakh"
            note="Projected for 1 July 2025 (Census 2011: 10.97 lakh)"
          />
          <DashboardCard
            title="Districts"
            value="11"
            note="Administrative districts"
          />
          <DashboardCard
            title="Urban Population"
            value="52.1%"
            note="Share living in urban areas, Census 2011"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Population Overview</h2>

          <p className="text-gray-400 leading-7">
            Mizoram is one of India&apos;s least populated states, but it is
            among the most urbanised and literate. The last census (2011)
            counted 10.97 lakh people. Official projections put the population
            at about 12.64 lakh in 2025. New census figures will replace these
            projections once the next Census of India is published.
          </p>
        </div>

        <DataChart
          title="Population (Lakh)"
          unit="lakh"
          data={[
            { year: "2001", value: 8.89 },
            { year: "2011", value: 10.97 },
            { year: "2025", value: 12.64 },
          ]}
          note="2001 and 2011: Census of India. 2025: projection from the Technical Group on Population Projections."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Demographic Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• High literacy population</p>
            <p>• Predominantly urbanising society</p>
            <p>• Young and educated workforce</p>
            <p>• Strong community-based social structure</p>
            <p>• Growing migration toward Aizawl</p>
            <p>• Increasing demand for housing and services</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Urban congestion in Aizawl</p>
            <p>• Employment opportunities for youth</p>
            <p>• Rural to urban migration</p>
            <p>• Infrastructure demand</p>
            <p>• Housing affordability</p>
            <p>• Balanced regional development</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            { label: "Census of India 2001 and 2011" },
            {
              label: "Technical Group on Population Projections (National Commission on Population), via Statistics Times",
              url: "https://www.statisticstimes.com/demographics/india/mizoram-population.php",
            },
          ]}
        />
      </div>
    </main>
  );
}
