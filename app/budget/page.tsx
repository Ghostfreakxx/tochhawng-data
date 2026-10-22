import type { Metadata } from "next";
import BarList from "../components/BarList";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import {
  budgetHighlights,
  budgetSources,
  budgetStats,
  budgetTrend,
  sectorAllocations,
} from "../data/budget";

export const metadata: Metadata = {
  title: "Budget & Finance",
  description:
    "Mizoram Budget 2026–27: total spending, capital expenditure, central transfers and sector allocations.",
};

const crore = { prefix: "₹", suffix: " Cr" };

export default function BudgetPage() {
  return (
    <>
      <PageHeader
        title="Budget & Finance"
        description="Chief Minister Lalduhoma presented Mizoram's 2026–27 budget on 26 February 2026. It is his third budget, and it proposes no new taxes."
      />

      <StatGrid stats={budgetStats} />

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <TrendChart
          kind="column"
          title="Budgeted spending (₹ crore)"
          description="Total expenditure in each year's budget estimate. Spending is up 18.5% in two years."
          data={budgetTrend}
          unit={crore}
          valueLabel="₹ crore"
        />

        <BarList
          title="Largest sector allocations, 2026–27 (₹ crore)"
          description="Budget estimates from PRS Legislative Research."
          data={sectorAllocations}
          unit={crore}
        />
      </div>

      <Panel
        title="Budget overview"
        description="Where the money comes from, and what it is spent on."
      >
        <p className="max-w-4xl leading-7 text-zinc-300">
          Mizoram expects ₹17,470 Cr in receipts in 2026–27, and ₹8,608 Cr of
          that is its share of central taxes. The state remains heavily
          dependent on transfers from the Union Government. Revenue spending on
          salaries, pensions, interest and running costs takes ₹14,094 Cr.
          Capital spending, which builds roads, buildings and other assets,
          rises 12.2% to ₹2,982 Cr. From October 2026 departments prepare
          budgets through the new e-Budget system, and spending sanctions are
          checked against available funds by e-Sanction.
        </p>
      </Panel>

      <Panel title="Notable allocations">
        <BulletList items={budgetHighlights} />
      </Panel>

      <SourceList sources={budgetSources} />
    </>
  );
}
