import { ArrowRight } from "lucide-react";
import Link from "next/link";

import ForumEmptyState from "@/features/dashboard/components/forum-empty-state";
import { forumPosts } from "@/features/dashboard/data/dashboard-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CommunityPreview() {
  const hasForumPosts = forumPosts.length > 0;

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Community Forum
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Ask questions, discuss projects, share blockers, and learn with
            developers who are building in the same direction.
          </p>
        </div>

        <Link
          href="/community"
          className={cn(buttonVariants(), "h-10 shrink-0 rounded-xl sm:h-11")}
        >
          Ask question
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {hasForumPosts ? <ForumPostList /> : <ForumEmptyState />}
    </section>
  );
}

function ForumPostList() {
  return <div className="grid gap-4">{/* Map forum posts here later. */}</div>;
}
