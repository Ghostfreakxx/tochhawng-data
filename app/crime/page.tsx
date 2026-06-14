import DataChart from "../components/DataChart";

export default function CrimePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Crime Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Crime, drugs, cybercrime, border security, and public safety indicators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Main Concern
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              Drugs
            </p>

            <p className="text-gray-500 mt-2">
              Narcotics, trafficking, and youth vulnerability
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Cybercrime Cases
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              364
            </p>

            <p className="text-gray-500 mt-2">
              Reported cases from 2020–2026 research dataset
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Police Budget
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              ₹726 Cr
            </p>

            <p className="text-gray-500 mt-2">
              Police and internal security allocation
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Public Safety Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram faces a complex public safety environment shaped by drug
            trafficking, cross-border movement, online fraud, financial scams,
            and cyber hygiene gaps among citizens. Digital crime is becoming a
            growing concern as mobile banking, online payments, and social media
            use continue to expand.
          </p>
        </div>

        <DataChart
          title="Reported Cybercrime Cases"
          data={[
            { year: "2020", value: 20 },
            { year: "2021", value: 46 },
            { year: "2022", value: 158 },
            { year: "2023", value: 62 },
            { year: "2024", value: 48 },
            { year: "2025", value: 24 },
            { year: "2026", value: 6 },
          ]}
        />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Crime Concerns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Drug trafficking and narcotics movement</p>
            <p>• Online financial scams and phishing</p>
            <p>• Cross-border smuggling networks</p>
            <p>• Youth vulnerability and addiction risks</p>
            <p>• Identity theft and digital fraud</p>
            <p>• Need for cyber hygiene awareness</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Mizoram Police cybercrime data used in research dataset,
          NCRB reports, Mizoram Budget documents, and public safety reports.
        </p>

      </div>
    </main>
  );
}