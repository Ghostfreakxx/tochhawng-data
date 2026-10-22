import type { Metadata } from "next";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import {
  educationChallenges,
  educationSources,
  educationStats,
  hslcDistricts,
  hsslcStreams,
  institutions,
  literacyTrend,
} from "../data/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Mizoram literacy, HSLC and HSSLC results, education spending and institutions.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        title="Education"
        description="Mizoram has one of the highest literacy rates in India. Board results and the gap between districts show where the system still struggles."
      />

      <StatGrid stats={educationStats} />

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <TrendChart
          kind="line"
          title="Literacy rate (%)"
          description="Census 2001 and 2011, then the PLFS 2023–24 rate used to declare Mizoram fully literate."
          data={literacyTrend}
          unit={{ suffix: "%", decimals: 1 }}
          yDomain={[80, 100]}
          valueLabel="Literacy rate"
        />

        <Panel
          title="HSLC 2026 results"
          description="Class 10 results declared on 23 April 2026. MBSE stopped publishing merit lists and divisions this year to reduce pressure on students."
        >
          <dl className="grid grid-cols-2 gap-4">
            {hslcDistricts.map((d) => (
              <div key={d.label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <dt className="text-sm text-zinc-400">{d.label}</dt>
                <dd className="mt-2 text-2xl font-bold text-white">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>

      <Panel
        title="HSSLC results by stream"
        description="Class 12 pass percentage. Commerce had the highest pass rate, and all three streams improved between 2022 and 2026."
      >
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {hsslcStreams.map((s) => (
            <div key={s.stream} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <dt className="text-sm text-zinc-400">{s.stream}</dt>
              <dd className="mt-2 text-3xl font-bold text-green-400">{s.pass}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Major institutions">
          <BulletList items={institutions} />
        </Panel>
        <Panel title="Key challenges">
          <BulletList items={educationChallenges} />
        </Panel>
      </div>

      <SourceList sources={educationSources} />
    </>
  );
}
