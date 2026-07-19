import { ArrowRight, MessageSquareText } from "lucide-react";
import Link from "next/link";

import CommunityLikeButton from "@/features/community/components/community-like-button";
import { CommunityPostCardProps } from "../types/community-types";

export default function CommunityPostCard({ post }: CommunityPostCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/30">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>

            <span className="text-xs text-muted-foreground">
              Posted by {post.author.name}
            </span>

            <span className="text-xs text-muted-foreground">•</span>

            <span className="text-xs text-muted-foreground">
              {post.createdAt}
            </span>
          </div>

          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {post.title}
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <CommunityLikeButton initialLikes={post.likes} size="sm" />

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquareText className="size-4" />
              {post.replies} replies
            </div>
          </div>
        </div>

        <Link
          href={`/community/${post.id}`}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View discussion
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
