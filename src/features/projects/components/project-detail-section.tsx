import type { ProjectDetailSectionProps } from "@/features/projects/types/project-types";

export default function ProjectDetailSection({
  title,
  description,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>

        {description ? (
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
