import { BookOpen, Clock, FolderKanban } from "lucide-react";

import RoadmapLessonItem from "@/features/roadmaps/components/roadmap-lesson-item";
import RoadmapProjectItem from "@/features/roadmaps/components/roadmap-project-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { RoadmapChapterAccordionProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapChapterAccordion({
  chapter,
}: RoadmapChapterAccordionProps) {
  const lessonsCount = chapter.items.filter(
    (item) => item.type === "lesson",
  ).length;
  const projectsCount = chapter.items.filter(
    (item) => item.type === "project",
  ).length;

  return (
    <Accordion>
      <AccordionItem
        value={chapter.id}
        className="overflow-hidden rounded-2xl border border-border bg-card/60 px-0 backdrop-blur"
      >
        <AccordionTrigger className="group px-5 py-5 text-left hover:no-underline sm:px-6">
          <div className="flex min-w-0 flex-1 items-start gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {chapter.title}
                </h3>

                <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Chapter
                </span>
              </div>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                {chapter.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="size-4" />
                  {lessonsCount} lessons
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <FolderKanban className="size-4" />
                  {projectsCount} projects
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {chapter.estimatedDuration}
                </span>
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-5 pb-5 sm:px-6">
          <div className="border-t border-border pt-5">
            <div className="space-y-3">
              {chapter.items.map((item) => {
                if (item.type === "project") {
                  return <RoadmapProjectItem key={item.id} project={item} />;
                }

                return <RoadmapLessonItem key={item.id} lesson={item} />;
              })}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
