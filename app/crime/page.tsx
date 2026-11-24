import Link from "next/link";
import DataChart from "../components/DataChart";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function CrimePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Crime Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Crime, drugs, cybercrime, border security, and public safety
          indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Drugs Seized (2026)"
            value="₹846 Cr"
            note="January–August 2026; 930 people arrested, 111 of them foreign nationals"
          />
          <DashboardCard
            title="Cybercrime Cases"
            value="50"
            note="Registered in 2024 (NCRB), up from 31 in 2023"
          />
          <DashboardCard
            title="Police Budget"
            value="₹781 Cr"
            note="Police allocation, Budget 2026–27"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Public Safety Overview</h2>

          <p className="text-gray-400 leading-7">
            Narcotics trafficking across the Myanmar border is Mizoram&apos;s
            biggest public safety challenge. Between January and August 2026,
            security forces seized drugs worth over ₹846 crore and arrested 930
            people, and 45 people died from drug use. NCRB&apos;s Crime in India
            2024 ranked Mizoram fifth in the country for drug overdose deaths
            (65). Under Operation Jericho, drugs worth about ₹317 crore were
            seized between September 2025 and March 2026. Recorded cybercrime
            is still low but rising.
          </p>
        </div>

        <DataChart
          title="Registered Cybercrime Cases (NCRB)"
          type="bar"
          unit="cases"
          data={[
            { year: "2022", value: 1 },
            { year: "2023", value: 31 },
            { year: "2024", value: 50 },
          ]}
          note="National Crime Records Bureau, Crime in India. NCRB data for 2025 has not yet been published."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Crime Concerns</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Drug trafficking and narcotics movement</p>
            <p>• Online financial scams and phishing</p>
            <p>• Cross-border smuggling networks</p>
            <p>• Youth vulnerability and addiction risks</p>
            <p>• Identity theft and digital fraud</p>
            <p>• Need for cyber hygiene awareness</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Home Department Highlights (2023–2025)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Drug Cases Registered: 517</p>
            <p>• Drug Arrests: 573</p>
            <p>• Drug Seizure Value: ₹318.19 Crore</p>
            <p>• Illegal Weapons Seized: 54</p>
            <p>• Ammunition Recovered: 28,005</p>
            <p>• Arms Related Cases: 46</p>
            <p>• Forensic Samples Tested: 15,662</p>
            <p>• Fingerprints Recorded: 10,265</p>
            <p>• Fire Service Modernisation: ₹40 Crore</p>
            <p>• Jail Infrastructure Investment: ₹55 Crore</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "Morung Express — Mizoram: drugs worth over ₹846 crore seized, 930 arrested in eight months",
              url: "https://morungexpress.com/mizoram-drugs-worth-over-rs-846-crore-seized-930-arrested-in-eight-months",
            },
            {
              label: "All India Radio — Operation Jericho nets drugs worth ₹317.30 crore",
              url: "https://www.newsonair.gov.in/operation-jericho-nets-drugs-worth-%e2%82%b9317-30-crore-in-mizoram-says-home-minister",
            },
            {
              label: "NCRB Crime in India 2022–2024 (via Morung Express)",
              url: "https://morungexpress.com/sharp-rise-in-nagaland-cyber-crime-cases-state-tally-remains-low",
            },
            {
              label: "PIB — Crime in India 2023 cybercrime data",
              url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2241336",
            },
            { label: "Mizoram Home Department performance report (2023–2025)" },
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
