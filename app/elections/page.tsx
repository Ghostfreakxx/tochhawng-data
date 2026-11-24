import Link from "next/link";
import DataChart from "../components/DataChart";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function ElectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Elections Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Elections, voter participation, representation, and democratic
          trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Assembly Seats"
            value="40"
            note="Mizoram Legislative Assembly constituencies"
          />
          <DashboardCard
            title="2023 Assembly Turnout"
            value="80.66%"
            note="Assembly election, November 2023"
          />
          <DashboardCard
            title="2024 Lok Sabha Turnout"
            value="56.87%"
            note="487,013 votes cast; the state has 1 Lok Sabha and 1 Rajya Sabha seat"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Election Overview</h2>

          <p className="text-gray-400 leading-7">
            Mizoram consistently records high turnout in Assembly elections:
            above 80% in each of the last four. Turnout in national elections
            is much lower. In the 2024 Lok Sabha election only 56.87% voted,
            down from the 2019 election. Elections in the state are known for
            strong civic engagement and peaceful transfers of power.
          </p>
        </div>

        <DataChart
          title="Assembly Election Voter Turnout (%)"
          unit="%"
          data={[
            { year: "2008", value: 80.02 },
            { year: "2013", value: 83.41 },
            { year: "2018", value: 81.61 },
            { year: "2023", value: 80.66 },
          ]}
          note="Final turnout figures. Some reports give 82.35% for 2008, but that does not match the ECI vote totals (489,420 votes of 611,618 electors = 80.02%)."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Electoral Institutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Election Commission of India</p>
            <p>• Chief Electoral Officer, Mizoram</p>
            <p>• State Legislative Assembly</p>
            <p>• Parliamentary Constituency Administration</p>
            <p>• Polling Stations and Electoral Rolls</p>
            <p>• Voter Awareness Programmes</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "Election Commission of India — Mizoram 2023 statistical report",
              url: "https://www.eci.gov.in/eci-backend/public/all_files/full-statistical-reports/mizoram/2023/Highlight.pdf",
            },
            {
              label: "India Today NE — Mizoram records 56.87% turnout in 2024 Lok Sabha election",
              url: "https://www.indiatodayne.in/elections/story/mizoram-records-5687-per-cent-voter-turnout-in-2024-lok-sabha-election-tuichawng-leads-with-7248-per-cent-985406-2024-04-21",
            },
            {
              label: "2008, 2013 and 2018 results (ECI figures, via Wikipedia)",
              url: "https://en.wikipedia.org/wiki/2008_Mizoram_Legislative_Assembly_election",
            },
          ]}
        />
      </div>
    </main>
  );
}
