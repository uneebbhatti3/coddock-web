import { ArrowRight, Clock, Gauge, Map, Tag } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProjectCardProps } from "@/features/projects/types/project-types";

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

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
                Project
              </span>

              <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {project.difficulty}
              </span>

              <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {formatCategory(project.category)}
              </span>
            </div>

            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {project.title}
            </h2>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Gauge className="size-4" />
                {project.difficulty}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {project.estimatedDuration}
              </span>

              {project.roadmapTitle ? (
                <span className="inline-flex items-center gap-1.5">
                  <Map className="size-4" />
                  {project.roadmapTitle}
                </span>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  <Tag className="size-3" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            buttonVariants(),
            "h-10 w-full shrink-0 rounded-xl px-5 lg:w-auto",
          )}
        >
          View project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

function formatCategory(category: string) {
  return category
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}
