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
  Drug Seizure Value
</h2>

<p className="text-4xl font-bold mt-4 text-green-400">
  ₹318.19 Cr
</p>

<p className="text-gray-500 mt-2">
  Drugs Against War initiative (2023–2025)
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
  Mizoram's public safety environment includes challenges related to
  narcotics trafficking, cybercrime, cross-border smuggling, illegal
  arms movement, and public security. Between 2023 and 2025, the Home
  Department reported 517 drug cases, 573 arrests, illegal arms seizures,
  forensic investigations, and continued modernization of police, fire,
  and correctional services.
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
<div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-4">
    Home Department Highlights (2023–2025)
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
    <p>• Drug Cases Registered: 517</p>
    <p>• Drug Arrests: 573</p>
    <p>• Drug Seizure Value: ₹318.19 Crore</p>
    <p>• Illegal Weapons Seized: 54</p>
    <p>• Ammunition Recovered: 28,005</p>
    <p>• Arms Related Cases: 46</p>
    <p>• Forensic Samples Tested: 15,662</p>
    <p>• Fingerprints Recorded: 10,265</p>
    <p>• Fire Service Modernisation: ₹40 Crore</p>
    <p>• Jail Infrastructure Investment: ₹55 Crore</p>
  </div>
</div>
        <p className="text-gray-600 text-sm mt-8">
          Sources: Mizoram Police cybercrime research dataset, Home Department
performance reports (2023–2025), NCRB reports, Mizoram Budget
documents, and public safety publications.
        </p>

      </div>
    </main>
  );
}