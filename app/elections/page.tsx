import DataChart from "../components/DataChart";

export default function ElectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Elections Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Elections, voter participation, representation, and democratic trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Assembly Seats
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              40
            </p>

            <p className="text-gray-500 mt-2">
              Mizoram Legislative Assembly constituencies
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Lok Sabha Seats
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              1
            </p>

            <p className="text-gray-500 mt-2">
              Mizoram representation in Parliament
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Rajya Sabha Seats
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              1
            </p>

            <p className="text-gray-500 mt-2">
              Upper House representation
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Election Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram consistently records high voter participation compared to
            many parts of India. Elections in the state are characterized by
            strong public engagement, peaceful transitions of power, and active
            participation across urban and rural constituencies.
          </p>
        </div>

        <DataChart
          title="Assembly Election Voter Turnout (%)"
          data={[
            { year: "2008", value: 75.2 },
            { year: "2013", value: 81.3 },
            { year: "2018", value: 80.4 },
            { year: "2023", value: 80.7 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Electoral Institutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Election Commission of India</p>
            <p>• Chief Electoral Officer, Mizoram</p>
            <p>• State Legislative Assembly</p>
            <p>• Parliamentary Constituency Administration</p>
            <p>• Polling Stations and Electoral Rolls</p>
            <p>• Voter Awareness Programmes</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Election Facts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• 40 Assembly Constituencies</p>
            <p>• 1 Lok Sabha Constituency</p>
            <p>• 1 Rajya Sabha Seat</p>
            <p>• High voter turnout tradition</p>
            <p>• Regular democratic transfer of power</p>
            <p>• Strong electoral participation across districts</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Election Commission of India, Chief Electoral Officer Mizoram,
          Delimitation records, and official election statistics.
        </p>

      </div>
    </main>
  );
}