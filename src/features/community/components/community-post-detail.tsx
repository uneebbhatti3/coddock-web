import { ArrowLeft, Eye, MessageSquareText } from "lucide-react";
import Link from "next/link";
import CommunityLikeButton from "@/features/community/components/community-like-button";
import { CommunityPostDetailProps } from "../types/community-types";
import CommunityAuthorHoverCard from "./community-author-hover-card";

export default function CommunityPostDetail({
  post,
}: CommunityPostDetailProps) {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <Link
        href="/community"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back to community
      </Link>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>

        <span className="text-xs text-muted-foreground">{post.createdAt}</span>
      </div>

      <h1 className="max-w-4xl text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
        {post.title}
      </h1>

      <div className="mt-5 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CommunityAuthorHoverCard author={post.author} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <CommunityLikeButton initialLikes={post.likes ?? 0} />

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MessageSquareText className="size-4" />
              {post.replies} replies
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Eye className="size-4" />
              {post.views} views
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
        {post.content.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
