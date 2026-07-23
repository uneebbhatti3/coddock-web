import { Wrench } from "lucide-react";

import type { ProjectTechStackProps } from "@/features/projects/types/project-types";

export default function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map((tool) => (
        <span
          key={tool}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
        >
          <Wrench className="size-3.5" />
          {tool}
        </span>
      ))}
    </div>
  );
}
