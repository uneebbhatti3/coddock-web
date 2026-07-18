"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import NavAside from "@/components/common/nav-aside";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function MobileDashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        size="icon"
        className="md:hidden"
        aria-label="Open dashboard navigation"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[290px] p-0">
          <SheetHeader className="border-b border-border px-5 py-5 text-left">
            <SheetTitle>CodDock</SheetTitle>
            <SheetDescription>
              Navigate your dashboard, community, and roadmaps.
            </SheetDescription>
          </SheetHeader>

          <NavAside onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
