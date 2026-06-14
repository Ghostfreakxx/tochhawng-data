export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-gray-400 text-sm">← Back to Overview</a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Agriculture Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Agriculture, allied activities, cash crops, rural livelihood, and market support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Agriculture Allocation</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹727 Cr</p>
            <p className="text-gray-500 mt-2">
              Agriculture and allied activities, Budget 2024–25
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Bana Kaih Support</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹200 Cr</p>
            <p className="text-gray-500 mt-2">
              Handholding programme for farmers and livelihood support
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Key Crop Support</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">5 Crops</p>
            <p className="text-gray-500 mt-2">
              Broom, ginger, turmeric, Mizo chilli, and local paddy
            </p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Agriculture Focus
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram’s agriculture sector is closely linked with rural livelihood,
            cash crops, horticulture, and market access. Recent policy focus has
            moved toward farmer support, minimum support price mechanisms, crop
            procurement, and better value chains for local produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            ["Ginger", "Major commercial crop"],
            ["Turmeric", "Supported local produce"],
            ["Mizo Chilli", "High value local crop"],
            ["Broom", "Important rural cash crop"],
          ].map(([title, note]) => (
            <div
              key={title}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
            >
              <h3 className="text-xl font-semibold text-green-400">{title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Market access and transport cost</p>
            <p>• Storage and processing facilities</p>
            <p>• Dependence on middlemen and price fluctuation</p>
            <p>• Need for value addition and export channels</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Source reference: Mizoram Budget 2024–25, Budget Speech 2025–26,
          and PRS Mizoram Budget Analysis.
        </p>
      </div>
    </main>
  );
}