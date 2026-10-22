import Link from "next/link";
import { StatGrid } from "./components/StatCard";
import { recentLaunches } from "./data/portals";
import { sections } from "./data/sections";
import { totalPostsTracked } from "./data/jobs";
import { updates } from "./data/updates";
import type { Stat } from "./data/types";
import { formatDate } from "./lib/format";

const headlineStats: Stat[] = [
  {
    label: "State budget 2026–27",
    value: "₹17,077 Cr",
    note: "Budgeted spending, with no new taxes",
  },
  {
    label: "Literacy rate",
    value: "98.2%",
    note: "Declared fully literate in May 2025",
  },
  {
    label: "MUHCS 2.0 families",
    value: "3.22 lakh",
    note: "Enrolled in the universal health scheme",
  },
  {
    label: "Govt posts advertised",
    value: totalPostsTracked.toLocaleString("en-IN"),
    note: "In MPSC and police notices tracked for 2026",
  },
  {
    label: "Online portals",
    value: "20+",
    note: "Government services launched online in two years",
  },
  {
    label: "Drugs seized",
    value: "₹846 Cr",
    note: "January to August 2026",
  },
  {
    label: "Population",
    value: "~12.5 lakh",
    note: "2024 estimate; 10.97 lakh at Census 2011",
  },
  {
    label: "Rural work guarantee",
    value: "125 days",
    note: "Under VB-G RAM G from July 2026",
  },
];

export default function Home() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <p className="text-sm font-medium text-accent">
          Public data dashboard for Mizoram
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
          Understanding Mizoram through data, governance and public policy.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          Tochhawng Data turns budget documents, government releases and
          official portals into clear dashboards for students, researchers,
          journalists, job seekers and every citizen of Mizoram.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/employment"
            className="rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-accent-solid-hover"
          >
            Latest government jobs
          </Link>
          <Link
            href="/portals"
            className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-subtle"
          >
            New government portals
          </Link>
          <a
            href="#dashboards"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink-2 transition hover:text-ink"
          >
            All dashboards ↓
          </a>
        </div>
      </section>

      <StatGrid stats={headlineStats} />

      <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What’s new</h2>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {updates.slice(0, 8).map((update) => (
              <li key={update.title}>
                <Link
                  href={update.href}
                  className="group grid gap-1 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
                >
                  <span className="text-sm tabular-nums text-subtle">
                    {formatDate(update.date)}
                  </span>
                  <span>
                    <span className="font-semibold text-ink transition group-hover:text-accent">
                      {update.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {update.summary}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-xl font-bold text-ink">Recently launched portals</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Government services that went online in 2025–26.
          </p>
          <ul className="mt-5 space-y-4">
            {recentLaunches.slice(0, 6).map((p) => (
              <li key={p.name} className="border-l-2 border-accent/60 pl-3">
                <p className="text-sm font-medium text-ink">{p.name}</p>
                <p className="text-xs text-subtle">{formatDate(p.launched!)}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/portals"
            className="mt-6 inline-block text-sm font-medium text-accent transition hover:text-accent-strong"
          >
            See all {recentLaunches.length} launches →
          </Link>
        </aside>
      </section>

      <section id="dashboards" className="mt-16 scroll-mt-28">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Dashboards</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-line bg-surface-2 p-6 transition hover:border-accent/60 hover:bg-surface"
            >
              <h3 className="text-lg font-semibold text-ink">{section.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {section.description}
              </p>
              <p className="mt-4 text-sm font-medium text-accent">
                Open dashboard{" "}
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-line bg-surface p-8">
        <h2 className="text-2xl font-bold text-ink">About Tochhawng Data</h2>
        <p className="mt-4 max-w-4xl leading-7 text-muted">
          Tochhawng Data makes public information about Mizoram easier to find
          and understand. Each dashboard cites its sources, including budget
          documents, PRS Legislative Research, the Census of India, the Election
          Commission, department reports, official portals and news reports of
          government statements. Numbers from press reports are marked as such
          and should be checked against the original before being cited.
        </p>
      </section>
    </>
  );
}
