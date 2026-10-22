import type { Metadata } from "next";
import BarList from "../components/BarList";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import {
  crimeConcerns,
  crimeSources,
  crimeStats,
  cybercrimeTrend,
  homeDeptHighlights,
  seizuresByDrug,
} from "../data/crime";

export const metadata: Metadata = {
  title: "Crime & Public Safety",
  description:
    "Drug seizures in Mizoram in 2026, cybercrime cases, arms recoveries and police spending.",
};

export default function CrimePage() {
  return (
    <>
      <PageHeader
        title="Crime & Public Safety"
        description="Drug trafficking across the Myanmar border is Mizoram's biggest public safety challenge. Here is what police and security forces have seized in 2026, alongside cybercrime and arms data."
      />

      <StatGrid stats={crimeStats} />

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <BarList
          title="Drugs seized by type, Jan–Jun 2026 (₹ crore)"
          description="Mizoram Police estimates of value. “Other” is the rest of the ₹414.66 Cr half-year total."
          data={seizuresByDrug}
          unit={{ prefix: "₹", suffix: " Cr", decimals: 2 }}
        />

        <TrendChart
          kind="column"
          title="Reported cybercrime cases"
          description="Mizoram Police research dataset. 2026 covers part of the year only."
          data={cybercrimeTrend}
          valueLabel="Cases"
        />
      </div>

      <Panel
        title="Home Department highlights, 2023–2025"
        description="From the department's performance report."
      >
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {homeDeptHighlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <dt className="text-xs text-zinc-400">{h.label}</dt>
              <dd className="mt-2 text-xl font-bold text-white">{h.value}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <Panel title="Key concerns">
        <BulletList items={crimeConcerns} />
      </Panel>

      <SourceList sources={crimeSources} />
    </>
  );
}
