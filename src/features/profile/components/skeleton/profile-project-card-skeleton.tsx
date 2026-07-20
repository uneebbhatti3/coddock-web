import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileProjectCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          <Skeleton className="h-6 w-full max-w-md rounded-md" />

          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
            <Skeleton className="h-4 w-full max-w-xl rounded-md" />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20 rounded-lg" />
            <Skeleton className="h-7 w-24 rounded-lg" />
            <Skeleton className="h-7 w-20 rounded-lg" />
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <Skeleton className="h-9 w-24 rounded-xl" />
          <Skeleton className="h-9 w-20 rounded-xl" />
        </div>
      </div>
    </article>
  );
}
