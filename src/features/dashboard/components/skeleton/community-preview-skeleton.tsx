import ForumEmptyStateSkeleton from "@/features/dashboard/components/skeleton/forum-empty-state-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityPreviewSkeleton() {
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

        <Skeleton className="h-11 w-full shrink-0 rounded-xl sm:w-36" />
      </div>

      <ForumEmptyStateSkeleton />
    </section>
  );
}
