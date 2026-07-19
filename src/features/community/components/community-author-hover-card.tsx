import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { CommunityAuthor } from "../types/community-types";

type CommunityAuthorHoverCardProps = {
  author: CommunityAuthor;
};

export default function CommunityAuthorHoverCard({
  author,
}: CommunityAuthorHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Link
          href={`/profile/${author.id}`}
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`View ${author.name}'s profile`}
        >
          <Avatar className="size-11">
            <AvatarFallback className="border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
              {author.initials}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-medium text-foreground">{author.name}</p>

            {author.role ? (
              <p className="text-xs text-muted-foreground">{author.role}</p>
            ) : null}
          </div>
        </Link>
      </HoverCardTrigger>

      <HoverCardContent align="start" className="w-72 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <Avatar className="size-12">
            <AvatarFallback className="border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
              {author.initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <Link
              href={`/profile/${author.id}`}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {author.name}
            </Link>

            {author.role ? (
              <p className="mt-0.5 text-xs text-muted-foreground">
                {author.role}
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {author.bio ?? "This user has not added a bio yet."}
        </p>

        <Link
          href={`/profile/${author.id}`}
          className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View profile
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
