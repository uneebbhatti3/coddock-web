import { CommunityReplyCardProps } from "../types/community-types";

export default function CommunityReplyCard({ reply }: CommunityReplyCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
            {reply.author.initials}
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">
              {reply.author.name}
            </p>
            <p className="text-xs text-muted-foreground">{reply.author.role}</p>
          </div>
        </div>

        <p className="shrink-0 text-xs text-muted-foreground">
          {reply.createdAt}
        </p>
      </div>

      <p className="text-sm leading-6 text-muted-foreground">{reply.content}</p>
    </article>
  );
}
