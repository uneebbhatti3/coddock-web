import { Skeleton } from "@/components/ui/skeleton";

const filterSkeletons = Array.from({ length: 5 });

export default function CommunityFiltersSkeleton() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {filterSkeletons.map((_, index) => (
        <Skeleton key={index} className="h-10 w-28 shrink-0 rounded-xl" />
      ))}
    </div>
  );
}
