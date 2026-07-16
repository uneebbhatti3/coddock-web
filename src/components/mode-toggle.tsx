"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle explicitly between light and dark (ignore 'system')
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className={"hidden sm:flex"}
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark
            ? "scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
