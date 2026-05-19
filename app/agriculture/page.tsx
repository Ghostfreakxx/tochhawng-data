export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">← Back to Overview</a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Agriculture Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Farming, crops, markets, and rural economy indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Major Crop</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">Ginger</p>
            <p className="text-gray-500 mt-2">Important commercial crop</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Sector Focus</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">Rural</p>
            <p className="text-gray-500 mt-2">Livelihood and farming support</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Status</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">Demo</p>
            <p className="text-gray-500 mt-2">Awaiting verified data</p>
          </div>
        </div>
      </div>
    </main>
  );
}