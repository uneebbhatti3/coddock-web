"use client";

import { BookOpen, LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    id: 1,
    label: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    label: "Community Forum",
    link: "/community",
    icon: Users,
  },
  {
    id: 3,
    label: "Learning Roadmaps",
    link: "/learning-roadmaps",
    icon: BookOpen,
  },
];

type NavAsideProps = {
  collapsed?: boolean;
  onNavigate?: () => void;
};

export default function NavAside({
  collapsed = false,
  onNavigate,
}: NavAsideProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex h-full flex-col gap-1 bg-background px-2 py-4",
        collapsed ? "items-center" : "",
      )}
    >
      {navLinks.map((navLink) => {
        const Icon = navLink.icon;

        const isActive =
          pathname === navLink.link ||
          (navLink.link !== "/" && pathname?.startsWith(navLink.link));

        const linkContent = (
          <Link
            href={navLink.link}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group flex h-11 items-center rounded-md text-sm font-medium outline-none transition-colors",
              "focus-visible:ring-2 focus-visible:ring-primary/40",
              collapsed ? "w-11 justify-center" : "w-full gap-3 px-3",
              isActive
                ? "border border-primary/30 bg-primary/10 text-primary shadow-inner"
                : "text-muted-foreground hover:bg-accent hover:text-primary",
            )}
          >
            <Icon
              className={cn(
                "size-5 shrink-0 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-primary",
              )}
              aria-hidden="true"
            />

            {!collapsed ? <span>{navLink.label}</span> : null}
          </Link>
        );

        if (collapsed) {
          return (
            <Tooltip key={navLink.id}>
              <TooltipTrigger>{linkContent}</TooltipTrigger>
              <TooltipContent side="right" align="center">
                {navLink.label}
              </TooltipContent>
            </Tooltip>
          );
        }

        return <div key={navLink.id}>{linkContent}</div>;
      })}
    </nav>
  );
}
