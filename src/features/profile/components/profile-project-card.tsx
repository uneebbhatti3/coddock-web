import { Code, ExternalLink, Rocket } from "lucide-react";
import Link from "next/link";

import type { ProfileProjectCardProps } from "@/features/profile/types/profile-types";

export default function ProfileProjectCard({
  project,
}: ProfileProjectCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {formatStatus(project.status)}
            </span>

            <span className="rounded-full border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {project.difficulty}
            </span>

            <span className="rounded-full border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {project.category}
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            {project.title}
          </Link>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-border bg-card/70 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          {project.githubUrl ? (
            <ProjectLink href={project.githubUrl} label="GitHub">
              <Code className="size-4" />
            </ProjectLink>
          ) : null}

          {project.liveUrl ? (
            <ProjectLink href={project.liveUrl} label="Live">
              <ExternalLink className="size-4" />
            </ProjectLink>
          ) : null}

          {!project.githubUrl && !project.liveUrl ? (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-card/70 px-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Rocket className="size-4" />
              Continue
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

type ProjectLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function ProjectLink({ href, label, children }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-card/70 px-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
    >
      {children}
      {label}
    </Link>
  );
}

function formatStatus(status: string) {
  return status
    .split("_")
    .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
