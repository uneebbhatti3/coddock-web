import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardHeroSkeleton() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
      <div className="absolute -right-20 -top-24 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-10 size-56 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <Skeleton className="h-7 w-56 rounded-full" />

        <Skeleton className="mt-6 h-10 w-full max-w-xl rounded-xl sm:h-12" />
        <Skeleton className="mt-3 h-10 w-full max-w-lg rounded-xl sm:h-12" />

        <div className="mt-5 space-y-2">
          <Skeleton className="h-5 w-full max-w-2xl rounded-md" />
          <Skeleton className="h-5 w-full max-w-xl rounded-md" />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-11 w-full rounded-xl sm:w-40" />
          <Skeleton className="h-11 w-full rounded-xl sm:w-36" />
        </div>
      </div>
    </section>
  );
}
