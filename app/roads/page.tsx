export default function RoadsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Roads Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Roads, highways, connectivity, public works, and transport infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Roads & Bridges Budget
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹645 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Infrastructure and transport allocation
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Core Issue
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Connectivity
            </p>

            <p className="text-gray-500 mt-2">
              Road access across hill districts
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Lead Agency
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              PWD
            </p>

            <p className="text-gray-500 mt-2">
              Public Works Department
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Infrastructure Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Road connectivity remains one of the most important development
            priorities in Mizoram. Mountainous terrain, heavy rainfall,
            landslides, and maintenance costs create significant challenges
            for transport infrastructure across the state.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Major Road Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• National Highway Connectivity</p>
            <p>• Kaladan Multi-Modal Corridor Linkages</p>
            <p>• District Road Upgradation</p>
            <p>• Rural Road Development</p>
            <p>• Border Area Connectivity</p>
            <p>• Urban Road Improvement Projects</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Landslides and erosion</p>
            <p>• High construction costs</p>
            <p>• Difficult terrain</p>
            <p>• Maintenance funding requirements</p>
            <p>• Rural accessibility gaps</p>
            <p>• Weather-related disruptions</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Public Works Department, Mizoram Budget Documents,
          Ministry of Road Transport and Highways, and infrastructure reports.
        </p>

      </div>
    </main>
  );
}