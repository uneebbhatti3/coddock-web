import {
  ArrowLeft,
  BookOpen,
  Clock,
  FolderKanban,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { RoadmapDetailHeaderProps } from "@/features/roadmaps/types/roadmaps-types";

export default function RoadmapDetailHeader({
  roadmap,
}: RoadmapDetailHeaderProps) {
  const Icon = roadmap.icon;

  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <Link
        href="/roadmaps"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to roadmaps
      </Link>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <Icon className="size-7" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {roadmap.level}
            </span>

            <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              {roadmap.estimatedDuration}
            </span>
          </div>

          <h1 className="max-w-4xl text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            {roadmap.title}
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-muted-foreground sm:text-base">
            {roadmap.longDescription}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <RoadmapBadge
              icon={BookOpen}
              label={`${roadmap.chaptersCount} chapters`}
            />

            <RoadmapBadge
              icon={GraduationCap}
              label={`${roadmap.lessonsCount} lessons`}
            />

            <RoadmapBadge
              icon={FolderKanban}
              label={`${roadmap.projectsCount} projects`}
              variant="primary"
            />

            <RoadmapBadge icon={Clock} label={roadmap.estimatedDuration} />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {roadmap.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button className="mt-6 h-11 w-full rounded-xl sm:w-auto">
            Start roadmap
          </Button>
        </div>
      </div>
    </article>
  );
}

type RoadmapBadgeProps = {
  icon: React.ElementType;
  label: string;
  variant?: "default" | "primary";
};

function RoadmapBadge({
  icon: Icon,
  label,
  variant = "default",
}: RoadmapBadgeProps) {
  return (
    <span
      className={
        variant === "primary"
          ? "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
          : "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
      }
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}
