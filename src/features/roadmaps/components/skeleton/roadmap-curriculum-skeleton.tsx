import { Skeleton } from "@/components/ui/skeleton";
import RoadmapChapterAccordionSkeleton from "@/features/roadmaps/components/skeleton/roadmap-chapter-accordion-skeleton";

const chapterSkeletons = Array.from({ length: 5 });

export default function RoadmapCurriculumSkeleton() {
  return (
    <section className="space-y-4">
      <div>
        <Skeleton className="h-7 w-36 rounded-md" />

        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full max-w-xl rounded-md" />
          <Skeleton className="h-4 w-full max-w-md rounded-md" />
        </div>
      </div>

      <div className="space-y-3">
        {chapterSkeletons.map((_, index) => (
          <RoadmapChapterAccordionSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
