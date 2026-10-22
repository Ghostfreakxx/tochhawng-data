import type { Metadata } from "next";
import BarList from "../components/BarList";
import BulletList from "../components/BulletList";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  healthChallenges,
  healthInstitutions,
  healthMilestones,
  healthSources,
  healthStats,
  muhcsEnrolment,
} from "../data/health";

export const metadata: Metadata = {
  title: "Health",
  description:
    "MUHCS 2.0 enrolment and spending, the online medical referral system and Mizoram's health budget.",
};

export default function HealthPage() {
  return (
    <>
      <PageHeader
        title="Health"
        description="The Mizoram Universal Health Care Scheme (MUHCS) now covers more than 3.2 lakh families. Here is how many people it has treated and how much it costs."
      />

      <StatGrid stats={healthStats} />

      <BarList
        title="Who is enrolled in MUHCS 2.0"
        description="3,22,243 families enrolled, by category (September 2026). Seven in ten are AB-PMJAY households covered with the Centre."
        data={muhcsEnrolment}
      />

      <Panel title="Scheme timeline">
        <ol className="relative space-y-6 border-l border-zinc-800 pl-6">
          {healthMilestones.map((m) => (
            <li key={m.title}>
              <span
                className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-green-400"
                aria-hidden
              />
              <p className="text-sm text-zinc-500">{m.date}</p>
              <h3 className="mt-1 font-semibold text-white">{m.title}</h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-400">
                {m.detail}
              </p>
            </li>
          ))}
        </ol>
      </Panel>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Healthcare institutions">
          <BulletList items={healthInstitutions} />
        </Panel>
        <Panel title="Key challenges">
          <BulletList items={healthChallenges} />
        </Panel>
      </div>

      <SourceList sources={healthSources} />
    </>
  );
}
