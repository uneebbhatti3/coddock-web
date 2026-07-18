import { ArrowRight, BookOpen } from "lucide-react";
import { RoadmapCardProps } from "../types/dashboard-types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ReactNode } from "react";

export default function RoadmapCard({
  title,
  description,
  href,
  level,
  chapters,
  projects,
  icon: Icon,
}: RoadmapCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/35 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5 md:flex-row">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card/60 text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary sm:size-14">
            <Icon className="size-6" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {title}
            </h3>

            <p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <RoadmapMetaBadge variant="primary">
                <BookOpen className="size-3.5" />
                {level}
              </RoadmapMetaBadge>

              <RoadmapMetaBadge>{chapters}</RoadmapMetaBadge>

              <RoadmapMetaBadge>{projects}</RoadmapMetaBadge>
            </div>
          </div>
        </div>

        <Link
          href={href}
          className={cn(
            buttonVariants(),
            "h-10 w-full shrink-0 rounded-xl px-5 lg:w-auto",
          )}
        >
          Get Started
          <ArrowRight className="size-4 lg:hidden" />
        </Link>
      </div>
    </article>
  );
}

function RoadmapMetaBadge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "primary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs",
        variant === "primary"
          ? "border-primary/20 bg-primary/10 text-primary"
          : "border-border bg-card/60 text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}
