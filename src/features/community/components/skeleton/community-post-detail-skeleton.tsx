import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityPostDetailSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <Skeleton className="mb-6 h-5 w-36 rounded-md" />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Skeleton className="h-6 w-28 rounded-full" />
        <Skeleton className="h-4 w-16 rounded-md" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-8 w-full max-w-4xl rounded-md" />
        <Skeleton className="h-8 w-full max-w-2xl rounded-md" />
      </div>

      <div className="mt-5 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="size-11 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-36 rounded-md" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-20 rounded-md" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
        <Skeleton className="h-4 w-full max-w-4xl rounded-md" />
        <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
      </div>
    </article>
  );
}
