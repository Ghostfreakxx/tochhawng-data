import type { Datum } from "../data/types";
import { formatValue, type Unit } from "../lib/format";

type BarListProps = {
  title: string;
  description?: string;
  data: Datum[];
  unit?: Unit;
};

// Ranked horizontal bars drawn in plain HTML so long labels wrap on phones.
// Every value is printed beside its label, so no separate table is needed.
export default function BarList({ title, description, data, unit }: BarListProps) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <figure className="mt-6 rounded-2xl border border-line bg-surface p-6">
      <figcaption>
        <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            {description}
          </p>
        )}
      </figcaption>

      <ul className="mt-6 space-y-4">
        {data.map((d) => {
          const formatted = formatValue(d.value, unit);
          return (
            <li key={d.label} title={`${d.label}: ${formatted}`}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-ink-2">{d.label}</span>
                <span className="font-semibold tabular-nums text-ink">
                  {formatted}
                </span>
              </div>
              <div className="mt-2 h-3">
                <div
                  className="h-full rounded-r bg-chart"
                  style={{
                    width: `${max > 0 ? (d.value / max) * 100 : 0}%`,
                    minWidth: d.value > 0 ? 4 : 0,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}
