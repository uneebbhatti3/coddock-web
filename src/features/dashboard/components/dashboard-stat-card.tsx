import type { ElementType } from "react";

type DashboardStatCardProps = {
  label: string;
  value: string;
  description: string;
  icon: ElementType;
};

export default function DashboardStatCard({
  label,
  value,
  description,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            {value}
          </p>
        </div>

        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
