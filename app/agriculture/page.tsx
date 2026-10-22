import type { Metadata } from "next";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  agricultureChallenges,
  agricultureSources,
  agricultureStats,
  banaKaihProgress,
  keyCrops,
} from "../data/agriculture";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Bana Kaih handholding scheme progress, crop procurement and Mizoram's agriculture budget.",
};

export default function AgriculturePage() {
  return (
    <>
      <PageHeader
        title="Agriculture"
        description="Bana Kaih, the government's flagship handholding scheme, funds farmers and small entrepreneurs and buys key crops at support prices."
      />

      <StatGrid stats={agricultureStats} />

      <Panel
        title="Bana Kaih progress"
        description="Beneficiaries are called Progress Partners. Since October 2026 their payments go straight to their bank accounts through 100% DBT."
      >
        <dl className="divide-y divide-line rounded-xl border border-line">
          {banaKaihProgress.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 px-5 py-3.5"
            >
              <dt className="text-sm text-ink-2">{row.label}</dt>
              <dd className="font-semibold tabular-nums text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs leading-5 text-subtle">
          These figures come from reports at different dates and may not add up
          exactly.
        </p>
      </Panel>

      <Panel
        title="Crops with procurement support"
        description="₹150 Cr of the 2026–27 Bana Kaih outlay is set aside for buying these crops."
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {keyCrops.map((crop) => (
            <li
              key={crop.name}
              className="rounded-xl border border-line bg-surface-2 p-5"
            >
              <p className="text-lg font-semibold text-ink">{crop.name}</p>
              <p className="mt-2 text-sm text-subtle">{crop.note}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Key challenges">
        <BulletList items={agricultureChallenges} />
      </Panel>

      <SourceList sources={agricultureSources} />
    </>
  );
}
