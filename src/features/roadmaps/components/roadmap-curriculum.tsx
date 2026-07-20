import RoadmapChapterAccordion from "@/features/roadmaps/components/roadmap-chapter-accordion";
import type { RoadmapCurriculumProps } from "@/features/roadmaps/types/roadmaps-types";
import { Suspense } from "react";
import RoadmapChapterAccordionSkeleton from "./skeleton/roadmap-chapter-accordion-skeleton";

export default function RoadmapCurriculum({
  chapters,
}: RoadmapCurriculumProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Curriculum
        </h2>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Expand each chapter to see its lessons and projects. Projects are
          marked clearly so you know where to build.
        </p>
      </div>

      <div className="space-y-3">
        <Suspense fallback={<RoadmapChapterAccordionSkeleton />}>
          {chapters.map((chapter, index) => (
            <RoadmapChapterAccordion
              key={chapter.id}
              chapter={chapter}
              index={index}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
