import DashboardCard from "../components/DashboardCard";
import HealthChart from "../components/HealthChart";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-gray-400 text-sm">
          ← Back to Overview
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Mizoram Health Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Public health indicators, healthcare services, hospitals, and medical infrastructure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <DashboardCard
            title="Health Budget"
            value="₹840 Cr"
            note="Health and Family Welfare allocation"
          />

          <DashboardCard
            title="Life Expectancy"
            value="74 Years"
            note="Estimated average lifespan"
          />

          <DashboardCard
            title="Healthcare Focus"
            value="Public Health"
            note="Healthcare access and service delivery"
          />

        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Health Overview
          </h2>

          <p className="text-gray-400 leading-7">
            Mizoram has achieved relatively strong health outcomes compared
            with many parts of India. Improvements in healthcare access,
            immunization, maternal care, and disease prevention programmes
            have contributed to better public health indicators across the state.
          </p>
        </div>

        <HealthChart />

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Major Healthcare Institutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Civil Hospital, Aizawl</p>
            <p>• Zoram Medical College</p>
            <p>• District Hospitals</p>
            <p>• Community Health Centres</p>
            <p>• Primary Health Centres</p>
            <p>• Sub-Centres and Rural Clinics</p>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Key Health Challenges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
            <p>• Healthcare access in remote areas</p>
            <p>• Specialist doctor shortages</p>
            <p>• Non-communicable diseases</p>
            <p>• Mental health awareness</p>
            <p>• Healthcare infrastructure expansion</p>
            <p>• Medical workforce development</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          Sources: Health and Family Welfare Department, Mizoram Budget Documents,
          National Health Mission reports, and public health publications.
        </p>

      </div>
    </main>
  );
}