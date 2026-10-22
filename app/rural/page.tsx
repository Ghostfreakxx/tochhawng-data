import type { Metadata } from "next";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  ramgChanges,
  ruralChallenges,
  ruralPriorities,
  ruralSources,
  ruralStats,
} from "../data/rural";

export const metadata: Metadata = {
  title: "Rural Development",
  description:
    "VB-G RAM G rural employment guarantee in Mizoram, the end of MGNREGS, and village development priorities.",
};

export default function RuralPage() {
  return (
    <>
      <PageHeader
        title="Rural Development"
        description="On 1 July 2026 the Viksit Bharat Guarantee for Rozgar and Ajeevika Mission (Gramin), VB-G RAM G, replaced MGNREGS as India's rural jobs guarantee. Here is what changes for Mizoram's villages."
      />

      <StatGrid stats={ruralStats} />

      <Panel
        title="What changed from MGNREGS"
        description="The main differences under the VB-G RAM G Act, 2025."
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ramgChanges.map((change) => (
            <li
              key={change.title}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <p className="font-semibold text-white">{change.title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {change.detail}
              </p>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Why it matters">
        <p className="max-w-4xl leading-7 text-zinc-300">
          Many households in Mizoram depend on village livelihoods, farm work
          and public works. As a North-Eastern state, Mizoram pays only 10% of
          the programme&apos;s cost, but the extra 25 days of guaranteed work and
          the new formula-based allocation will change how much reaches each
          village. The state has budgeted ₹1,004 Cr for rural employment in
          2026–27.
        </p>
      </Panel>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Priorities">
          <BulletList items={ruralPriorities} />
        </Panel>
        <Panel title="Key challenges">
          <BulletList items={ruralChallenges} />
        </Panel>
      </div>

      <SourceList sources={ruralSources} />
    </>
  );
}
