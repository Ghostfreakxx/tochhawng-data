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
          Literacy, schools, colleges, and education indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Literacy Rate
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              91.3%
            </p>

            <p className="text-gray-500 mt-2">
              One of India’s highest
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Higher Education
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Growing
            </p>

            <p className="text-gray-500 mt-2">
              Colleges and universities
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
              Education, Sports, Arts and Culture
            </p>
          </div>

        </div>

        <DataChart
          title="Literacy Growth"
          data={[
            { year: "2001", value: 88.5 },
            { year: "2011", value: 91.3 },
            { year: "2024", value: 93.2 },
          ]}
        />

      </div>
    </main>
  );
}