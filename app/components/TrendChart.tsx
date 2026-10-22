"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Datum } from "../data/types";
import { formatValue, type Unit } from "../lib/format";

const SERIES = "#16a34a";
const SURFACE = "#18181b";
const GRID = "#27272a";
const AXIS = "#3f3f46";
const MUTED = "#a1a1aa";
const INK = "#e4e4e7";

type TrendChartProps = {
  title: string;
  description?: string;
  data: Datum[];
  kind: "line" | "column";
  unit?: Unit;
  yDomain?: [number, number];
  valueLabel?: string;
};

type LabelProps = {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  index?: number;
};

export default function TrendChart({
  title,
  description,
  data,
  kind,
  unit,
  yDomain,
  valueLabel = "Value",
}: TrendChartProps) {
  const format = (value: number) => formatValue(value, unit);
  const tick = { fill: MUTED, fontSize: 12 };

  const tooltip = (
    <Tooltip
      cursor={kind === "line" ? { stroke: AXIS } : { fill: "rgba(255,255,255,0.04)" }}
      content={({ active, payload, label }) =>
        active && payload?.length ? (
          <div className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm shadow-lg">
            <p className="text-zinc-400">{label}</p>
            <p className="font-semibold text-white">
              {format(Number(payload[0].value))}
            </p>
          </div>
        ) : null
      }
    />
  );

  // Lines label only their final point; columns label every cap.
  const renderLabel = (props: LabelProps) => {
    const { index = 0 } = props;
    if (kind === "line" && index !== data.length - 1) return null;
    const x = Number(props.x) + (kind === "column" ? Number(props.width) / 2 : 0);
    const y = Number(props.y) - 10;
    return (
      <text x={x} y={y} fill={INK} fontSize={12} textAnchor="middle">
        {format(data[index].value)}
      </text>
    );
  };

  return (
    <figure className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <figcaption>
        <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            {description}
          </p>
        )}
      </figcaption>

      <div className="mt-6 h-72">
        <ResponsiveContainer
          width="100%"
          height="100%"
          initialDimension={{ width: 640, height: 288 }}
        >
          {kind === "line" ? (
            <LineChart data={data} margin={{ top: 24, right: 24, bottom: 0, left: 0 }}>
              <CartesianGrid vertical={false} stroke={GRID} />
              <XAxis
                dataKey="label"
                tick={tick}
                tickLine={false}
                axisLine={{ stroke: AXIS }}
                padding={{ left: 16, right: 16 }}
              />
              <YAxis
                domain={yDomain ?? [0, "auto"]}
                tick={tick}
                tickLine={false}
                axisLine={false}
                tickFormatter={format}
                width={56}
              />
              {tooltip}
              <Line
                type="linear"
                dataKey="value"
                stroke={SERIES}
                strokeWidth={2}
                dot={{ r: 4, fill: SERIES, stroke: SURFACE, strokeWidth: 2 }}
                activeDot={{ r: 6, fill: SERIES, stroke: SURFACE, strokeWidth: 2 }}
                isAnimationActive={false}
              >
                <LabelList dataKey="value" content={renderLabel} />
              </Line>
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 24, right: 8, bottom: 0, left: 8 }}>
              <XAxis
                dataKey="label"
                tick={tick}
                tickLine={false}
                axisLine={{ stroke: AXIS }}
              />
              <YAxis hide domain={[0, "auto"]} />
              {tooltip}
              <Bar
                dataKey="value"
                fill={SERIES}
                radius={[4, 4, 0, 0]}
                maxBarSize={24}
                isAnimationActive={false}
              >
                <LabelList dataKey="value" content={renderLabel} />
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <details className="mt-4 text-sm text-zinc-400">
        <summary className="cursor-pointer select-none transition hover:text-white">
          Show data table
        </summary>
        <table className="mt-3 w-full max-w-sm text-left">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-500">
              <th className="py-2 font-medium">Period</th>
              <th className="py-2 text-right font-medium">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label} className="border-b border-zinc-800/60">
                <td className="py-2">{d.label}</td>
                <td className="py-2 text-right tabular-nums text-zinc-200">
                  {format(d.value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
