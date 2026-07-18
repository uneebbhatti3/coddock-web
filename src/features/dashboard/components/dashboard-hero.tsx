import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
      <div className="absolute -right-20 -top-24 size-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-24 left-10 size-56 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" />
          Your developer growth space
        </div>

        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          Welcome to your CodDock dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          Choose your roadmap, start building real projects, ask better
          questions, and turn your progress into proof of work.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/learning-roadmaps"
            className={cn(buttonVariants(), "h-11 w-full rounded-xl sm:w-auto")}
          >
            Explore roadmaps
            <ArrowRight className="size-4" />
          </Link>

          <Link
            href="/community"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 w-full rounded-xl sm:w-auto",
            )}
          >
            Visit community
          </Link>
        </div>
      </div>
    </section>
  );
}
