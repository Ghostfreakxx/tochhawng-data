import type { Stat } from "../data/types";

export default function StatCard({ label, value, note }: Stat) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-subtle">{note}</p>
    </div>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  // Six cards fill two rows of three; anything else uses rows of four.
  const columns = stats.length === 6 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${columns}`}>
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
