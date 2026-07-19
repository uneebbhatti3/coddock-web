import { Skeleton } from "@/components/ui/skeleton";

export default function CommunityReplyFormSkeleton() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-4">
        <Skeleton className="h-6 w-32 rounded-md" />

        <div className="mt-2 space-y-2">
          <Skeleton className="h-4 w-full max-w-lg rounded-md" />
          <Skeleton className="h-4 w-full max-w-sm rounded-md" />
        </div>
      </div>

      <Skeleton className="h-32 w-full rounded-xl" />

      <div className="mt-4 flex justify-end">
        <Skeleton className="h-10 w-28 rounded-xl" />
      </div>
    </section>
  );
}
