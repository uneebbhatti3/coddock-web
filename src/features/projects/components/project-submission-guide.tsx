import { UploadCloud } from "lucide-react";

import type { ProjectSubmissionGuideProps } from "@/features/projects/types/project-types";

export default function ProjectSubmissionGuide({
  submissionInstructions,
}: ProjectSubmissionGuideProps) {
  return (
    <ol className="space-y-3">
      {submissionInstructions.map((instruction, index) => (
        <li
          key={instruction}
          className="flex gap-3 rounded-xl border border-border bg-background/60 p-4"
        >
          <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
            {index + 1}
          </div>

          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-1.5 text-sm font-medium text-foreground">
              <UploadCloud className="size-4 text-primary" />
              Step {index + 1}
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              {instruction}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
