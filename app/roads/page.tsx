import type { Metadata } from "next";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  roadChallenges,
  roadProjects,
  roadSources,
  roadStats,
} from "../data/roads";

export const metadata: Metadata = {
  title: "Roads & Connectivity",
  description:
    "Mizoram's roads and bridges budget, road maintenance, the Bairabi–Sairang railway and key infrastructure projects.",
};

export default function RoadsPage() {
  return (
    <>
      <PageHeader
        title="Roads & Connectivity"
        description="Hill terrain, heavy rain and landslides make every kilometre of road in Mizoram expensive to build and maintain. Rail reached Aizawl for the first time in 2025."
      />

      <StatGrid stats={roadStats} />

      <Panel title="Infrastructure overview">
        <p className="max-w-4xl leading-7 text-zinc-300">
          Road connectivity remains one of Mizoram&apos;s biggest development
          priorities. The 2026–27 budget gives ₹359 Cr to roads and bridges,
          and ₹183.25 Cr in total to road maintenance. The Bairabi–Sairang
          railway, opened in September 2025, links Aizawl to the national rail
          network. From October 2026 the Public Works Department keeps its
          works accounts on MIWAS, the new integrated system that should make
          spending on roads easier to track.
        </p>
      </Panel>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Major projects">
          <BulletList items={roadProjects} />
        </Panel>
        <Panel title="Key challenges">
          <BulletList items={roadChallenges} />
        </Panel>
      </div>

      <SourceList sources={roadSources} />
    </>
  );
}
