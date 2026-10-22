"use client";

import { useState } from "react";
import {
  portalCategories,
  type Portal,
  type PortalCategory,
} from "../data/portals";
import { formatDate, hostname } from "../lib/format";

export default function PortalDirectory({ portals }: { portals: Portal[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PortalCategory | "All">("All");

  const terms = query.toLowerCase().trim();
  const matches = portals.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!terms ||
        [p.name, p.department, p.description, p.url ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(terms)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="block lg:w-80">
          <span className="sr-only">Search portals</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search portals, departments, services…"
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-green-400 focus:outline-none"
          />
        </label>

        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {(["All", ...portalCategories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                category === c
                  ? "border-green-400 bg-green-400 font-medium text-black"
                  : "border-zinc-700 text-zinc-300 hover:border-zinc-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500" aria-live="polite">
        Showing {matches.length} of {portals.length} portals
      </p>

      {matches.length === 0 ? (
        <p className="mt-4 rounded-xl border border-dashed border-zinc-700 p-6 text-sm text-zinc-400">
          No portal matches “{query}”. Try a department name, or browse the
          full IGOD directory of Mizoram government websites.
        </p>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {matches.map((p) => (
            <li
              key={p.name}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-zinc-300">
                  {p.category}
                </span>
                {p.launched && p.launched >= "2025" && (
                  <span className="rounded-md border border-green-500/40 px-2 py-0.5 text-green-300">
                    New · {formatDate(p.launched)}
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-xs text-zinc-500">{p.department}</p>
              <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                {p.description}
              </p>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-green-400 transition hover:text-green-300"
                >
                  {hostname(p.url)} ↗
                </a>
              ) : (
                <p className="mt-4 text-sm text-zinc-600">
                  Internal or no public address listed
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
