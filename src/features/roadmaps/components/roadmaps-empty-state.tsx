import { Map } from "lucide-react";

export default function RoadmapsEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/60 p-6 text-center sm:p-10">
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
        <Map className="size-7" />
      </div>

      <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
        No roadmaps found
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        We could not find a roadmap matching your current search or filter. Try
        searching for frontend, backend, full-stack, React, APIs, or AI agents.
      </p>
    </div>
  );
}
