import { Skeleton } from "@/components/ui/skeleton";

const promptSkeletons = Array.from({ length: 3 });

export default function CommunityEmptyStateSkeleton() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6 sm:p-10">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <Skeleton className="size-14 rounded-2xl" />

        <Skeleton className="mt-5 h-7 w-48 rounded-md" />

        <div className="mt-3 w-full space-y-2">
          <Skeleton className="mx-auto h-4 w-full max-w-sm rounded-md" />
          <Skeleton className="mx-auto h-4 w-full max-w-xs rounded-md" />
        </div>

        <div className="mt-5 grid w-full gap-2">
          {promptSkeletons.map((_, index) => (
            <Skeleton key={index} className="h-10 w-full rounded-xl" />
          ))}
        </div>

        <Skeleton className="mt-5 h-11 w-36 rounded-xl" />
      </div>
    </div>
  );
}
