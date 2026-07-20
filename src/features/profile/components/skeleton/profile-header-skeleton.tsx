import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileHeaderSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <Skeleton className="size-16 shrink-0 rounded-2xl sm:size-20" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="w-full">
              <Skeleton className="h-10 w-full max-w-md rounded-md" />
              <Skeleton className="mt-2 h-5 w-36 rounded-md" />

              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
                <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-28 rounded-full" />
            <Skeleton className="h-7 w-32 rounded-full" />
            <Skeleton className="h-7 w-40 rounded-full" />
            <Skeleton className="h-7 w-40 rounded-full" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
          </div>
        </div>
      </div>
    </article>
  );
}
