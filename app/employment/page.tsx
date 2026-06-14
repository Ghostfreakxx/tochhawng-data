export default function EmploymentPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Employment Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Employment, labour force, government recruitment, entrepreneurship, and livelihood trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Main Concern
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Graduate Jobs
            </p>

            <p className="text-gray-500 mt-2">
              Employment opportunities for educated youth
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Job Preference
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Government
            </p>

            <p className="text-gray-500 mt-2">
              Strong demand for secure public sector employment
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Entrepreneurship
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Growing
            </p>

            <p className="text-gray-500 mt-2">
              Increasing focus on startups and self-employment
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Employment Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Employment remains one of the most important socio-economic issues
            in Mizoram. Government jobs continue to attract large numbers of
            applicants, while the private sector, entrepreneurship, tourism,
            agriculture, and small businesses are increasingly important sources
            of livelihood and income generation.
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Major Employment Sources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Government Services</p>
            <p>• Education Sector</p>
            <p>• Healthcare Services</p>
            <p>• Agriculture and Allied Activities</p>
            <p>• Small Businesses and Trade</p>
            <p>• Tourism and Hospitality</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Graduate unemployment</p>
            <p>• Limited private sector opportunities</p>
            <p>• Skills mismatch in the labour market</p>
            <p>• Rural employment diversification</p>
            <p>• Migration for higher-paying jobs</p>
            <p>• Startup financing and business support</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Labour Bureau, Government of Mizoram publications,
          Economic Survey reports, and employment-related departmental data.
        </p>

      </div>
    </main>
  );
}