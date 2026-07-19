"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const mobileNavLinks = [
  {
    label: "Roadmaps",
    href: "/roadmaps",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="md:hidden"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[300px] p-0">
          <SheetHeader className="border-b border-border px-5 py-5 text-left">
            <SheetTitle>CodDock</SheetTitle>
            <SheetDescription>
              Navigate CodDock roadmaps, projects, and community.
            </SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-1 px-5 py-5">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border px-5 py-5">
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
