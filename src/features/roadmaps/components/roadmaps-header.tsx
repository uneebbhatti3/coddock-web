export default function RoadmapsHeader() {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Structured learning paths
      </p>

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
        Learning Roadmaps
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        Choose a roadmap, follow chapters in order, build practical projects,
        and turn your learning into visible proof of work.
      </p>
    </div>
  );
}
