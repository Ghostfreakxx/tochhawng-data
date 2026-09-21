"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Slice = {
  name: string;
  value: number;
};

type BudgetPieChartProps = {
  title: string;
  note?: string;
  data: Slice[];
};

const COLORS = ["#22c55e", "#4ade80", "#0ea5e9", "#a3a3a3"];

export default function BudgetPieChart({
  title,
  note,
  data,
}: BudgetPieChartProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-1 text-white">
        {title}
      </h2>

      {note && (
        <p className="text-gray-500 text-sm mb-6">
          {note}
        </p>
      )}

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label={(entry) => `${entry.value}%`}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
