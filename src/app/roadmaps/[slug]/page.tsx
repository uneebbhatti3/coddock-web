import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RoadmapCurriculum from "@/features/roadmaps/components/roadmap-curriculum";
import RoadmapDetailHeader from "@/features/roadmaps/components/roadmap-detail-header";
import { getRoadmapBySlug } from "@/features/roadmaps/data/roadmaps-data";
import { Suspense } from "react";
import RoadmapDetailHeaderSkeleton from "@/features/roadmaps/components/skeleton/roadmap-detail-header-skeleton";
import RoadmapCurriculumSkeleton from "@/features/roadmaps/components/skeleton/roadmap-curriculum-skeleton";

type RoadmapDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: RoadmapDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    return {
      title: "Roadmap Not Found | CodDock",
      description: "The requested CodDock learning roadmap was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${roadmap.title} | CodDock`,
    description: roadmap.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function RoadmapDetailPage({
  params,
}: RoadmapDetailPageProps) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6">
      <Suspense fallback={<RoadmapDetailHeaderSkeleton />}>
        <RoadmapDetailHeader roadmap={roadmap} />
      </Suspense>

      <Suspense fallback={<RoadmapCurriculumSkeleton />}>
        <RoadmapCurriculum chapters={roadmap.chapters} />
      </Suspense>
    </section>
  );
}
