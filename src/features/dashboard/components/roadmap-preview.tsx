import { ArrowRight, BookOpen, Map } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import RoadmapCard from "./roadmap-card";

const roadmaps = [
  {
    title: "Frontend Developer Roadmap",
    description:
      "Learn frontend development chapter by chapter, starting from HTML and CSS, then moving into JavaScript, React, Next.js, UI patterns, and portfolio-ready projects.",
    href: "/learning-roadmaps/frontend-developer",
    level: "Beginner-friendly",
    chapters: "6 chapters",
    projects: "6 projects",
    icon: BookOpen,
  },
  {
    title: "Backend Developer Roadmap",
    description:
      "Build backend skills through HTTP, APIs, databases, authentication, validation, testing, deployment, and practical server-side projects.",
    href: "/learning-roadmaps/backend-developer",
    level: "Intermediate",
    chapters: "7 chapters",
    projects: "5 projects",
    icon: BookOpen,
  },
  {
    title: "Full-Stack Developer Roadmap",
    description:
      "Learn how to connect frontend, backend, databases, authentication, deployment, and product thinking into complete real-world applications.",
    href: "/learning-roadmaps/full-stack-developer",
    level: "Project-based",
    chapters: "8 chapters",
    projects: "6 projects",
    icon: BookOpen,
  },
  {
    title: "AI Agent Developer Roadmap",
    description:
      "Learn how to build practical AI agents with tools, workflows, memory, RAG, APIs, and real product use cases.",
    href: "/learning-roadmaps/ai-agent-developer",
    level: "Emerging skill",
    chapters: "5 chapters",
    projects: "4 projects",
    icon: BookOpen,
  },
];

export default async function RoadmapPreview() {
  // await new Promise((resolve) => setTimeout(resolve, 2500));

  const hasRoadmaps = roadmaps.length > 0;

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Learning Roadmaps
          </h2>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Explore structured learning paths built around chapters, practical
            content, and projects that help you turn learning into proof of
            work.
          </p>
        </div>

        {hasRoadmaps ? (
          <Link
            href="/learning-roadmaps"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-10 shrink-0 rounded-xl sm:h-11",
            )}
          >
            View all roadmaps
            <ArrowRight className="size-4" />
          </Link>
        ) : null}
      </div>

      {hasRoadmaps ? (
        <div className="space-y-4">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.title} {...roadmap} />
          ))}
        </div>
      ) : (
        <RoadmapEmptyState />
      )}
    </section>
  );
}

function RoadmapEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/60 p-6 sm:p-8">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Map className="size-7" />
            </div>
          </EmptyMedia>

          <EmptyTitle>No roadmap created</EmptyTitle>
        </EmptyHeader>

        <EmptyContent>
          <EmptyDescription>
            Learning roadmaps are not available yet. Once CodDock publishes
            roadmaps, they will appear here so you can choose a structured path
            and start learning chapter by chapter.
          </EmptyDescription>

          <p className="mx-auto mt-4 max-w-md text-center text-xs leading-5 text-muted-foreground">
            Roadmaps can only be created and published by the CodDock admin
            team.
          </p>
        </EmptyContent>
      </Empty>
    </div>
  );
}
