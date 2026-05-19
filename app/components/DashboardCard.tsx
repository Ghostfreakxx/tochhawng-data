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
      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className="text-4xl font-bold mt-3 text-green-400">
        {value}
      </h3>

      <p className="text-gray-500 mt-3 text-sm">
        {note}
      </p>
    </div>
  );
}