"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const budgetData = [
  { department: "Education", amount: 2031 },
  { department: "PWD & Infrastructure", amount: 1580 },
  { department: "Health & Family Welfare", amount: 1245 },
  { department: "Rural Development", amount: 1120 },
  { department: "Police", amount: 890 },
];

const COLORS = ["#22c55e", "#38bdf8", "#f97316", "#a855f7", "#ef4444"];

export default function BudgetPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Budget Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Public finance overview of Mizoram government departments. Demo figures for layout testing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Tracked Departments</p>
            <h2 className="text-4xl font-bold mt-3">5</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Total Shown</p>
            <h2 className="text-4xl font-bold mt-3">₹6,866 Cr</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">Status</p>
            <h2 className="text-4xl font-bold mt-3">Demo</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Department Allocation</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData}>
                  <XAxis dataKey="department" tick={{ fill: "#a1a1aa", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#22c55e" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Budget Share</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetData}
                    dataKey="amount"
                    nameKey="department"
                    outerRadius={110}
                    label
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={entry.department} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {budgetData.map((item) => (
            <div
              key={item.department}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">{item.department}</h2>
              <div className="text-3xl font-bold text-green-400">
                ₹{item.amount} Cr
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Note: These are placeholder figures until verified data from official Mizoram budget documents is added.
        </p>
      </div>
    </main>
  );
}