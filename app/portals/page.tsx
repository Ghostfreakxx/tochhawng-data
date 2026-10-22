import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Panel from "../components/Panel";
import PortalDirectory from "../components/PortalDirectory";
import SourceList from "../components/SourceList";
import { StatGrid } from "../components/StatCard";
import {
  portalSources,
  portalStats,
  portals,
  recentLaunches,
} from "../data/portals";
import { formatDate, hostname } from "../lib/format";

export const metadata: Metadata = {
  title: "Government Portals",
  description:
    "Directory of Mizoram government websites and online services, including portals launched in 2025 and 2026.",
};

export default function PortalsPage() {
  return (
    <>
      <PageHeader
        title="Government Portals"
        description="Mizoram has moved dozens of services online in the last two years. Here is what launched, when, and where to find it."
      />

      <StatGrid stats={portalStats} />

      <Panel
        title="Launch timeline"
        description="Portals and digital systems launched since 2025, newest first."
      >
        <ol className="relative space-y-7 border-l border-zinc-800 pl-6">
          {recentLaunches.map((p) => (
            <li key={p.name}>
              <span
                className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-green-400"
                aria-hidden
              />
              <p className="text-sm text-zinc-500">
                {formatDate(p.launched!)} · {p.department}
              </p>
              <h3 className="mt-1 font-semibold text-white">{p.name}</h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-400">
                {p.description}
              </p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-green-400 transition hover:text-green-300"
                >
                  {hostname(p.url)} ↗
                </a>
              )}
            </li>
          ))}
        </ol>
      </Panel>

      <Panel
        title="Portal directory"
        description="New and established government websites. Search by name, department or service."
      >
        <PortalDirectory portals={portals} />
      </Panel>

      <SourceList sources={portalSources} />
    </>
  );
}
