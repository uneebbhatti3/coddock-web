"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Construction,
  Layers,
  MessageSquare,
  Users,
} from "lucide-react";

import CodDockLogo from "@/components/common/coddock-logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const noticeItems = [
  "COMING SOON",
  "BUILDING CODDOCK",
  "EARLY ACCESS OPENING SOON",
  "ROADMAPS · PROJECTS · COMMUNITY",
  "UNDER CONSTRUCTION",
];

const journey = [
  { label: "Learn", icon: BookOpen },
  { label: "Build", icon: Code2 },
  { label: "Grow", icon: Layers },
  { label: "Earn", icon: Users },
] as const;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function fadeUpTransition(delay: number) {
  return {
    duration: 0.6,
    delay,
    ease: EASE_OUT,
  };
}

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <ConstructionTicker />
      <AmbientBackground />
      <SiteHeader />

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-10 xs:px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-14 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <HeroContent />
          <ProductPreview />
        </div>
      </section>

      <SiteFooter />
      <ContactNotice />
    </main>
  );
}

function ContactNotice() {
  return (
    <div className="relative z-10 mx-auto mb-3 mt-2 w-full max-w-6xl px-5 text-center">
      <p className="text-xs text-muted-foreground">
        For questions or collaboration opportunities, please reach out to us at{" "}
        <a
          href="mailto:heycoddock@gmail.com"
          className="underline hover:text-primary transition-colors"
        >
          heycoddock@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

function ConstructionTicker() {
  const prefersReducedMotion = useReducedMotion();
  const items = [...noticeItems, ...noticeItems, ...noticeItems];

  return (
    <div className="relative z-30 flex h-9 w-full items-center overflow-hidden border-b border-yellow-500/30 bg-yellow-300 text-black">
      <div
        className="w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <motion.div
          className="flex min-w-max items-center gap-6 whitespace-nowrap"
          animate={prefersReducedMotion ? undefined : { x: ["0%", "-33.333%"] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 26, ease: "linear", repeat: Infinity }
          }
        >
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2 px-1 text-[10px] font-black uppercase tracking-[0.24em] sm:text-xs"
            >
              <Construction className="size-3.5" />
              <span>{item}</span>
              <span className="size-1.5 rounded-full bg-black" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
      <div className="absolute -right-32 top-1/3 h-[280px] w-[280px] rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute -bottom-40 left-10 h-[360px] w-[360px] rounded-full bg-primary/4 blur-[90px]" />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--border) 80%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />

      <div className="absolute bottom-12 right-8 hidden -rotate-6 rounded-md border border-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-primary/20 sm:block">
        Building in public
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 xs:px-5 sm:px-8 lg:px-10">
      <div className="flex items-center gap-3">
        <CodDockLogo />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm sm:flex">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          In development
        </div>

        <ModeToggle />
      </div>
    </header>
  );
}

function HeroContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-xl lg:mx-0">
      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpTransition(0)}
        className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-primary md:text-left"
      >
        Early access soon
      </motion.p>

      <motion.h1
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpTransition(0.06)}
        className="text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl lg:text-left lg:text-[3.35rem] lg:leading-[1.05]"
      >
        The developer growth platform for people who{" "}
        <span className="text-primary">build</span>, not just study.
      </motion.h1>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpTransition(0.12)}
        className="mx-auto mt-5 max-w-md text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0 md:text-left"
      >
        CodDock helps students, self-taught developers, and junior devs follow
        structured roadmaps, build portfolio-ready projects, and get practical
        feedback from a focused developer community.
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpTransition(0.18)}
        className="mt-8"
      >
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmzCDrnne4YhPD_BeDZhd8kZBD5lCjQZGK74f0WF99MEZthw/viewform?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label="Join CodDock early access through Google Form"
          >
            <Button size="lg" className="h-11 w-full rounded-lg px-5 md:w-fit">
              <ArrowRight className="size-4" />
              Join early access
            </Button>
          </Link>
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground md:text-left">
          Takes around 2 minutes. Your answers help shape the first version of
          CodDock.
        </p>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpTransition(0.24)}
        className="mt-10"
      >
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-left">
          Your path
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
          {journey.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 text-sm backdrop-blur-sm">
                <step.icon className="size-3.5 text-primary" />
                <span className="font-medium">{step.label}</span>
              </div>

              {index < journey.length - 1 ? (
                <ArrowRight className="size-3.5 text-muted-foreground/50 max-sm:hidden" />
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ProductPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
    >
      <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-transparent blur-2xl" />

      <div className="relative space-y-3">
        <PreviewCard
          delay={0}
          className="lg:translate-x-6"
          label="Roadmap"
          title="Frontend Developer Track"
          meta="Stage 2 of 5 · 12 weeks"
        >
          <div className="space-y-2">
            {[
              "HTML & CSS foundations",
              "JavaScript essentials",
              "React fundamentals",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/50 px-3 py-2"
              >
                <div
                  className={cn(
                    "size-4 shrink-0 rounded-full border",
                    index === 0
                      ? "border-primary bg-primary/20"
                      : "border-border bg-muted/50",
                  )}
                />

                <span
                  className={cn(
                    "text-sm",
                    index === 0 ? "font-medium" : "text-muted-foreground",
                  )}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </PreviewCard>

        <PreviewCard
          delay={0.08}
          className="lg:-translate-x-2"
          label="Project"
          title="Build a booking dashboard"
          meta="3 milestones · Next.js"
        >
          <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 px-3 py-2.5">
            <div>
              <p className="text-sm font-medium">Milestone 2</p>
              <p className="text-xs text-muted-foreground">
                Auth, roles, admin view, deployment
              </p>
            </div>

            <div className="rounded-md bg-primary/15 px-2 py-1 text-xs font-medium text-primary">
              In progress
            </div>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[62%] rounded-full bg-primary" />
          </div>
        </PreviewCard>

        <PreviewCard
          delay={0.16}
          className="lg:translate-x-10"
          label="Community"
          title="Portfolio review"
          meta="12 replies · 2h ago"
        >
          <div className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-background/50 p-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
              AK
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm">
                &ldquo;Strong README — add live demo and screenshots
                next.&rdquo;
              </p>

              <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MessageSquare className="size-3" />3
                </span>
                <span>Helpful feedback</span>
              </div>
            </div>
          </div>
        </PreviewCard>
      </div>
    </motion.div>
  );
}

function PreviewCard({
  label,
  title,
  meta,
  children,
  className,
  delay,
}: {
  label: string;
  title: string;
  meta: string;
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2 + delay, ease: EASE_OUT }}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      className={cn(
        "rounded-2xl border border-border/60 bg-card/70 p-4 shadow-lg shadow-black/3 backdrop-blur-md dark:shadow-black/20",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-primary">
            {label}
          </p>

          <p className="mt-0.5 text-sm font-semibold tracking-tight">{title}</p>
        </div>

        <p className="shrink-0 text-right text-[11px] text-muted-foreground">
          {meta}
        </p>
      </div>

      {children}
    </motion.div>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 text-xs text-muted-foreground sm:px-8 lg:px-10">
      <p>© {new Date().getFullYear()} CodDock</p>
      <p className="hidden sm:block">Built for developers who ship.</p>
    </footer>
  );
}
