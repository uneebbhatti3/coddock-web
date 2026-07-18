import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardStatCardSkeleton() {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="mt-3 h-9 w-16 rounded-md" />
        </div>

        <Skeleton className="size-10 rounded-xl" />
      </div>

      <Skeleton className="mt-5 h-4 w-full max-w-48 rounded-md" />
    </article>
  );
}
