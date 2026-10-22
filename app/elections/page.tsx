import type { Metadata } from "next";
import BarList from "../components/BarList";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import {
  amc2026,
  assembly2023,
  electionFacts,
  electionSources,
  electionStats,
  lokSabha2024,
  turnoutTrend,
} from "../data/elections";

export const metadata: Metadata = {
  title: "Elections",
  description:
    "Mizoram Assembly 2023, Lok Sabha 2024 and Aizawl Municipal Corporation 2026 results, and voter turnout.",
};

const lokSabhaTotal = lokSabha2024.reduce((sum, c) => sum + c.votes, 0);

export default function ElectionsPage() {
  return (
    <>
      <PageHeader
        title="Elections"
        description="The Zoram People's Movement (ZPM) won the Assembly in 2023, the Lok Sabha seat in 2024 and Aizawl's municipal corporation in 2026."
      />

      <StatGrid stats={electionStats} />

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <BarList
          title="Assembly 2023: seats won"
          description="40 seats; 21 needed for a majority."
          data={assembly2023}
        />

        <TrendChart
          kind="line"
          title="Assembly voter turnout (%)"
          description="Turnout has stayed above 80% for four elections. The 2023 figure is provisional."
          data={turnoutTrend}
          unit={{ suffix: "%", decimals: 2 }}
          yDomain={[70, 90]}
          valueLabel="Turnout"
        />
      </div>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel
          title="Lok Sabha 2024"
          description="Mizoram's single seat; polled 19 April 2024, turnout 56.87%."
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-subtle">
                <th className="py-2 font-medium">Candidate</th>
                <th className="py-2 font-medium">Party</th>
                <th className="py-2 text-right font-medium">Votes</th>
              </tr>
            </thead>
            <tbody>
              {lokSabha2024.map((c, i) => (
                <tr key={c.candidate} className="border-b border-line/60">
                  <td className={`py-2.5 ${i === 0 ? "font-semibold text-ink" : "text-ink-2"}`}>
                    {c.candidate}
                  </td>
                  <td className="py-2.5 text-muted">{c.party}</td>
                  <td className="py-2.5 text-right tabular-nums text-ink-2">
                    {c.votes.toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-subtle">
            The four main candidates polled{" "}
            {lokSabhaTotal.toLocaleString("en-IN")} votes between them.
          </p>
        </Panel>

        <Panel
          title="Aizawl Municipal Corporation 2026"
          description="Wards won out of 19, April 2026. In 2021 the MNF won 11."
        >
          <dl className="grid grid-cols-2 gap-4">
            {amc2026.map((p) => (
              <div key={p.party} className="rounded-xl border border-line bg-surface-2 p-4">
                <dt className="text-sm text-muted">{p.party}</dt>
                <dd className="mt-1 text-3xl font-bold text-ink">{p.wards}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>

      <Panel title="Key facts">
        <BulletList items={electionFacts} />
      </Panel>

      <SourceList sources={electionSources} />
    </>
  );
}
