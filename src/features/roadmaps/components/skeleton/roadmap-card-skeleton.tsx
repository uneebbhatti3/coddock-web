import { Skeleton } from "@/components/ui/skeleton";

export default function RoadmapCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
          <Skeleton className="size-12 shrink-0 rounded-2xl sm:size-14" />

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Skeleton className="h-6 w-36 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>

            <Skeleton className="h-6 w-full max-w-xl rounded-md" />

            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-full max-w-4xl rounded-md" />
              <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-5 w-24 rounded-md" />
              <Skeleton className="h-5 w-28 rounded-md" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Skeleton className="h-7 w-20 rounded-lg" />
              <Skeleton className="h-7 w-24 rounded-lg" />
              <Skeleton className="h-7 w-20 rounded-lg" />
              <Skeleton className="h-7 w-24 rounded-lg" />
            </div>
          </div>
        </div>

        <Skeleton className="h-10 w-full shrink-0 rounded-xl lg:w-36" />
      </div>
    </article>
  );
}
