import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CommunityPostNotFound() {
  return (
    <section className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/60 p-8 text-center backdrop-blur">
      <div className="mb-6 flex items-center gap-3 text-muted-foreground">
        <ArrowLeft className="size-5" />
        <Link
          href="/community"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Back to community
        </Link>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Post Not Found
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Sorry, this community post doesn&apos;t exist or may have been
          removed.
        </p>
      </div>
      <Link
        href="/community"
        className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Browse other posts
      </Link>
    </section>
  );
}
