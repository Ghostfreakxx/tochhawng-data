export default function RuralPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Rural Development Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Rural development, MGNREGS, livelihood support, village infrastructure, and government contribution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              MGNREGS State Share
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹28 Cr
            </p>

            <p className="text-gray-500 mt-2">
              State share contribution under MGNREGS
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              State Contribution
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹127 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Mizoram Government contribution for rural development
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Core Focus
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Villages
            </p>

            <p className="text-gray-500 mt-2">
              Rural livelihood, infrastructure, and community development
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Rural Development Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Rural development remains central to Mizoram’s economic and social
            progress because a large section of the population depends on village
            livelihood, community infrastructure, agriculture-linked activities,
            and public employment programmes. MGNREGS continues to play an
            important role in supporting rural households through wage employment
            and local development works.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Rural Development Priorities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• MGNREGS implementation</p>
            <p>• Village infrastructure development</p>
            <p>• Rural livelihood support</p>
            <p>• Community assets creation</p>
            <p>• Road and local connectivity support</p>
            <p>• Strengthening village-level development works</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Timely release of funds</p>
            <p>• Sustainable rural employment</p>
            <p>• Maintenance of community assets</p>
            <p>• Migration from villages to towns</p>
            <p>• Monitoring and transparency</p>
            <p>• Balancing rural development across districts</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Rural Development Department Mizoram, MGNREGS public updates,
          Government of Mizoram department publications, and ministerial updates.
        </p>

      </div>
    </main>
  );
}