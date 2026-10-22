"use client";

import { useState, useSyncExternalStore } from "react";
import type { Recruitment } from "../data/jobs";
import { formatDate, hostname } from "../lib/format";

type Status = "open" | "closed" | "notice";
type Filter = "all" | Status;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "open", label: "Open" },
  { value: "closed", label: "Closed" },
  { value: "notice", label: "No fixed date" },
];

// Deadlines are Indian Standard Time, so "today" is taken in Asia/Kolkata.
function todayInIndia() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(
    new Date(),
  );
}

const noSubscribe = () => () => {};

// Today's date is only known in the browser. The server render shows no
// status badges, and they appear after hydration without a mismatch.
function useToday() {
  return useSyncExternalStore(noSubscribe, todayInIndia, () => null);
}

function statusOf(job: Recruitment, today: string): Status {
  if (!job.lastDate) return "notice";
  return job.lastDate >= today ? "open" : "closed";
}

function daysBetween(from: string, to: string) {
  return Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);
}

function StatusBadge({ job, today }: { job: Recruitment; today: string }) {
  const status = statusOf(job, today);

  if (status === "notice") {
    return (
      <span className="rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400">
        See notice
      </span>
    );
  }

  if (status === "closed") {
    return (
      <span className="rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500">
        Closed
      </span>
    );
  }

  const days = daysBetween(today, job.lastDate!);
  const label =
    days === 0 ? "Closes today" : days === 1 ? "Closes tomorrow" : `Open · ${days} days left`;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-300">
      <span className="size-1.5 rounded-full bg-green-400" aria-hidden />
      {label}
    </span>
  );
}

export default function JobsBoard({ jobs }: { jobs: Recruitment[] }) {
  const today = useToday();
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" || !today
      ? jobs
      : jobs.filter((job) => statusOf(job, today) === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by status" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
              filter === f.value
                ? "border-green-400 bg-green-400 font-medium text-black"
                : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
            }`}
          >
            {f.label}
            {today && f.value !== "all" && (
              <span className="ml-1.5 opacity-70">
                {jobs.filter((job) => statusOf(job, today) === f.value).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-xl border border-dashed border-zinc-700 p-6 text-sm text-zinc-400">
          No notices match this filter right now. Check MPSC Online and EmpEx
          for new advertisements.
        </p>
      ) : (
        <ul className="mt-5 divide-y divide-zinc-800 rounded-xl border border-zinc-800">
          {visible.map((job) => (
            <li
              key={job.title}
              className="grid gap-3 p-5 md:grid-cols-[1fr_auto] md:items-start md:gap-8"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
                    {job.recruiter}
                  </span>
                  {today && <StatusBadge job={job} today={today} />}
                </div>
                <h3 className="mt-2 font-semibold text-white">{job.title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{job.detail}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-green-400 transition hover:text-green-300"
                >
                  {hostname(job.link)} ↗
                </a>
              </div>

              <dl className="flex gap-8 text-sm md:flex-col md:gap-3 md:text-right">
                <div>
                  <dt className="text-zinc-500">Posts</dt>
                  <dd className="text-lg font-semibold tabular-nums text-white">
                    {job.posts ?? "–"}
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Last date</dt>
                  <dd className="text-zinc-200">
                    {job.lastDate ? formatDate(job.lastDate) : "See notice"}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
