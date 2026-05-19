export default function RoadsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">← Back to Overview</a>
        <h1 className="text-5xl font-bold mt-6 mb-4">Mizoram Roads Dashboard</h1>
        <p className="text-gray-400 mb-10">Roads, infrastructure, connectivity, and public works indicators.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Core Issue", "Connectivity", "Road access across hill districts"],
            ["Sector", "PWD", "Public works and infrastructure"],
            ["Status", "Demo", "Awaiting verified road data"],
          ].map(([title, value, note]) => (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6" key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-4xl font-bold mt-4 text-green-400">{value}</p>
              <p className="text-gray-500 mt-2">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}