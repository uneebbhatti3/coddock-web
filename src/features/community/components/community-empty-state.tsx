import { HelpCircle } from "lucide-react";

import AskQuestionDialog from "@/features/community/components/ask-question-dialog";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const starterPrompts = [
  "Which roadmap should I start with?",
  "How can I improve my project README?",
  "What should I build after learning React?",
];

export default function CommunityEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6 sm:p-10">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <HelpCircle className="size-7" />
            </div>
          </EmptyMedia>

          <EmptyTitle>No discussions yet</EmptyTitle>
        </EmptyHeader>

        <EmptyContent>
          <EmptyDescription>
            Start the first useful discussion. Ask about a roadmap, project
            blocker, GitHub structure, portfolio improvement, or anything you
            are trying to understand as a developer.
          </EmptyDescription>

          <div className="mt-5 grid gap-2 text-left">
            {starterPrompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-muted-foreground"
              >
                {prompt}
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <AskQuestionDialog />
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
