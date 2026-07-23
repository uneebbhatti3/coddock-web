import { Skeleton } from "@/components/ui/skeleton";

export default function RoadmapChapterAccordionSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex items-start gap-4">
        <Skeleton className="size-10 shrink-0 rounded-xl" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-56 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
            <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Skeleton className="h-5 w-24 rounded-md" />
            <Skeleton className="h-5 w-24 rounded-md" />
            <Skeleton className="h-5 w-28 rounded-md" />
          </div>
        </div>

        <Skeleton className="mt-1 size-5 shrink-0 rounded-md" />
      </div>
    </article>
  );
}
