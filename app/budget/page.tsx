import Link from "next/link";
import DataChart from "../components/DataChart";
import DashboardCard from "../components/DashboardCard";
import Sources from "../components/Sources";

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </Link>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Budget Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          State finances, departmental allocations, development priorities, and
          public expenditure — Budget Estimates 2026–27.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Budget"
            value="₹17,077 Cr"
            note="Total expenditure 2026–27 incl. ₹392 Cr debt repayment (₹16,684 Cr excluding it)"
          />
          <DashboardCard
            title="Total Receipts"
            value="₹17,470 Cr"
            note="Projected receipts 2026–27, no new taxes proposed"
          />
          <DashboardCard
            title="Fiscal Deficit"
            value="3.8%"
            note="of GSDP (₹1,669 Cr) targeted for 2026–27"
          />
          <DashboardCard
            title="Education"
            value="₹2,283 Cr"
            note="13.7% of expenditure — the largest sector"
          />
          <DashboardCard
            title="Agriculture"
            value="₹940 Cr"
            note="Agriculture and allied activities, incl. ₹350 Cr Bana Kaih"
          />
          <DashboardCard
            title="Health"
            value="₹909 Cr"
            note="Health and Family Welfare, incl. ₹130 Cr for MUHCS"
          />
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Budget Overview</h2>

          <p className="text-gray-400 leading-7">
            Chief Minister Lalduhoma presented the 2026–27 budget in February
            2026 with no new taxes. Total expenditure excluding debt repayment
            is estimated at ₹16,684 crore, roughly the same as the 2025–26
            revised estimate of ₹16,708 crore. Receipts other than borrowings
            are estimated at ₹15,015 crore, so the state remains heavily
            dependent on transfers from the Union Government. The main focus
            areas are farmers (through the Bana Kaih handholding scheme), the
            Mizoram Universal Health Care Scheme, connectivity, and the
            anti-narcotics drive.
          </p>
        </div>

        <DataChart
          title="Sector Allocation 2026–27 (₹ Crore)"
          type="bar"
          unit="₹ Cr"
          data={[
            { year: "Education", value: 2283 },
            { year: "Rural Dev.", value: 1322 },
            { year: "Agriculture", value: 940 },
            { year: "Health", value: 909 },
            { year: "Police", value: 781 },
          ]}
          note="Budget Estimates 2026–27. Roads and bridges get about 2% of expenditure."
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Key 2026–27 Announcements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Bana Kaih handholding scheme: ₹350 Cr (₹150 Cr for crop procurement)</p>
            <p>• Mizoram Universal Health Care Scheme: ₹130 Cr for treatment bills</p>
            <p>• Road maintenance: ₹183.25 Cr in total</p>
            <p>• Capital outlay: ₹2,588 Cr</p>
            <p>• New &quot;Anti-Narcotics Activities&quot; budget head under Excise</p>
            <p>• No new taxes</p>
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
              label: "Mizoram Budget Speech 2026–27, Mizoram Legislative Assembly",
              url: "https://www.mizoramassembly.in/storage/budget-speeches/February2026/BS-01KJCAQ2SZ2441Q8D8M4FNHX63.pdf",
            },
            {
              label: "India Today NE — Mizoram CM tables ₹17,470 crore Budget for 2026–27",
              url: "https://www.indiatodayne.in/mizoram/story/mizoram-cm-tables-rs-17470-crore-budget-for-2026-27-focus-on-social-infrastructure-and-agriculture-1352041-2026-02-26",
            },
          ]}
        />
      </div>
    </main>
  );
}
