export type CommunityAuthor = {
  id: string;
  name: string;
  role?: string;
  initials: string;
  bio?: string;
};

export type CommunityPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  createdAt: string;
  replies: number;
  views: number;
  likes: number;
  author: CommunityAuthor;
};

export type CommunityReply = {
  id: string;
  postId: string;
  content: string;
  createdAt: string;
  author: CommunityAuthor;
};

export type CommunityPostDetailProps = {
  post: CommunityPost;
};

export type CommunityPostCardProps = {
  post: CommunityPost;
};

export type CommunityReplyListProps = {
  replies: CommunityReply[];
};

export type CommunityReplyCardProps = {
  reply: CommunityReply;
};

export type CommunityLikeButtonProps = {
  initialLikes?: number;
  size?: "sm" | "default";
};

export type CommunityForumPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export type CommunityPostListProps = {
  query?: string;
};
