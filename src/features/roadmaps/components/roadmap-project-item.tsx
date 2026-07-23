import { Clock, FolderKanban } from "lucide-react";

import type { RoadmapProjectItemProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapProjectItem({
  project,
}: RoadmapProjectItemProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-background/60 text-primary">
          <FolderKanban className="size-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-semibold text-foreground">
              {project.title}
            </h4>

            <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
              Project
            </span>

            <span className="rounded-full border border-primary/20 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-primary">
              {project.difficulty}
            </span>
          </div>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          {project.estimatedDuration ? (
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              {project.estimatedDuration}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
