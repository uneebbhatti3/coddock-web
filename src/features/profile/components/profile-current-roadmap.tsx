import { ArrowRight, BookOpen, Clock, Gauge } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import ProfileEmptyState from "@/features/profile/components/profile-empty-state";
import type { ProfileCurrentRoadmapProps } from "@/features/profile/types/profile-types";
import { cn } from "@/lib/utils";

export default function ProfileCurrentRoadmap({
  roadmap,
}: ProfileCurrentRoadmapProps) {
  if (!roadmap) {
    return (
      <ProfileEmptyState
        title="No roadmap started"
        description="This user has not started a roadmap yet."
      />
    );
  }

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Current roadmap
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {roadmap.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Currently working through{" "}
            <span className="font-medium text-foreground">
              {roadmap.currentChapter}
            </span>
            .
          </p>
        </div>

        <Link
          href={`/roadmaps/${roadmap.slug}`}
          className={cn(buttonVariants(), "h-10 rounded-xl")}
        >
          Continue
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <RoadmapInfo
          icon={Gauge}
          label="Progress"
          value={`${roadmap.progressPercentage}%`}
        />
        <RoadmapInfo
          icon={BookOpen}
          label="Status"
          value={formatStatus(roadmap.status)}
        />
        <RoadmapInfo icon={Clock} label="Started" value={roadmap.startedAt} />
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-background">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${roadmap.progressPercentage}%` }}
        />
      </div>
    </section>
  );
}

type RoadmapInfoProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function RoadmapInfo({ icon: Icon, label, value }: RoadmapInfoProps) {
  return (
    <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="size-4" />
        {label}
      </div>

      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

function formatStatus(status: string) {
  return status
    .split("_")
    .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
