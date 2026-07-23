import { Skeleton } from "@/components/ui/skeleton";

const skeletonRoadmaps = Array.from({ length: 4 });

export default function RoadmapPreviewSkeleton() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full">
          <Skeleton className="h-7 w-48 rounded-md" />

          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
            <Skeleton className="h-4 w-full max-w-xl rounded-md" />
          </div>
        </div>

        <Skeleton className="h-11 w-full shrink-0 rounded-xl sm:w-40" />
      </div>

      <div className="space-y-4">
        {skeletonRoadmaps.map((_, index) => (
          <RoadmapCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

function RoadmapCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-4 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
          <Skeleton className="size-12 shrink-0 rounded-2xl sm:size-14" />

          <div className="min-w-0 flex-1">
            <Skeleton className="h-5 w-64 rounded-md" />

            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-full max-w-4xl rounded-md" />
              <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Skeleton className="h-7 w-36 rounded-md" />
              <Skeleton className="h-7 w-24 rounded-md" />
            </div>
          </div>
        </div>

        <Skeleton className="h-10 w-full shrink-0 rounded-xl lg:w-32" />
      </div>
    </article>
  );
}
