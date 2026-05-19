"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2020", cases: 120 },
  { year: "2021", cases: 180 },
  { year: "2022", cases: 260 },
  { year: "2023", cases: 210 },
  { year: "2024", cases: 320 },
];

export default function HealthChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Health Trend Overview
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="year" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="cases"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}