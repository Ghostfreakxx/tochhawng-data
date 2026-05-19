import DashboardCard from "../components/DashboardCard";
import HealthChart from "../components/HealthChart";
export default function HealthPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Mizoram Health Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Public health indicators and healthcare statistics.
        </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <DashboardCard
    title="Hospitals"
    value="56"
    note="Government healthcare centres"
  />

  <DashboardCard
    title="Doctors"
    value="1,240"
    note="Registered medical staff"
  />

  <DashboardCard
    title="Life Expectancy"
    value="74 yrs"
    note="Estimated average lifespan"
  />
</div>
 </div>
 <HealthChart />
</main>
  );
}