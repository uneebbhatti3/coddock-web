import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
};

export function SectionShell({
  children,
  className,
  id,
  bleed = false,
}: SectionShellProps) {
  if (bleed) {
    return (
      <section
        id={id}
        className={cn(
          "relative left-1/2 w-screen max-w-none -translate-x-1/2",
          className,
        )}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-20">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
