import BudgetPieChart from "../components/BudgetPieChart";
import Term from "../components/Term";

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
              Unemployment Rate
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              2.2%
            </p>

            <p className="text-gray-500 mt-2">
              PLFS 2022–23 — below the national average of 3.2%
            </p>

            <Term>
              Unemployment rate is the share of the labour force (people
              working or looking for work) who are without a job. A lower
              number generally means it&apos;s easier to find work.
            </Term>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold">
              Female Labour Force Participation
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-400">
              45.1%
            </p>

            <p className="text-gray-500 mt-2">
              PLFS 2022–23 — well above the national average of 37%
            </p>

            <Term>
              This is the share of working-age women who are either
              employed or actively looking for work. Mizoram&apos;s rate is
              among the highest in India.
            </Term>
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
            of livelihood and income generation. Official survey data (PLFS
            2022–23) shows Mizoram with a lower unemployment rate and a
            markedly higher female labour force participation rate than the
            national average, though — as in much of India — the workforce
            still leans heavily on agriculture rather than manufacturing.
          </p>
        </div>

        <BudgetPieChart
          title="Where Mizoram's Workforce Is Employed"
          note="Share of the working population by broad sector, PLFS 2022–23 (NITI Aayog, Macro and Fiscal Landscape of Mizoram)."
          data={[
            { name: "Services", value: 45.7 },
            { name: "Agriculture", value: 43.1 },
            { name: "Manufacturing", value: 5.4 },
            { name: "Other", value: 5.8 },
          ]}
        />

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
          Sources: Periodic Labour Force Survey (PLFS) 2022–23, Ministry of
          Statistics and Programme Implementation (MoSPI), as reported in
          NITI Aayog&apos;s &quot;Macro and Fiscal Landscape of the State of
          Mizoram&quot; (July 2025) — the most recent state-level labour
          data publicly available; Labour Bureau and Government of Mizoram
          publications.
        </p>

      </div>
    </main>
  );
}
