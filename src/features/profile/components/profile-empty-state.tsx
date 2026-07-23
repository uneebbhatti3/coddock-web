import { Inbox } from "lucide-react";

import type { ProfileEmptyStateProps } from "@/features/profile/types/profile-types";

export default function ProfileEmptyState({
  title,
  description,
}: ProfileEmptyStateProps) {
  return (
    <section className="rounded-2xl border border-dashed border-border bg-card/60 p-6 text-center sm:p-10">
      <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
        <Inbox className="size-6" />
      </div>

      <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </section>
  );
}
