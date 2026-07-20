import { Skeleton } from "@/components/ui/skeleton";

type ProfileSectionSkeletonProps = {
  itemCount?: number;
  compact?: boolean;
};

export default function ProfileSectionSkeleton({
  itemCount = 3,
  compact = false,
}: ProfileSectionSkeletonProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <Skeleton className="h-7 w-44 rounded-md" />

      <div className="mt-4 space-y-3">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div
            key={index}
            className={
              compact
                ? "flex flex-wrap gap-2"
                : "rounded-xl border border-border bg-background/60 p-4"
            }
          >
            {compact ? (
              <>
                <Skeleton className="h-7 w-20 rounded-full" />
                <Skeleton className="h-7 w-24 rounded-full" />
                <Skeleton className="h-7 w-16 rounded-full" />
              </>
            ) : (
              <div className="space-y-2">
                <Skeleton className="h-5 w-full max-w-md rounded-md" />
                <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
                <Skeleton className="h-4 w-full max-w-xl rounded-md" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
