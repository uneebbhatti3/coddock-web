import CommunityPostCardSkeleton from "@/features/community/components/skeleton/community-post-card-skeleton";

const postSkeletons = Array.from({ length: 3 });

export default function CommunityPostListSkeleton() {
  return (
    <div className="space-y-4">
      {postSkeletons.map((_, index) => (
        <CommunityPostCardSkeleton key={index} />
      ))}
    </div>
  );
}
