import { Skeleton } from "@/components/ui/skeleton";

export default function ForumEmptyStateSkeleton() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background/60 p-6">
      <div className="flex flex-col items-center text-center">
        <Skeleton className="size-14 rounded-2xl" />

        <Skeleton className="mt-5 h-6 w-40 rounded-md" />

        <div className="mt-3 w-full max-w-xl space-y-2">
          <Skeleton className="mx-auto h-4 w-full rounded-md" />
          <Skeleton className="mx-auto h-4 w-5/6 rounded-md" />
        </div>

        <div className="mt-5 grid w-full max-w-xl gap-2">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>

        <div className="mt-5 flex w-full flex-col justify-center gap-3 sm:flex-row">
          <Skeleton className="h-10 w-full rounded-xl sm:w-40" />
          <Skeleton className="h-10 w-full rounded-xl sm:w-40" />
        </div>
      </div>
    </div>
  );
}
