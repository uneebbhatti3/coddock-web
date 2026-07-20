"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { Input } from "@/components/ui/input";

export default function ProjectsSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const defaultValue = searchParams.get("q") ?? "";

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }

    startTransition(() => {
      router.replace(`/projects?${params.toString()}`, {
        scroll: false,
      });
    });
  };

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        type="search"
        defaultValue={defaultValue}
        placeholder="Search projects, skills, or technologies..."
        aria-label="Search projects"
        onChange={(event) => handleSearch(event.target.value)}
        className="h-11 rounded-xl bg-card/60 pl-9"
      />

      {isPending ? (
        <span className="absolute right-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary" />
      ) : null}
    </div>
  );
}
