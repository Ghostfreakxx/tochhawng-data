type DashboardCardProps = {
  title: string;
  value: string;
  note: string;
};

export default function DashboardCard({
  title,
  value,
  note,
}: DashboardCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-4xl font-bold mt-4 text-green-400">{value}</p>

      <p className="text-gray-500 mt-2">{note}</p>
    </div>
  );
}
