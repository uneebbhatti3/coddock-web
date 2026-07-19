import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityHeaderSkeleton() {
  return (
    <div className="max-w-3xl">
      <Skeleton className="mb-3 h-7 w-40 rounded-full" />

      <Skeleton className="h-10 w-64 rounded-md sm:h-11 sm:w-80" />

      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full max-w-2xl rounded-md" />
        <Skeleton className="h-4 w-full max-w-lg rounded-md" />
      </div>
    </div>
  );
}
