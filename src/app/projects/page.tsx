import type { Metadata } from "next";
import { Suspense } from "react";

import ProjectsFilters from "@/features/projects/components/projects-filters";
import ProjectsHeader from "@/features/projects/components/projects-header";
import ProjectsList from "@/features/projects/components/projects-list";
import ProjectsSearch from "@/features/projects/components/projects-search";
import ProjectsSearchSkeleton from "@/features/projects/components/skeleton/projects-search-skeleton";

export const metadata: Metadata = {
  title: "Projects | CodDock",
  description:
    "Explore CodDock projects designed to help developers build portfolio-ready proof through frontend, backend, full-stack, and AI agent projects.",
  robots: {
    index: false,
    follow: false,
  },
};

type ProjectsPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    difficulty?: string;
  }>;
};

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const { q, category, difficulty } = await searchParams;

  return (
    <section className="space-y-6">
      <ProjectsHeader />

      <Suspense fallback={<ProjectsSearchSkeleton />}>
        <ProjectsSearch />
      </Suspense>

      <ProjectsFilters
        activeCategory={category ?? "all"}
        activeDifficulty={difficulty ?? "all"}
      />

      <ProjectsList
        query={q ?? ""}
        category={category ?? "all"}
        difficulty={difficulty ?? "all"}
      />
    </section>
  );
}
