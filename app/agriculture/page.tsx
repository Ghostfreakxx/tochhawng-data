import Term from "../components/Term";

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
            <h2 className="text-xl font-semibold">Bana Kaih Support</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹350 Cr</p>
            <p className="text-gray-500 mt-2">
              Handholding programme for farmers, Budget Estimate 2026–27
            </p>
            <Term>
              Bana Kaih is Mizoram&apos;s flagship farmer support scheme,
              providing inputs, market linkage, and handholding to help
              farmers grow and sell their produce more reliably.
            </Term>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Key Crop Procurement</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹150 Cr</p>
            <p className="text-gray-500 mt-2">
              Procurement of designated key crops, Budget Estimate 2026–27
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Agriculture Allocation</h2>
            <p className="text-4xl font-bold mt-4 text-green-400">₹727 Cr</p>
            <p className="text-gray-500 mt-2">
              Agriculture and allied activities, Budget 2024–25 (most recent
              department total available)
            </p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Crop Production
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Most recent publicly available figures by crop — dates vary by
            source, so each is labelled with its reporting year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black border border-zinc-800 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-green-400">Ginger</h3>
              <p className="text-3xl font-bold mt-3">61,001 t</p>
              <p className="text-gray-500 mt-2 text-sm">
                From 8,553 ha (2019–20). Mizoram grows roughly 12% of
                Northeast India&apos;s ginger.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-green-400">Mizo Chilli</h3>
              <p className="text-3xl font-bold mt-3">10,918 t</p>
              <p className="text-gray-500 mt-2 text-sm">
                From 11,196 ha (2019–20). Mizoram grows roughly 25% of
                Northeast India&apos;s chilli.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-green-400">Turmeric</h3>
              <p className="text-3xl font-bold mt-3">≈5,500 MT</p>
              <p className="text-gray-500 mt-2 text-sm">
                Expected yield from about 3,090 ha (Department of
                Horticulture).
              </p>
            </div>
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
          Sources: Mizoram Budget Speech 2026–27 (DIPR / Finance Department,
          Government of Mizoram), PRS Legislative Research — Mizoram Budget
          Analysis 2026–27, Department of Agriculture (Government of
          Mizoram), Department of Horticulture (Government of Mizoram), and
          Northeast Institute of Science and Technology (NEIST) crop data.
        </p>
      </div>
    </main>
  );
}