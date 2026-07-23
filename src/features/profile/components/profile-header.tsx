import {
  CheckCircle2,
  Code,
  LinkIcon,
  MapPin,
  MessageSquare,
  Rocket,
} from "lucide-react";
import Link from "next/link";

import type { ProfileHeaderProps } from "@/features/profile/types/profile-types";

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const { user, stats } = profile;

  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl font-semibold text-primary sm:size-20">
          {user.initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
                {user.name}
              </h1>

              <p className="mt-1 text-sm font-medium text-primary">
                @{user.username}
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                {user.headline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {user.githubUrl ? (
                <ProfileSocialLink href={user.githubUrl} label="GitHub">
                  <Code className="size-4" />
                </ProfileSocialLink>
              ) : null}

              {user.linkedinUrl ? (
                <ProfileSocialLink href={user.linkedinUrl} label="LinkedIn">
                  <LinkIcon className="size-4" />
                </ProfileSocialLink>
              ) : null}

              {user.portfolioUrl ? (
                <ProfileSocialLink href={user.portfolioUrl} label="Portfolio">
                  <LinkIcon className="size-4" />
                </ProfileSocialLink>
              ) : null}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {user.location ? (
              <ProfileBadge icon={MapPin} label={user.location} />
            ) : null}

            <ProfileBadge icon={Rocket} label={`Joined ${user.joinedAt}`} />
            <ProfileBadge
              icon={CheckCircle2}
              label={`${stats.projectsApproved} approved project`}
              variant="primary"
            />
            <ProfileBadge
              icon={MessageSquare}
              label={`${stats.communityReplies} community replies`}
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ProfileStat
              label="Roadmaps"
              value={stats.roadmapsStarted.toString()}
            />
            <ProfileStat
              label="Submitted"
              value={stats.projectsSubmitted.toString()}
            />
            <ProfileStat
              label="Approved"
              value={stats.projectsApproved.toString()}
            />
            <ProfileStat
              label="Replies"
              value={stats.communityReplies.toString()}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

type ProfileSocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function ProfileSocialLink({ href, label, children }: ProfileSocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background/60 px-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
    >
      {children}
      {label}
    </Link>
  );
}

type ProfileBadgeProps = {
  icon: React.ElementType;
  label: string;
  variant?: "default" | "primary";
};

function ProfileBadge({
  icon: Icon,
  label,
  variant = "default",
}: ProfileBadgeProps) {
  return (
    <span
      className={
        variant === "primary"
          ? "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
          : "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
      }
    >
      <Icon className="size-3.5" />
      {label}
    </span>
  );
}

type ProfileStatProps = {
  label: string;
  value: string;
};

function ProfileStat({ label, value }: ProfileStatProps) {
  return (
    <div className="rounded-xl border border-border bg-background/60 px-4 py-3">
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
