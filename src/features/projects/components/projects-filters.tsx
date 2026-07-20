import Link from "next/link";

import {
  projectCategoryFilters,
  projectDifficultyFilters,
} from "@/features/projects/data/project-data";
import { cn } from "@/lib/utils";

type ProjectsFiltersProps = {
  activeCategory?: string;
  activeDifficulty?: string;
};

export default function ProjectsFilters({
  activeCategory = "all",
  activeDifficulty = "all",
}: ProjectsFiltersProps) {
  return (
    <div className="space-y-3">
      <FilterGroup
        label="Category"
        paramName="category"
        activeValue={activeCategory}
        filters={projectCategoryFilters}
        preserveParams={{
          difficulty: activeDifficulty,
        }}
      />

      <FilterGroup
        label="Difficulty"
        paramName="difficulty"
        activeValue={activeDifficulty}
        filters={projectDifficultyFilters}
        preserveParams={{
          category: activeCategory,
        }}
      />
    </div>
  );
}

type FilterGroupProps = {
  label: string;
  paramName: "category" | "difficulty";
  activeValue: string;
  filters: {
    label: string;
    value: string;
  }[];
  preserveParams?: Record<string, string>;
};

function FilterGroup({
  label,
  paramName,
  activeValue,
  filters,
  preserveParams = {},
}: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => {
          const isActive = filter.value === activeValue;
          const href = buildFilterHref(paramName, filter.value, preserveParams);

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
    </div>
  );
}

function buildFilterHref(
  paramName: "category" | "difficulty",
  value: string,
  preserveParams: Record<string, string>,
) {
  const params = new URLSearchParams();

  Object.entries(preserveParams).forEach(([key, preservedValue]) => {
    if (preservedValue && preservedValue !== "all") {
      params.set(key, preservedValue);
    }
  });

  if (value !== "all") {
    params.set(paramName, value);
  } else {
    params.delete(paramName);
  }

  const query = params.toString();

  return query ? `/projects?${query}` : "/projects";
}
