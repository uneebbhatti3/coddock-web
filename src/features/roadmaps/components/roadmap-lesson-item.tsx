import { BookOpen, Clock } from "lucide-react";

import type { RoadmapLessonItemProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapLessonItem({ lesson }: RoadmapLessonItemProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card/70 text-muted-foreground">
          <BookOpen className="size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-medium text-foreground">
              {lesson.title}
            </h4>

            <span className="rounded-full border border-border bg-card/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              Lesson
            </span>
          </div>

          {lesson.description ? (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {lesson.description}
            </p>
          ) : null}

          {lesson.estimatedDuration ? (
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {lesson.estimatedDuration}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
