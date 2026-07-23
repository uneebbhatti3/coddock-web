import { CheckCircle2 } from "lucide-react";

import type { ProjectRequirementsProps } from "@/features/projects/types/project-types";

export default function ProjectRequirements({
  requirements,
}: ProjectRequirementsProps) {
  return (
    <ul className="space-y-3">
      {requirements.map((requirement) => (
        <li
          key={requirement}
          className="flex gap-3 rounded-xl border border-border bg-background/60 p-4"
        >
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

          <span className="text-sm leading-6 text-muted-foreground">
            {requirement}
          </span>
        </li>
      ))}
    </ul>
  );
}
