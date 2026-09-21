import DataChart from "../components/DataChart";
import BudgetPieChart from "../components/BudgetPieChart";
import Term from "../components/Term";

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

        <p className="text-gray-400 mb-6">
          State finances, departmental allocations, development priorities, and public expenditure.
        </p>

        <div className="bg-zinc-950 border border-green-900/60 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-green-400 mb-2">
            New to government budgets? Start here.
          </h2>

          <p className="text-gray-400 leading-7">
            A budget is simply the government&apos;s financial plan for the
            year — how much money it expects to receive (mostly from taxes
            and transfers from the Union Government) and how it plans to
            spend that money. Amounts below are written in{" "}
            <strong className="text-gray-300">Crore</strong> (1 Crore =
            ₹1,00,00,000, or 10 million rupees) because state budgets run
            into the thousands of crore. Tap{" "}
            <span className="text-green-400">&quot;What does this mean?&quot;</span>{" "}
            under any card for a plain explanation, or see the full{" "}
            <a href="/glossary" className="text-green-400 underline">
              Glossary
            </a>
            .
          </p>
        </div>

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

            <Term>
              This is all the money the government expects to receive this
              year — from taxes, its own revenue, and money sent by the
              Union Government.
            </Term>
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

            <Term>
              This is all the money the government plans to spend this year
              — on salaries, welfare schemes, construction, and everything
              else it runs or funds.
            </Term>
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

            <Term>
              Money spent on things that last — new roads, buildings, and
              infrastructure — or on repaying loans. More capital spending
              generally means more long-term assets for the state.
            </Term>
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

            <Term>
              Money spent on the day-to-day running of government —
              salaries, pensions, and maintenance. It keeps things going but
              doesn&apos;t build anything new.
            </Term>
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

            <Term>
              The government plans to spend ₹1,669 Cr more than it earns
              this year, and will borrow to cover the gap. This share is
              much smaller than last year&apos;s, which points to healthier
              state finances.
            </Term>
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

            <Term>
              The government now expects to earn more than it spends on
              day-to-day running costs, rather than less. That&apos;s a
              turnaround from the previous year, when it was the other way
              round.
            </Term>
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

            <Term>
              GSDP is the total value of everything Mizoram produces in a
              year — a way of measuring the size of the state&apos;s
              economy. Budget figures are often compared to GSDP to judge
              whether spending and borrowing are at a manageable level.
            </Term>
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

            <Term>
              Mizoram&apos;s share of taxes collected by the Union
              Government — around half of the state&apos;s total receipts
              for the year come from this one source.
            </Term>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Budget Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Chief Minister Lalduhoma, who also holds the Finance portfolio,
            presented a ₹17,469.91 crore budget for 2026–27 — his third
            since the Zoram People&apos;s Movement (ZPM) took office in
            December 2023 — with no new taxes proposed. The budget
            prioritizes agriculture, healthcare, an anti-narcotics drive,
            social infrastructure, and connectivity, while continuing
            Mizoram&apos;s reliance on transfers from the Union Government
            alongside a planned improvement in the state&apos;s fiscal
            position: the fiscal
            deficit is targeted to narrow to 3.8% of GSDP from 7.6% in the
            2025–26 revised estimate, with the state moving back to a
            revenue surplus.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            The Budget in Everyday Terms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
            <div>
              <p className="text-gray-300 font-semibold mb-1">
                1 Crore = ₹1,00,00,000
              </p>
              <p>
                That&apos;s 10 million rupees. Mizoram&apos;s ₹17,469.91 Cr
                budget is therefore about ₹1,74,69,91,00,000 — nearly ₹1.75
                lakh crore written out in full.
              </p>
            </div>

            <div>
              <p className="text-gray-300 font-semibold mb-1">
                ≈ ₹1,39,760 per person, for scale
              </p>
              <p>
                Dividing the total budget by Mizoram&apos;s population
                (about 12.5 lakh) gives roughly ₹1,39,760. This is only to
                help visualise the size of the number — it is not an amount
                anyone actually receives, since the budget pays for shared
                things like schools, roads, hospitals, and salaries.
              </p>
            </div>
          </div>
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

        <BudgetPieChart
          title="Where the Budget Goes (Sectors Reported by PRS)"
          note="Only the sectors PRS itemised are shown separately; everything else falls under 'Other Sectors' below."
          data={[
            { name: "Rural Development", value: 7.9 },
            { name: "Police", value: 4.7 },
            { name: "Roads & Bridges", value: 2.0 },
            { name: "Other Sectors (not itemised here)", value: 85.4 },
          ]}
        />

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

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-zinc-800">
            <details className="py-3 first:pt-0">
              <summary className="cursor-pointer font-semibold text-green-400">
                Where does Mizoram&apos;s budget money come from?
              </summary>
              <p className="text-gray-400 mt-2 leading-7">
                Mainly from the Union Government. Central tax devolution
                (₹8,608.08 Cr) and other central transfers make up most of
                Mizoram&apos;s receipts, since the state raises relatively
                little of its own tax revenue.
              </p>
            </details>

            <details className="py-3">
              <summary className="cursor-pointer font-semibold text-green-400">
                Is a fiscal deficit a bad thing?
              </summary>
              <p className="text-gray-400 mt-2 leading-7">
                Not by itself — most governments run one most years, similar
                to how a household might take a loan for a big expense. What
                matters is the size relative to the economy (GSDP) and
                whether it&apos;s trending up or down. Mizoram&apos;s is
                targeted to fall sharply, from 7.6% to 3.8% of GSDP.
              </p>
            </details>

            <details className="py-3">
              <summary className="cursor-pointer font-semibold text-green-400">
                What&apos;s the difference between the Budget Estimate and
                the Revised Estimate?
              </summary>
              <p className="text-gray-400 mt-2 leading-7">
                The Budget Estimate (BE) is the plan presented before the
                year starts. The Revised Estimate (RE) is an updated,
                more realistic figure produced partway through the year,
                once actual collections and spending are clearer.
              </p>
            </details>

            <details className="py-3 last:pb-0">
              <summary className="cursor-pointer font-semibold text-green-400">
                Is Mizoram&apos;s financial position improving?
              </summary>
              <p className="text-gray-400 mt-2 leading-7">
                On these figures, yes: the fiscal deficit is projected to
                narrow substantially, and the state is expected to return
                to a revenue surplus after a deficit in 2025–26. Capital
                spending — the kind that builds lasting infrastructure — is
                also growing faster than day-to-day revenue spending.
              </p>
            </details>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Directorate of Information &amp; Public Relations,
          Government of Mizoram (dipr.mizoram.gov.in) — official record of
          the Budget Speech delivered by Hon&apos;ble Chief Minister &amp;
          Finance Minister Pu Lalduhoma to the 9th Mizoram Legislative
          Assembly on 26 February 2026; Finance Department, Government of
          Mizoram (finance.mizoram.gov.in) budget documents; PRS
          Legislative Research — Mizoram Budget Analysis 2026–27; and
          contemporaneous reporting (Outlook India, India Today NE, Free
          Press Journal) corroborating the same figures. Departmental
          totals not yet published in accessible form are shown as
          scheme-level allocations rather than estimated. See the{" "}
          <a href="/glossary" className="text-green-400 underline">
            Glossary
          </a>{" "}
          for plain-language explanations of the terms used above.
        </p>
      </div>
    </main>
  );
}