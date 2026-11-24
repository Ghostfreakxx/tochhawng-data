import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import DataChart from "../components/DataChart";
import Sources from "../components/Sources";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Health Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Public health indicators, healthcare services, hospitals, and medical
          infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Health Budget"
            value="₹909 Cr"
            note="Health and Family Welfare, Budget 2026–27"
          />
          <DashboardCard
            title="MUHCS Families"
            value="3.22 Lakh"
            note="Families enrolled under MUHCS 2.0 (September 2026)"
          />
          <DashboardCard
            title="Infant Mortality"
            value="4"
            note="Deaths per 1,000 live births, among the lowest in India (SRS); national average 27"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Health Overview</h2>

          <p className="text-gray-400 leading-7">
            Mizoram&apos;s healthcare system is supported by public hospitals,
            district health facilities, community health centres, and the
            Mizoram Universal Health Care Scheme (MUHCS). MUHCS 2.0 was launched
            in March 2026, and more than 3.22 lakh families had enrolled by
            September 2026. By 24 August 2026, 31,832 patients had been treated
            under MUHCS 2.0, with ₹99.60 crore paid towards treatment bills.
            Under MUHCS 1.0 (2025–26), more than 1 lakh patients were treated
            and ₹171.57 crore was released. The 2026–27 budget sets aside ₹130
            crore for the scheme.
          </p>
        </div>

        <DataChart
          title="MUHCS Treatment Bills Paid (₹ Crore)"
          type="bar"
          unit="₹ Cr"
          data={[
            { year: "MUHCS 1.0 (2025–26)", value: 171.57 },
            { year: "MUHCS 2.0 (to Aug 2026)", value: 99.6 },
          ]}
          note="MUHCS 2.0 figure is partial: it covers the scheme up to 24 August 2026."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Major Healthcare Institutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Civil Hospital, Aizawl</p>
            <p>• Zoram Medical College</p>
            <p>• District Hospitals</p>
            <p>• Community Health Centres</p>
            <p>• Primary Health Centres</p>
            <p>• Sub-Centres and Rural Clinics</p>
            <p>• Blood Bank and Emergency Services</p>
            <p>• MRI, CT Scan and Diagnostic Facilities</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Health Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Healthcare access in remote areas</p>
            <p>• Specialist doctor shortages</p>
            <p>• Non-communicable diseases</p>
            <p>• Drug abuse and overdose deaths</p>
            <p>• Mental health awareness</p>
            <p>• Medical workforce development</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "The Pioneer — Over 3.2 lakh families enrolled under Mizoram's Universal Healthcare Scheme",
              url: "https://dailypioneer.com/news/over-32-lakh-families-enrolled-under-mizorams-universal",
            },
            {
              label: "India Today NE — Mizoram launches upgraded Universal Health Care Scheme",
              url: "https://www.indiatodayne.in/mizoram/story/mizoram-launches-upgraded-universal-health-care-scheme-with-stricter-emergency-norms-1360829-2026-03-17",
            },
            {
              label: "EastMojo — SRS Bulletin (May 2025): Mizoram, Manipur and Sikkim lowest infant mortality",
              url: "https://eastmojo.com/free-digest/2025/05/12/mizoram-manipur-and-sikkim-top-list-for-lowest-infant-mortality-in-india/",
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
