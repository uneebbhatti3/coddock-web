import { PenLine, Users } from "lucide-react";
import Link from "next/link";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { buttonVariants } from "@/components/ui/button";
import { communityPrompts } from "@/features/dashboard/data/dashboard-data";
import { cn } from "@/lib/utils";

export default function ForumEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/60">
      <Empty className="">
        <EmptyHeader>
          <EmptyMedia>
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Users className="size-7" />
            </div>
          </EmptyMedia>

          <EmptyTitle>No questions yet</EmptyTitle>
        </EmptyHeader>

        <EmptyContent>
          <EmptyDescription>
            Start the first discussion. Ask about a roadmap, project blocker,
            portfolio improvement, GitHub structure, or anything you are trying
            to understand as a developer.
          </EmptyDescription>

          <div className="mt-5 grid gap-2 text-left">
            {communityPrompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-xl border border-border bg-card/60 px-3 py-2 text-sm text-muted-foreground"
              >
                {prompt}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/community"
              className={cn(buttonVariants(), "w-full rounded-xl sm:w-auto")}
            >
              <PenLine className="size-4" />
              Ask first question
            </Link>

            <Link
              href="/learning-roadmaps"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full rounded-xl sm:w-auto",
              )}
            >
              Explore roadmaps
            </Link>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
