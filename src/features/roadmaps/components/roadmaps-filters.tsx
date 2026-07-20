import Link from "next/link";

import { roadmapFilters } from "@/features/roadmaps/data/roadmaps-data";
import { cn } from "@/lib/utils";

type RoadmapsFiltersProps = {
  activePath?: string;
};

export default function RoadmapsFilters({
  activePath = "all",
}: RoadmapsFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {roadmapFilters.map((filter) => {
        const isActive = filter.value === activePath;

        const href =
          filter.value === "all"
            ? "/roadmaps"
            : `/roadmaps?path=${filter.value}`;

        return (
          <Link
            key={filter.value}
            href={href}
            className={cn(
              "inline-flex h-10 shrink-0 items-center rounded-xl border px-4 text-sm font-medium transition-colors",
              isActive
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-primary",
            )}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
