import { Skeleton } from "@/components/ui/skeleton";

const skeletonItems = Array.from({ length: 4 });

export default function GettingStartedChecklistSkeleton() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-6">
        <Skeleton className="h-7 w-36 rounded-md" />
        <Skeleton className="mt-3 h-4 w-full max-w-xl rounded-md" />
        <Skeleton className="mt-2 h-4 w-full max-w-md rounded-md" />
      </div>

      <div className="space-y-3">
        {skeletonItems.map((_, index) => (
          <article
            key={index}
            className="rounded-2xl border border-border bg-background/60 p-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <Skeleton className="size-10 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1">
                  <Skeleton className="h-5 w-56 rounded-md" />
                  <Skeleton className="mt-2 h-4 w-full max-w-md rounded-md" />
                  <Skeleton className="mt-2 h-4 w-full max-w-sm rounded-md" />
                </div>
              </div>

              <Skeleton className="h-10 w-full rounded-xl sm:w-36" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
