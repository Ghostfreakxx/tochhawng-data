import DataChart from "../components/DataChart";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Education Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Literacy, schools, colleges, universities, and educational development indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Literacy Rate
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
  98.2%
</p>

<p className="text-gray-500 mt-2">
  Recent reported literacy rate
</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Higher Education
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              MZU
            </p>

            <p className="text-gray-500 mt-2">
              Mizoram University leads higher education in the state
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Budget Allocation
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹2,374 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Education, Sports, Arts and Culture sector
            </p>
          </div>

        </div>
<div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-4">
    HSSLC Examination Results
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-black border border-zinc-800 rounded-xl p-5">
      <h3 className="text-lg font-semibold">
        Arts
      </h3>

      <p className="text-4xl font-bold mt-3 text-green-400">
        80.37%
      </p>

      <p className="text-gray-500 mt-2">
        HSSLC Arts Pass Percentage
      </p>
    </div>

    <div className="bg-black border border-zinc-800 rounded-xl p-5">
      <h3 className="text-lg font-semibold">
        Science
      </h3>

      <p className="text-4xl font-bold mt-3 text-green-400">
        81.67%
      </p>

      <p className="text-gray-500 mt-2">
        HSSLC Science Pass Percentage
      </p>
    </div>

    <div className="bg-black border border-zinc-800 rounded-xl p-5">
      <h3 className="text-lg font-semibold">
        Commerce
      </h3>

      <p className="text-4xl font-bold mt-3 text-green-400">
        87.37%
      </p>

      <p className="text-gray-500 mt-2">
        HSSLC Commerce Pass Percentage
      Highest Overall Stream
Commerce (87.37%)

Best Performance Year
2026

Trend
All streams improved between 2022–2026
      </p>
    </div>

  </div>
</div>
        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Education Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram has consistently maintained one of the highest literacy
            rates in India. The education sector is supported by a wide network
            of government and private schools, colleges, technical institutions,
            and universities. Continued investment in education remains a key
            component of the state's social development strategy.
          </p>
        </div>

        <DataChart
  title="Literacy Growth (%)"
  data={[
    { year: "2001", value: 88.8 },
    { year: "2011", value: 91.3 },
    { year: "2024", value: 98.2 },
  ]}
/>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Major Institutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Mizoram University (MZU)</p>
            <p>• ICFAI University Mizoram</p>
            <p>• Pachhunga University College (PUC)</p>
            <p>• Government Colleges across districts</p>
            <p>• Technical and Vocational Institutions</p>
            <p>• Teacher Education and Training Centres</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Graduate unemployment</p>
            <p>• Rural school infrastructure gaps</p>
            <p>• Digital learning access</p>
            <p>• Skill development and employability</p>
            <p>• Research and innovation capacity</p>
            <p>• Competitive examination preparation support</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Census of India, Mizoram Education Department,
          Mizoram Budget Documents, UGC and institutional publications.
        </p>

      </div>
    </main>
  );
}