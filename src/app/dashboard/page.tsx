import type { Metadata } from "next";
import { Suspense } from "react";
import CommunityPreview from "@/features/dashboard/components/community-preview";
import DashboardHero from "@/features/dashboard/components/dashboard-hero";
import DashboardStatsGrid from "@/features/dashboard/components/dashboard-stats-grid";
import GettingStartedChecklist from "@/features/dashboard/components/getting-started-checklist";
import DashboardHeroSkeleton from "@/features/dashboard/components/skeleton/dashboard-hero-skeleton";
import DashboardStatsGridSkeleton from "@/features/dashboard/components/skeleton/dashboard-stats-grid-skeleton";
import GettingStartedChecklistSkeleton from "@/features/dashboard/components/skeleton/getting-started-checklist-skeleton";
import RoadmapPreviewSkeleton from "@/features/dashboard/components/skeleton/roadmap-preview-skeleton";
import RoadmapPreview from "@/features/dashboard/components/roadmap-preview";

export const metadata: Metadata = {
  title: "Dashboard | CodDock",
  description:
    "Manage your CodDock learning progress, roadmaps, projects, community activity, and developer growth journey from one dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  const hasUserActivity = false;

  return (
    <section className="space-y-8">
      <Suspense fallback={<DashboardHeroSkeleton />}>
        <DashboardHero />
      </Suspense>

      {hasUserActivity ? (
        <Suspense fallback={<DashboardStatsGridSkeleton />}>
          <DashboardStatsGrid />
        </Suspense>
      ) : (
        <div className="">
          <Suspense fallback={<GettingStartedChecklistSkeleton />}>
            <GettingStartedChecklist />
          </Suspense>
        </div>
      )}

      <Suspense fallback={<RoadmapPreviewSkeleton />}>
        <RoadmapPreview />
      </Suspense>

      <CommunityPreview />
    </section>
  );
}
