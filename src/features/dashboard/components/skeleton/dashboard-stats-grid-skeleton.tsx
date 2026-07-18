import DashboardStatCardSkeleton from "@/features/dashboard/components/skeleton/dashboard-stat-card-skeleton";

const skeletonStats = Array.from({ length: 3 });

export default function DashboardStatsGridSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {skeletonStats.map((_, index) => (
        <DashboardStatCardSkeleton key={index} />
      ))}
    </div>
  );
}
