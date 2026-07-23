import { ArrowRight, BookOpen, Clock, FolderKanban } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { RoadmapCardProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapCard({ roadmap }: RoadmapCardProps) {
  const Icon = roadmap.icon;

  return (
    <article className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/30 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary sm:size-14">
            <Icon className="size-6" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {roadmap.level}
              </span>

              <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {roadmap.estimatedDuration}
              </span>
            </div>

            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {roadmap.title}
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
              {roadmap.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="size-4" />
                {roadmap.chaptersCount} chapters
              </span>

              <span className="inline-flex items-center gap-1.5">
                <FolderKanban className="size-4" />
                {roadmap.projectsCount} projects
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {roadmap.estimatedDuration}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {roadmap.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={`/roadmaps/${roadmap.slug}`}
          className={cn(
            buttonVariants(),
            "h-10 w-full shrink-0 rounded-xl px-5 lg:w-auto",
          )}
        >
          View roadmap
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
