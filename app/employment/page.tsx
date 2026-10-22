import type { Metadata } from "next";
import BarList from "../components/BarList";
import BulletList from "../components/BulletList";
import JobsBoard from "../components/JobsBoard";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  jobChannels,
  jobEvents,
  jobSources,
  jobStats,
  recruitments,
} from "../data/jobs";
import { hostname } from "../lib/format";

export const metadata: Metadata = {
  title: "Jobs & Employment",
  description:
    "Mizoram government recruitment tracker (MPSC, Mizoram Police), employment exchange data, job fairs and official job portals.",
};

const postsByNotice = recruitments
  .filter((r) => r.posts)
  .map((r) => ({ label: `${r.title} (${r.recruiter})`, value: r.posts! }))
  .sort((a, b) => b.value - a.value);

export default function EmploymentPage() {
  return (
    <>
      <PageHeader
        title="Jobs & Employment"
        description="Government recruitment in Mizoram this year, where to apply, and how many people are looking for work."
      />

      <StatGrid stats={jobStats} />

      <Panel
        title="Recruitment tracker 2026"
        description="MPSC and Mizoram Police notices advertised this year. Status is worked out from today's date in India. Dates are taken from notices and job listings, so always confirm on the official site before you apply."
      >
        <JobsBoard jobs={recruitments} />
      </Panel>

      <BarList
        title="Posts advertised by notice"
        description="The police constable drive and the departmental exams account for most of this year's posts."
        data={postsByNotice}
      />

      <Panel
        title="Where to apply"
        description="Official channels for government jobs and job-seeker registration."
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobChannels.map((channel) => (
            <li key={channel.url}>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-xl border border-line bg-surface-2 p-5 transition hover:border-accent/60"
              >
                <p className="font-semibold text-ink">{channel.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {channel.note}
                </p>
                <p className="mt-3 text-sm text-accent">
                  {hostname(channel.url)} ↗
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Job fairs and employment schemes">
        <ol className="relative space-y-6 border-l border-line pl-6">
          {jobEvents.map((event) => (
            <li key={event.title}>
              <span
                className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-accent-solid"
                aria-hidden
              />
              <p className="text-sm text-subtle">{event.date}</p>
              <h3 className="mt-1 font-semibold text-ink">{event.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">
                {event.detail}
              </p>
            </li>
          ))}
        </ol>
      </Panel>

      <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
        <Panel title="Where Mizoram works">
          <BulletList
            items={[
              "Government services",
              "Education",
              "Healthcare",
              "Agriculture and allied work",
              "Small businesses and trade",
              "Tourism and hospitality",
              "Construction (welfare board schemes)",
              "Self-employment through Bana Kaih",
            ]}
          />
        </Panel>

        <Panel title="Key challenges">
          <BulletList
            items={[
              "Few government posts for many graduates",
              "Limited private-sector jobs",
              "Skills that don't match employers' needs",
              "Low use of the employment exchange",
              "Migration out of the state for better pay",
              "Finance for startups and small businesses",
            ]}
          />
        </Panel>
      </div>

      <SourceList sources={jobSources} />
    </>
  );
}
