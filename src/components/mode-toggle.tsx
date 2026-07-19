"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="hidden sm:flex"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 opacity-100 transition-all dark:scale-0 dark:rotate-90 dark:opacity-0" />

      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 opacity-0 transition-all dark:scale-100 dark:rotate-0 dark:opacity-100" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
