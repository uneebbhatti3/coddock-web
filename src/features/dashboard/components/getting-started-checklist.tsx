import { ArrowRight, Circle } from "lucide-react";
import Link from "next/link";

import { gettingStartedItems } from "@/features/dashboard/data/dashboard-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function GettingStartedChecklist() {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Start here
        </h2>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
          Your dashboard will become more useful as you learn, build, and share
          progress. For now, complete these first steps.
        </p>
      </div>

      <div className="space-y-3">
        {gettingStartedItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-border bg-background/60 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Circle className="size-3.5 text-muted-foreground" />
                      <h3 className="font-medium text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-10 shrink-0 rounded-xl",
                  )}
                >
                  {item.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
