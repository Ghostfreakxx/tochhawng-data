import DataChart from "../components/DataChart";

export default function PopulationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Population Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Population, demographics, districts, urbanisation, and social indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Population
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              12.5 Lakh
            </p>

            <p className="text-gray-500 mt-2">
              Estimated population of Mizoram
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Districts
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              11
            </p>

            <p className="text-gray-500 mt-2">
              Administrative districts
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Urban Population
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              52%
            </p>

            <p className="text-gray-500 mt-2">
              Population residing in urban areas
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Population Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram is one of India's least populated states but has one of the
            highest literacy rates and urbanisation levels in the Northeast.
            Population growth has remained relatively moderate, while migration,
            education, and urban development continue to shape demographic trends.
          </p>
        </div>

        <DataChart
          title="Population Growth Trend (Lakh)"
          data={[
            { year: "2001", value: 8.9 },
            { year: "2011", value: 10.9 },
            { year: "2024", value: 12.5 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Demographic Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• High literacy population</p>
            <p>• Predominantly urbanising society</p>
            <p>• Young and educated workforce</p>
            <p>• Strong community-based social structure</p>
            <p>• Growing migration toward Aizawl</p>
            <p>• Increasing demand for housing and services</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Urban congestion in Aizawl</p>
            <p>• Employment opportunities for youth</p>
            <p>• Rural to urban migration</p>
            <p>• Infrastructure demand</p>
            <p>• Housing affordability</p>
            <p>• Balanced regional development</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Census of India, Statistical Handbook of Mizoram,
          Economic Survey Reports, and Government Publications.
        </p>

      </div>
    </main>
  );
}