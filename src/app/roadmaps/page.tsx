import type { Metadata } from "next";
import { Suspense } from "react";

import RoadmapsFilters from "@/features/roadmaps/components/roadmaps-filters";
import RoadmapsHeader from "@/features/roadmaps/components/roadmaps-header";
import RoadmapsList from "@/features/roadmaps/components/roadmaps-list";
import RoadmapsSearch from "@/features/roadmaps/components/roadmaps-search";
import RoadmapsSearchSkeleton from "@/features/roadmaps/components/skeleton/roadmaps-search-skeleton";
import RoadmapsHeaderSkeleton from "@/features/roadmaps/components/skeleton/roadmaps-header-skeleton";
import RoadmapsFiltersSkeleton from "@/features/roadmaps/components/skeleton/roadmaps-filters-skeleton";
import RoadmapsListSkeleton from "@/features/roadmaps/components/skeleton/roadmaps-list-skeleton";
import { RoadmapsPageProps } from "@/features/roadmaps/types/roadmaps-types";

export const metadata: Metadata = {
  title: "Learning Roadmaps | CodDock",
  description:
    "Explore CodDock learning roadmaps for frontend, backend, full-stack, and AI agent development. Learn through structured chapters and portfolio-ready projects.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RoadmapsPage({
  searchParams,
}: RoadmapsPageProps) {
  const { q, path } = await searchParams;

  return (
    <section className="space-y-6">
      <Suspense fallback={<RoadmapsHeaderSkeleton />}>
        <RoadmapsHeader />
      </Suspense>

      <Suspense fallback={<RoadmapsSearchSkeleton />}>
        <RoadmapsSearch />
      </Suspense>

      <Suspense fallback={<RoadmapsFiltersSkeleton />}>
        <RoadmapsFilters activePath={path ?? "all"} />
      </Suspense>

      <Suspense fallback={<RoadmapsListSkeleton />}>
        <RoadmapsList query={q ?? ""} path={path ?? "all"} />
      </Suspense>
    </section>
  );
}
