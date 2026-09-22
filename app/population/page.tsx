import DataChart from "../components/DataChart";
import Term from "../components/Term";

const districts2011 = [
  { name: "Aizawl", population: "4,00,309", density: "113", sexRatio: "1009" },
  { name: "Lunglei", population: "1,32,960", density: "—", sexRatio: "936" },
  { name: "Champhai", population: "1,25,745", density: "39", sexRatio: "984" },
  { name: "Lawngtlai", population: "1,17,894", density: "46", sexRatio: "945" },
  { name: "Mamit", population: "86,364", density: "29", sexRatio: "927" },
  { name: "Kolasib", population: "83,955", density: "61", sexRatio: "956" },
  { name: "Serchhip", population: "64,937", density: "46", sexRatio: "977" },
  { name: "Siaha", population: "56,574", density: "40", sexRatio: "979" },
];

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

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Sex Ratio
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              976
            </p>

            <p className="text-gray-500 mt-2">
              Females per 1,000 males, Census 2011
            </p>

            <Term>
              Sex ratio counts how many females there are for every 1,000
              males. A number close to or above 1,000 generally reflects a
              healthier gender balance.
            </Term>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Decadal Growth
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              23.5%
            </p>

            <p className="text-gray-500 mt-2">
              Population growth, 2001–2011 (Census)
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Population Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram is one of India&apos;s least populated states but has one of the
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
            Districts at a Glance (Census 2011)
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Mizoram had 8 districts at the time of the 2011 Census. On 3 June
            2019 the government notified 3 new districts — Hnahthial (from
            Lunglei), Khawzawl (from Champhai), and Saitual (from Aizawl and
            Champhai) — bringing the total to today&apos;s 11. Figures below
            are shown for the original 8, as that is the most recent full
            census.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-zinc-800">
                  <th className="py-2 pr-4">District</th>
                  <th className="py-2 pr-4">Population</th>
                  <th className="py-2 pr-4">Density (/km²)</th>
                  <th className="py-2 pr-4">Sex Ratio</th>
                </tr>
              </thead>

              <tbody className="text-gray-400">
                {districts2011.map((d) => (
                  <tr key={d.name} className="border-b border-zinc-900">
                    <td className="py-2 pr-4 text-gray-200">{d.name}</td>
                    <td className="py-2 pr-4">{d.population}</td>
                    <td className="py-2 pr-4">{d.density}</td>
                    <td className="py-2 pr-4">{d.sexRatio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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
          Sources: Census of India 2011 (district-wise population, density,
          and sex ratio), Statistical Handbook of Mizoram, Economic Survey
          Reports, and Government of Mizoram publications. India&apos;s next
          census has been delayed nationally, so 2011 remains the most
          recent full count.
        </p>

      </div>
    </main>
  );
}