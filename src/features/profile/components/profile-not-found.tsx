import { UserX } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProfileNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <UserX className="size-7" />
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Profile not found
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          The profile you are looking for does not exist, was removed, or is not
          public yet.
        </p>

        <Link
          href="/dashboard"
          className={cn(buttonVariants(), "mt-6 rounded-xl")}
        >
          Back to dashboard
        </Link>
      </div>
    </section>
  );
}
