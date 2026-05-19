"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type DataChartProps = {
  title: string;
  data: {
    year: string;
    value: number;
  }[];
};

export default function DataChart({
  title,
  data,
}: DataChartProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">
        {title}
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="year"
              stroke="#888"
            />

            <YAxis
              stroke="#888"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}