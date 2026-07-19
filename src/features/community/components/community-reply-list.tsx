import CommunityReplyCard from "@/features/community/components/community-reply-card";
import { CommunityReplyListProps } from "../types/community-types";

export default function CommunityReplyList({
  replies,
}: CommunityReplyListProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Replies
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {replies.length} {replies.length === 1 ? "reply" : "replies"} on this
          discussion.
        </p>
      </div>

      {replies.length > 0 ? (
        <div className="space-y-4">
          {replies.map((reply) => (
            <CommunityReplyCard key={reply.id} reply={reply} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-background/60 p-6 text-center">
          <p className="text-sm font-medium text-foreground">No replies yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Be the first to help with a useful answer.
          </p>
        </div>
      )}
    </section>
  );
}
