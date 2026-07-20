import { Skeleton } from "@/components/ui/skeleton";

type ProjectDetailSectionSkeletonProps = {
  itemCount?: number;
};

export default function ProjectDetailSectionSkeleton({
  itemCount = 4,
}: ProjectDetailSectionSkeletonProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-5">
        <Skeleton className="h-7 w-56 rounded-md" />

        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full max-w-xl rounded-md" />
          <Skeleton className="h-4 w-full max-w-md rounded-md" />
        </div>
      </div>

      <div className="space-y-3">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-background/60 p-4"
          >
            <div className="flex gap-3">
              <Skeleton className="size-5 shrink-0 rounded-md" />

              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-full max-w-3xl rounded-md" />
                <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
