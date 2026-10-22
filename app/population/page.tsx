import type { Metadata } from "next";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import TrendChart from "../components/TrendChart";
import {
  demographicHighlights,
  populationChallenges,
  populationSources,
  populationStats,
  populationTrend,
} from "../data/population";

export const metadata: Metadata = {
  title: "Population",
  description:
    "Mizoram population from the Census, growth, urbanisation and demographic indicators.",
};

export default function PopulationPage() {
  return (
    <>
      <PageHeader
        title="Population"
        description="Mizoram is one of India's least populous states, but also one of its most urbanised and literate."
      />

      <StatGrid stats={populationStats} />

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <TrendChart
          kind="column"
          title="Population (lakh)"
          description="Census counts for 1991, 2001 and 2011. The 2024 figure is an estimate."
          data={populationTrend}
          unit={{ decimals: 2 }}
          valueLabel="Lakh"
        />

        <Panel title="Census 2027">
          <p className="leading-7 text-ink-2">
            The next census is under way. House-listing was carried out in
            2026, and the population count follows with 1 March 2027 as the
            reference date. Until then, Census 2011 remains the only official
            headcount, and later figures are projections.
          </p>
        </Panel>
      </div>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Demographic highlights">
          <BulletList items={demographicHighlights} />
        </Panel>
        <Panel title="Key challenges">
          <BulletList items={populationChallenges} />
        </Panel>
      </div>

      <SourceList sources={populationSources} />
    </>
  );
}
