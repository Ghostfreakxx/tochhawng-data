import DataChart from "../components/DataChart";

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Budget Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          State finances, departmental allocations, development priorities, and public expenditure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Total Budget
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹17,469.91 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Total receipts, Budget Estimate 2026–27
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Total Expenditure
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹17,076.92 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Budget Estimate 2026–27
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Capital Expenditure
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹2,982.44 Cr
            </p>

            <p className="text-gray-500 mt-2">
              +12.18% over 2025–26
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Revenue Expenditure
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹14,094.47 Cr
            </p>

            <p className="text-gray-500 mt-2">
              +13.18% over 2025–26
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Fiscal Deficit
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              3.8% of GSDP
            </p>

            <p className="text-gray-500 mt-2">
              ₹1,669 Cr — down from 7.6% (RE 2025–26)
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Revenue Balance
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Surplus 2.1% of GSDP
            </p>

            <p className="text-gray-500 mt-2">
              ₹900 Cr — vs a deficit in RE 2025–26
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Gross State Domestic Product
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹43,817 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Projected 2026–27, 11% growth
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Central Tax Devolution
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹8,608.08 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Share of Union tax transfers, 2026–27
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Budget Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Chief Minister Lalduhoma, who also holds the Finance portfolio,
            presented a ₹17,469.91 crore budget for 2026–27 — his third
            since the Zoram People's Movement (ZPM) took office in December
            2023 — with no new taxes proposed. The budget prioritizes
            agriculture, healthcare, an anti-narcotics drive, social
            infrastructure, and connectivity, while continuing Mizoram's
            reliance on transfers from the Union Government alongside a
            planned improvement in the state's fiscal position: the fiscal
            deficit is targeted to narrow to 3.8% of GSDP from 7.6% in the
            2025–26 revised estimate, with the state moving back to a
            revenue surplus.
          </p>
        </div>

        <DataChart
          title="Total Budget Outlay, 3-Year Trend (₹ Crore)"
          data={[
            { year: "2024–25 (BE)", value: 14412 },
            { year: "2025–26 (BE)", value: 15198 },
            { year: "2026–27 (BE)", value: 17469.91 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Sector-wise Expenditure Share, 2026–27
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Share of total expenditure, as estimated by PRS Legislative
            Research from the budget documents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-400">
            <p>• Rural Development — 7.9% (≈ ₹1,318 Cr)</p>
            <p>• Police — 4.7% (≈ ₹784 Cr)</p>
            <p>• Roads & Bridges — 2.0% (≈ ₹334 Cr)</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Scheme Allocations, 2026–27
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Bana Kaih farmer support scheme — ₹350 Cr</p>
            <p>• Procurement of designated key crops — ₹150 Cr</p>
            <p>• Mizoram Universal Health Care Scheme (bill settlement) — ₹130 Cr</p>
            <p>• Road maintenance and connectivity — ₹183.25 Cr</p>
            <p>• MLA Local Area Development Fund (40 MLAs) — ₹80 Cr</p>
            <p>• Road Fund Board — ₹40 Cr</p>
            <p>• De-addiction and rehabilitation centres — ₹0.70 Cr</p>
            <p>• Supplementary demands for grants, 2025–26 — ₹3,724.25 Cr</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Budget Priorities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Agriculture and farmer livelihoods (Bana Kaih)</p>
            <p>• Healthcare and the anti-narcotics drive</p>
            <p>• Social infrastructure and connectivity</p>
            <p>• Rural development and roads</p>
            <p>• Fiscal consolidation and a return to revenue surplus</p>
            <p>• Public administration and internal security</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Mizoram Budget Speech 2026–27 (Mizoram Legislative
          Assembly / DIPR Mizoram), Mizoram Finance Department budget
          documents, PRS Legislative Research — Mizoram Budget Analysis
          2026–27, and contemporaneous reporting (Outlook India, India
          Today NE, Free Press Journal), as of the budget presented on
          26 February 2026. Departmental totals not yet published in
          accessible form are shown as scheme-level allocations rather
          than estimated.
        </p>
      </div>
    </main>
  );
}