import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CommunityPostDetail from "@/features/community/components/community-post-detail";
import CommunityReplyForm from "@/features/community/components/community-reply-form";
import CommunityReplyList from "@/features/community/components/community-reply-list";
import {
  getCommunityPostById,
  getRepliesByPostId,
} from "@/features/community/data/community-data";

type CommunityPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: CommunityPostPageProps): Promise<Metadata> {
  const { id } = await params;

  const post = getCommunityPostById(id);

  if (!post) {
    return {
      title: "Discussion Not Found | CodDock",
      description: "The requested CodDock community discussion was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | CodDock Community`,
    description: post.excerpt,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CommunityPostPage({
  params,
}: CommunityPostPageProps) {
  const { id } = await params;

  const post = getCommunityPostById(id);

  if (!post) {
    notFound();
  }

  const replies = getRepliesByPostId(post.id);

  return (
    <section className="space-y-6">
      <CommunityPostDetail post={post} />

      <CommunityReplyForm />

      <CommunityReplyList replies={replies} />
    </section>
  );
}
