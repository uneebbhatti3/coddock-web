import { Skeleton } from "@/components/ui/skeleton";

const categorySkeletons = Array.from({ length: 5 });
const difficultySkeletons = Array.from({ length: 4 });

export default function ProjectsFiltersSkeleton() {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded-md" />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categorySkeletons.map((_, index) => (
            <Skeleton key={index} className="h-10 w-28 shrink-0 rounded-xl" />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20 rounded-md" />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {difficultySkeletons.map((_, index) => (
            <Skeleton key={index} className="h-10 w-28 shrink-0 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
