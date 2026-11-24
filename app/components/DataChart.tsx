"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type DataChartProps = {
  title: string;
  data: {
    year: string;
    value: number;
  }[];
  /** "line" for time series, "bar" for comparing categories. */
  type?: "line" | "bar";
  /** Unit shown in the tooltip, e.g. "₹ Cr" or "%". */
  unit?: string;
  note?: string;
};

const tooltipStyle = {
  backgroundColor: "#18181b",
  border: "1px solid #3f3f46",
  borderRadius: 8,
  color: "#fff",
};

export default function DataChart({
  title,
  data,
  type = "line",
  unit,
  note,
}: DataChartProps) {
  const formatter = (v: unknown) =>
    [`${Number(v).toLocaleString("en-IN")}${unit ? ` ${unit}` : ""}`, ""] as [string, string];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid stroke="#27272a" vertical={false} />
              <XAxis dataKey="year" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                formatter={formatter}
                contentStyle={tooltipStyle}
                cursor={{ fill: "#27272a" }}
              />
              <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid stroke="#27272a" vertical={false} />
              <XAxis dataKey="year" stroke="#888" />
              <YAxis stroke="#888" domain={["auto", "auto"]} />
              <Tooltip formatter={formatter} contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {note && <p className="text-gray-500 text-sm mt-4">{note}</p>}
    </div>
  );
}
