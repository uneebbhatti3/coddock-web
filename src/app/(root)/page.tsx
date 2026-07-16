"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  FileCode2,
  GitBranch,
  MessageSquare,
  Route,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Container from "@/components/common/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdmzCDrnne4YhPD_BeDZhd8kZBD5lCjQZGK74f0WF99MEZthw/viewform?usp=sharing";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const heroCards = [
  {
    label: "Roadmaps",
    title: "Learn with purpose",
    description:
      "Follow a staged path that connects skills, projects, and career outcomes.",
    image: "/landing-growth.png",
  },
  {
    label: "Feedback",
    title: "Grow with review",
    description:
      "Share your work, get practical feedback, and learn what to improve next.",
    image: "/landing-chat.png",
  },
  {
    label: "Practice",
    title: "Build real proof",
    description:
      "Complete portfolio-ready projects with requirements, scope, and milestones.",
    image: "/landing-practice.png",
  },
];

const systemCards = [
  {
    title: "Know what to learn next",
    description:
      "No more jumping between random tutorials. CodDock gives your learning a sequence.",
    icon: Route,
  },
  {
    title: "Build after every major stage",
    description:
      "Each roadmap should lead to visible work you can put on GitHub, your portfolio, or your resume.",
    icon: FileCode2,
  },
  {
    title: "Get feedback before applying",
    description:
      "Improve your project structure, README, UI, deployment, and presentation before you show it to recruiters or clients.",
    icon: MessageSquare,
  },
];

const roadmapSteps = [
  {
    title: "HTML & CSS foundations",
    state: "done",
  },
  {
    title: "JavaScript essentials",
    state: "done",
  },
  {
    title: "React fundamentals",
    state: "current",
  },
  {
    title: "Next.js product structure",
    state: "locked",
  },
  {
    title: "Portfolio-ready project",
    state: "locked",
  },
];

const outcomes = [
  "A clearer learning direction",
  "Projects that prove practical ability",
  "Better GitHub and README presentation",
  "Feedback before internships or junior roles",
  "More confidence applying or freelancing",
  "A serious developer community",
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.65,
      delay,
      ease: EASE_OUT,
    },
  };
}

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <HeroSection />
      <CredibilityStrip />
      <ProblemNarrative />
      <CodDockSystem />
      <RoadmapExperience />
      <CommunityExperience />
      <OutcomeSection />
      <FinalCta />
    </main>
  );
}

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
      <HeroBackground />

      <Container>
        <div className="relative z-10 flex min-h-[calc(100vh-81px)] flex-col items-center pt-20 text-center sm:pt-24 lg:pt-28">
          <motion.div
            {...(prefersReducedMotion ? {} : fadeUp(0))}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary shadow-lg shadow-primary/10 backdrop-blur"
          >
            <Sparkles className="size-4" />
            Built for developers who need proof, not another playlist
          </motion.div>

          <motion.h1
            {...(prefersReducedMotion ? {} : fadeUp(0.06))}
            className="mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.07em] sm:text-6xl lg:text-7xl lg:leading-[0.94]"
          >
            Turn scattered learning into{" "}
            <span className="text-primary">real developer proof.</span>
          </motion.h1>

          <motion.p
            {...(prefersReducedMotion ? {} : fadeUp(0.12))}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
          >
            CodDock helps students, self-taught developers, and junior devs
            follow structured roadmaps, build portfolio-ready projects, and
            improve through practical feedback from a focused developer
            community.
          </motion.p>

          <motion.div
            {...(prefersReducedMotion ? {} : fadeUp(0.18))}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href="/roadmaps"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full rounded-xl px-6 sm:w-auto",
              )}
            >
              Start learning now
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 w-full rounded-xl px-6 sm:w-auto",
              )}
            >
              Explore projects
            </Link>
          </motion.div>

          <motion.div
            {...(prefersReducedMotion ? {} : fadeUp(0.24))}
            className="mt-20 grid w-full gap-4 md:grid-cols-3 lg:mt-24"
          >
            {heroCards.map((card) => (
              <HeroCard key={card.title} {...card} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-18rem] size-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px] sm:size-[900px] lg:size-[1100px]" />

      <div className="absolute left-1/2 top-[31rem] h-[760px] w-[1600px] -translate-x-1/2 overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-contain object-top opacity-90"
        />
      </div>

      <div className="absolute left-[7%] top-[28%] h-px w-32 -rotate-30 bg-primary/70 shadow-[0_0_24px_hsl(var(--primary))]" />
      <div className="absolute right-[9%] top-[36%] h-px w-44 -rotate-30 bg-primary/60 shadow-[0_0_24px_hsl(var(--primary))]" />
      <div className="absolute right-[18%] top-[18%] h-px w-24 -rotate-30 bg-primary/50 shadow-[0_0_20px_hsl(var(--primary))]" />

      <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/70 to-background" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

function HeroCard({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 text-left shadow-2xl shadow-black/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/35 dark:shadow-black/30">
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {label}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-card via-card/55 to-transparent" />
        <Image
          src={image}
          alt=""
          width={560}
          height={340}
          className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
    </article>
  );
}

function CredibilityStrip() {
  return (
    <section className="relative border-y border-border/60 bg-card/25 py-6 backdrop-blur">
      <Container>
        <div className="grid gap-4 text-center sm:grid-cols-3">
          <StripItem number="01" text="Roadmaps connected to projects" />
          <StripItem number="02" text="Feedback before opportunity" />
          <StripItem number="03" text="Portfolio proof over passive study" />
        </div>
      </Container>
    </section>
  );
}

function StripItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/50 px-5 py-4">
      <p className="text-sm font-semibold text-primary">{number}</p>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function ProblemNarrative() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            The gap CodDock is built for
          </p>

          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Most developers do not fail because they lack content.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            They fail because the learning path is fragmented. They watch
            tutorials, start projects, get stuck, switch technologies, and never
            build enough proof to show they are ready.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <ProblemCard
            title="Too much learning. Not enough direction."
            description="You can find hundreds of tutorials, but very few tell you what to learn first, what to skip, and what to build after each stage."
          />
          <ProblemCard
            title="Projects that do not prove readiness."
            description="A copied UI or incomplete dashboard does not show problem-solving, product thinking, deployment, or real-world execution."
          />
          <ProblemCard
            title="No practical feedback loop."
            description="Without feedback, developers keep repeating the same mistakes in code structure, GitHub presentation, README quality, and portfolio positioning."
          />
        </div>
      </Container>
    </section>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/30">
      <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Target className="size-5" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

function CodDockSystem() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              The CodDock system
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              A structured path from learning to proof of work.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground">
              CodDock is designed around one simple idea: every serious learning
              path should produce visible progress, stronger projects, and
              better confidence before applying for internships, jobs, or
              freelance work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systemCards.map((item, index) => (
              <article
                key={item.title}
                className={cn(
                  "rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur",
                  index === 1 ? "sm:translate-y-8" : "",
                )}
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}

            <article className="rounded-3xl border border-primary/30 bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/20 sm:translate-y-8">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white/15">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-semibold tracking-tight">
                Proof becomes the product
              </h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
                The goal is not to complete more lessons. The goal is to leave
                with work that can be reviewed, shared, and defended.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

function RoadmapExperience() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Roadmaps that lead somewhere
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Learn the skill, then prove the skill.
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground">
            Each roadmap should connect topics with tasks, projects, and review
            checkpoints. That is what turns learning into evidence.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/70 bg-card/60 p-5 shadow-2xl shadow-black/[0.03] backdrop-blur dark:shadow-black/20">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Roadmap preview
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  Frontend Developer Track
                </h3>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                5 stages
              </span>
            </div>

            <div className="space-y-2">
              {roadmapSteps.map((step, index) => (
                <RoadmapStep key={step.title} index={index} {...step} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-6 shadow-2xl shadow-black/[0.03] backdrop-blur dark:shadow-black/20">
            <div className="absolute -right-24 -top-24 size-56 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Project challenge
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Build a booking dashboard
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A practical project that forces you to think through forms,
                authentication, user roles, dashboard states, deployment, and
                presentation.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Requirements",
                  "Auth & roles",
                  "Admin dashboard",
                  "Deploy & document",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>

                    {index === 1 ? (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        Active
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Completion</span>
                  <span className="text-primary">62%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[62%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function RoadmapStep({
  title,
  state,
  index,
}: {
  title: string;
  state: string;
  index: number;
}) {
  const isDone = state === "done";
  const isCurrent = state === "current";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-7 items-center justify-center rounded-full border text-xs",
            isDone || isCurrent
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground",
          )}
        >
          {isDone ? <CheckCircle2 className="size-4" /> : index + 1}
        </div>

        <span
          className={cn(
            "text-sm",
            isDone || isCurrent ? "font-medium" : "text-muted-foreground",
          )}
        >
          {title}
        </span>
      </div>

      {isCurrent ? (
        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          Current
        </span>
      ) : null}
    </div>
  );
}

function CommunityExperience() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="rounded-[2rem] border border-border/70 bg-card/60 p-5 shadow-2xl shadow-black/[0.03] backdrop-blur dark:shadow-black/20">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Feedback feed
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">
                  Portfolio review
                </h3>
              </div>

              <MessageSquare className="size-5 text-primary" />
            </div>

            <div className="space-y-3">
              <Feedback name="AK">
                Strong README. Add a live demo, screenshots, and explain the
                dashboard flow before sharing this with recruiters.
              </Feedback>
              <Feedback name="SR">
                The UI is clean. Now add empty states, loading states, and
                validation messages to make it feel production-ready.
              </Feedback>
              <Feedback name="UB">
                Good project direction. Add a short case study explaining the
                problem, users, features, and trade-offs.
              </Feedback>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Built around feedback
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Progress gets stronger when it is reviewed.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground">
              CodDock community should not be another noisy group chat. It
              should be a focused space for project submissions, roadmap help,
              portfolio reviews, and practical accountability.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <MiniPoint icon={GitBranch} text="GitHub review" />
              <MiniPoint icon={Code2} text="Project structure" />
              <MiniPoint icon={BookOpen} text="Roadmap direction" />
              <MiniPoint icon={Users} text="Peer accountability" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Feedback({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border/60 bg-background/60 p-4">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
        {name}
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{children}</p>
    </div>
  );
}

function MiniPoint({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/50 p-4">
      <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-4" />
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

function OutcomeSection() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="rounded-[2rem] border border-border/70 bg-card/60 p-6 backdrop-blur md:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                What users should leave with
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Not motivation. Evidence.
              </h2>
              <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground">
                The platform should help users create proof they can show in a
                portfolio, GitHub profile, interview, freelance proposal, or
                internship application.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 p-4"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <p className="text-sm font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="pricing" className="relative py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/20 md:p-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Help shape the first serious developer growth platform for
              builders.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-primary-foreground/80">
              Join early access, answer a few focused questions, and help us
              build the first version around real developer problems.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-12 rounded-xl bg-white px-6 text-primary hover:bg-white/90",
                )}
              >
                Get early access
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
