"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const learnAndBuildItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Learning Roadmaps",
    href: "/roadmaps",
    description:
      "Follow structured paths designed to help you learn skills in the right order.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Build portfolio-ready projects with clear requirements, milestones, and outcomes.",
  },
];

const communityItems: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Community Forum",
    href: "/community",
    description:
      "Ask questions, share progress, discuss roadmaps, and learn with other developers.",
  },
  {
    title: "Developer Network",
    href: "/network",
    description:
      "Connect with serious builders, peers, mentors, and early-career developers.",
  },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="secondary"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] px-0 sm:w-[380px]">
        <nav className="flex flex-col gap-6 px-5 py-6">
          <MobileNavSection title="Learn & Build" items={learnAndBuildItems} />
          <MobileNavSection title="Community" items={communityItems} />

          <div className="border-t border-border pt-5">
            <Button className="w-full rounded-lg" size="lg">
              Join early access
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavSection({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>

      <div className="space-y-1">
        {items.map((item) => (
          <MobileNavItem
            key={item.href}
            title={item.title}
            href={item.href}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-border hover:bg-muted/60"
    >
      <p className="text-sm font-semibold leading-none">{title}</p>
      <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}
