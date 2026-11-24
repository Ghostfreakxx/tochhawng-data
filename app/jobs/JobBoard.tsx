"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { Job } from "../data/jobs";

/** Today's date in India as "YYYY-MM-DD" (en-CA formats dates that way). */
function todayInIndia() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(
    new Date(),
  );
}

const subscribe = () => () => {};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

function daysLeft(lastDate: string, today: string) {
  const ms = Date.parse(lastDate) - Date.parse(today);
  return Math.round(ms / 86_400_000);
}

export default function JobBoard({ jobs }: { jobs: Job[] }) {
  // null during prerender; the real date once running in the browser.
  const today = useSyncExternalStore(subscribe, todayInIndia, () => null);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showClosed, setShowClosed] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.category)))],
    [jobs],
  );

  const q = query.trim().toLowerCase();
  const matches = jobs
    .filter((j) => category === "All" || j.category === category)
    .filter(
      (j) =>
        !q ||
        [j.title, j.department, j.qualification, j.location]
          .join(" ")
          .toLowerCase()
          .includes(q),
    )
    .sort((a, b) => a.lastDate.localeCompare(b.lastDate));

  const isOpen = (j: Job) => today === null || j.lastDate >= today;
  const open = matches.filter(isOpen);
  const closed = matches.filter((j) => !isOpen(j)).reverse();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by post, department, qualification…"
          aria-label="Search jobs"
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        {open.length} open {open.length === 1 ? "listing" : "listings"}
        {closed.length > 0 && ` · ${closed.length} closed`}
      </p>

      {open.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">
          No open listings match right now. Check the official recruitment
          sites below for the latest notices.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {open.map((job) => (
            <JobCard key={job.id} job={job} today={today} />
          ))}
        </div>
      )}

      {closed.length > 0 && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowClosed((s) => !s)}
            className="text-sm text-gray-400 hover:text-green-400"
          >
            {showClosed ? "Hide" : "Show"} closed listings ({closed.length})
          </button>
          {showClosed && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 opacity-60">
              {closed.map((job) => (
                <JobCard key={job.id} job={job} today={today} closed />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function JobCard({
  job,
  today,
  closed = false,
}: {
  job: Job;
  today: string | null;
  closed?: boolean;
}) {
  const left = today ? daysLeft(job.lastDate, today) : null;

  let badge: { text: string; cls: string };
  if (closed) {
    badge = { text: "Closed", cls: "bg-zinc-800 text-gray-400" };
  } else if (left === null) {
    badge = { text: `Apply by ${formatDate(job.lastDate)}`, cls: "bg-green-950 text-green-400" };
  } else if (left === 0) {
    badge = { text: "Last day today", cls: "bg-red-950 text-red-400" };
  } else if (left <= 7) {
    badge = { text: `${left} day${left === 1 ? "" : "s"} left`, cls: "bg-amber-950 text-amber-400" };
  } else {
    badge = { text: `${left} days left`, cls: "bg-green-950 text-green-400" };
  }

  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {job.category}
        </span>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${badge.cls}`}>
          {badge.text}
        </span>
      </div>

      <h3 className="text-xl font-semibold mt-3">{job.title}</h3>
      <p className="text-gray-400 mt-1">{job.department}</p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
        <dt className="text-gray-500">Posts</dt>
        <dd>{job.posts ?? "Not stated"}</dd>
        <dt className="text-gray-500">Location</dt>
        <dd>{job.location}</dd>
        <dt className="text-gray-500">Qualification</dt>
        <dd>{job.qualification}</dd>
        <dt className="text-gray-500">Last date</dt>
        <dd>{formatDate(job.lastDate)}</dd>
        {job.pay && (
          <>
            <dt className="text-gray-500">Pay</dt>
            <dd>{job.pay}</dd>
          </>
        )}
        {job.ageLimit && (
          <>
            <dt className="text-gray-500">Age limit</dt>
            <dd>{job.ageLimit}</dd>
          </>
        )}
        {job.fee && (
          <>
            <dt className="text-gray-500">Fee</dt>
            <dd>{job.fee}</dd>
          </>
        )}
        <dt className="text-gray-500">How to apply</dt>
        <dd>{job.howToApply}</dd>
      </dl>

      {job.note && <p className="text-gray-500 text-sm mt-4">{job.note}</p>}

      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 text-green-400 text-sm hover:text-green-300"
      >
        {job.linkLabel} →
      </a>
    </article>
  );
}
