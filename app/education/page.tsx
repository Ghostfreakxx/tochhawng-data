import Link from "next/link";
import DataChart from "../components/DataChart";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Education Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Literacy, schools, colleges, universities, and educational development
          indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Literacy Rate"
            value="98.2%"
            note="India's first fully literate state, declared May 2025"
          />
          <DashboardCard
            title="HSSLC 2026 (Class 12)"
            value="87.67%"
            note="10,734 of 12,243 candidates passed"
          />
          <DashboardCard
            title="HSLC 2026 (Class 10)"
            value="80.31%"
            note="Mizoram Board of School Education pass rate"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Education Overview</h2>

          <p className="text-gray-400 leading-7">
            On 20 May 2025 Mizoram became the first state to be declared fully
            literate under the ULLAS programme, with a literacy rate of 98.2%
            (PLFS 2023–24). The Ministry of Education treats 95% as the
            threshold for full literacy. The 2026–27 budget allocates ₹2,283
            crore to education, 13.7% of total expenditure and the largest
            sector, including ₹584 crore for Samagra Shiksha.
          </p>
        </div>

        <DataChart
          title="Literacy Rate (%)"
          unit="%"
          data={[
            { year: "2001", value: 88.8 },
            { year: "2011", value: 91.33 },
            { year: "2023–24", value: 98.2 },
          ]}
          note="2001 and 2011: Census of India. 2023–24: PLFS, as used for the 2025 full-literacy declaration."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Major Institutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Mizoram University (MZU)</p>
            <p>• ICFAI University Mizoram</p>
            <p>• Pachhunga University College (PUC)</p>
            <p>• Government Colleges across districts</p>
            <p>• Technical and Vocational Institutions</p>
            <p>• Teacher Education and Training Centres</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Graduate unemployment</p>
            <p>• Rural school infrastructure gaps</p>
            <p>• Digital learning access</p>
            <p>• Skill development and employability</p>
            <p>• Research and innovation capacity</p>
            <p>• Competitive examination preparation support</p>
          </div>
        </div>

        <Sources
          updated="November 2026"
          sources={[
            {
              label: "Ministry of Education (PIB) — Mizoram declared fully literate state",
              url: "https://dsel.education.gov.in/sites/default/files/update/PIB2130080.pdf",
            },
            {
              label: "Free Press Journal — MBSE HSSLC Result 2026: 87.67% pass",
              url: "https://www.freepressjournal.in/education/mbse-hsslc-result-2026-declared-overall-pass-percentage-stands-at-8767",
            },
            {
              label: "India Today NE — Mizoram board Class 10 results: 80.31% pass",
              url: "https://www.indiatodayne.in/amp/mizoram/story/mizoram-board-declares-class-10-results-pass-percentage-rises-to-8031-1380211-2026-04-23",
            },
            { label: "Census of India 2001 and 2011" },
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
