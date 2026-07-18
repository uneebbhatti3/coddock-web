import DashboardStatCard from "@/features/dashboard/components/dashboard-stat-card";
import { dashboardStats } from "@/features/dashboard/data/dashboard-data";

export default function DashboardStatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {dashboardStats.map((stat) => (
        <DashboardStatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
