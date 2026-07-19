import CommunityEmptyState from "@/features/community/components/community-empty-state";
import CommunityPostCard from "@/features/community/components/community-post-card";
import { communityPosts } from "@/features/community/data/community-data";
import { CommunityPostListProps } from "../types/community-types";

export default function CommunityPostList({
  query = "",
}: CommunityPostListProps) {
  const normalizedQuery = query.trim().toLowerCase();

  const filteredPosts = normalizedQuery
    ? communityPosts.filter((post) => {
        const searchableText = [
          post.title,
          post.excerpt,
          post.content,
          post.category,
          post.author.name,
          post.author.role,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : communityPosts;

  if (filteredPosts.length === 0) {
    return <CommunityEmptyState />;
  }

  return (
    <div className="space-y-4">
      {filteredPosts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
