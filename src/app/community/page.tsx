import type { Metadata } from "next";

import AskQuestionDialog from "@/features/community/components/ask-question-dialog";
import CommunityFilters from "@/features/community/components/community-filters";
import CommunityHeader from "@/features/community/components/community-header";
import CommunityPostList from "@/features/community/components/community-post-list";
import { Suspense } from "react";
import CommunityHeaderSkeleton from "@/features/community/components/skeleton/community-header-skeleton";
import AskQuestionDialogSkeleton from "@/features/community/components/skeleton/ask-question-dialog-skeleton";
import CommunityFiltersSkeleton from "@/features/community/components/skeleton/community-filters-skeleton";
import CommunityPostListSkeleton from "@/features/community/components/skeleton/community-post-list-skeleton";
import CommunitySearch from "@/features/community/components/community-search";
import CommunitySearchSkeleton from "@/features/community/components/skeleton/community-search-skeleton";
import { CommunityForumPageProps } from "@/features/community/types/community-types";

export const metadata: Metadata = {
  title: "Community Forum | CodDock",
  description:
    "Join the CodDock community forum to ask developer questions, discuss projects, share blockers, get feedback, and learn with other early-career developers.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CommunityForumPage({
  searchParams,
}: CommunityForumPageProps) {
  const { q } = await searchParams;

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <Suspense fallback={<CommunityHeaderSkeleton />}>
          <CommunityHeader />
        </Suspense>

        <Suspense fallback={<AskQuestionDialogSkeleton />}>
          <AskQuestionDialog />
        </Suspense>
      </div>

      <Suspense fallback={<CommunitySearchSkeleton />}>
        <CommunitySearch />
      </Suspense>

      <Suspense fallback={<CommunityFiltersSkeleton />}>
        <CommunityFilters />
      </Suspense>

      <Suspense fallback={<CommunityPostListSkeleton />}>
        <CommunityPostList query={q ?? ""} />
      </Suspense>
    </section>
  );
}
