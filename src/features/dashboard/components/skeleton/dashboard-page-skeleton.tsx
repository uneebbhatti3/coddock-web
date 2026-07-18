import CommunityPreviewSkeleton from "@/features/dashboard/components/skeleton/community-preview-skeleton";
import DashboardHeroSkeleton from "@/features/dashboard/components/skeleton/dashboard-hero-skeleton";
import GettingStartedChecklistSkeleton from "@/features/dashboard/components/skeleton/getting-started-checklist-skeleton";

export default function DashboardPageSkeleton() {
  return (
    <section className="space-y-8">
      <DashboardHeroSkeleton />
      <GettingStartedChecklistSkeleton />
      <CommunityPreviewSkeleton />
    </section>
  );
}
