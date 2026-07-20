import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailHeaderSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <Skeleton className="mb-6 h-5 w-32 rounded-md" />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <Skeleton className="size-14 shrink-0 rounded-2xl" />

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-9 w-full max-w-3xl rounded-md" />
            <Skeleton className="h-9 w-full max-w-xl rounded-md" />
          </div>

          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-full max-w-4xl rounded-md" />
            <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-28 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
            <Skeleton className="h-7 w-52 rounded-full" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-24 rounded-full" />
          </div>

          <Skeleton className="mt-6 h-11 w-full rounded-xl sm:w-32" />
        </div>
      </div>
    </article>
  );
}
