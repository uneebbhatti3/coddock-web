import { CircleCheckBig } from "lucide-react";

import type { ProjectAcceptanceCriteriaProps } from "@/features/projects/types/project-types";

export default function ProjectAcceptanceCriteria({
  acceptanceCriteria,
}: ProjectAcceptanceCriteriaProps) {
  return (
    <ul className="space-y-3">
      {acceptanceCriteria.map((criterion) => (
        <li
          key={criterion}
          className="flex gap-3 rounded-xl border border-primary/20 bg-primary/10 p-4"
        >
          <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-primary" />

          <span className="text-sm leading-6 text-muted-foreground">
            {criterion}
          </span>
        </li>
      ))}
    </ul>
  );
}
