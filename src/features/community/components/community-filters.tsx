import { communityCategories } from "@/features/community/data/community-data";
import { cn } from "@/lib/utils";

export default function CommunityFilters() {
  const activeCategory = "all";

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {communityCategories.map((category) => {
        const Icon = category.icon;
        const isActive = category.value === activeCategory;

        return (
          <button
            key={category.value}
            type="button"
            className={cn(
              "inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border px-4 text-sm font-medium transition-colors",
              isActive
                ? "border-primary/30 bg-primary/10 text-primary"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/30 hover:text-primary",
            )}
          >
            <Icon className="size-4" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
