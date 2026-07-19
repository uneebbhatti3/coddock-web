import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityPostCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-4 w-2 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-md" />
          </div>

          <Skeleton className="h-6 w-full max-w-xl rounded-md" />

          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
            <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Skeleton className="size-4 rounded-md" />
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>
        </div>

        <Skeleton className="h-5 w-32 rounded-md" />
      </div>
    </article>
  );
}
