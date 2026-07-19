import { Skeleton } from "@/components/ui/skeleton";
import CommunityReplyCardSkeleton from "@/features/community/components/skeleton/community-reply-card-skeleton";

const replySkeletons = Array.from({ length: 3 });

export default function CommunityReplyListSkeleton() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-5">
        <Skeleton className="h-6 w-24 rounded-md" />
        <Skeleton className="mt-2 h-4 w-48 rounded-md" />
      </div>

      <div className="space-y-4">
        {replySkeletons.map((_, index) => (
          <CommunityReplyCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
