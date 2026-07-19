import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityReplyCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-36 rounded-md" />
          </div>
        </div>

        <Skeleton className="h-3 w-14 rounded-md" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
        <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
      </div>
    </article>
  );
}
