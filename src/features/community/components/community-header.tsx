export default function CommunityHeader() {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        Developer discussions
      </p>

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
        Community Forum
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
        Ask questions, share project blockers, request feedback, and learn with
        developers who are building in the same direction.
      </p>
    </div>
  );
}
