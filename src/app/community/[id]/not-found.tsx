import Link from "next/link";
import { MessageSquareOff } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CommunityPostNotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <MessageSquareOff className="size-7" />
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Discussion not found
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          The discussion you are looking for does not exist, was removed, or is
          no longer available.
        </p>

        <Link
          href="/community"
          className={cn(buttonVariants(), "mt-6 rounded-xl")}
        >
          Back to community
        </Link>
      </div>
    </section>
  );
}
