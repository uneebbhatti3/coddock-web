import {
  BarChart3,
  BookOpen,
  Brain,
  Code2,
  Globe,
  Layers,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const trustedCompanies = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Netflix",
  "Spotify",
  "Adobe",
  "IBM",
  "Oracle",
  "Salesforce",
  "Stripe",
  "Shopify",
  "Airbnb",
  "Uber",
  "Tesla",
  "Intel",
  "Samsung",
  "Nvidia",
  "PayPal",
] as const;

export const platformPills = [
  { label: "Roadmaps", color: "bg-rose-500/20 text-rose-300" },
  { label: "Projects", color: "bg-sky-500/20 text-sky-300" },
  { label: "Community", color: "bg-violet-500/20 text-violet-300" },
  { label: "Portfolio", color: "bg-amber-500/20 text-amber-300" },
  { label: "Careers", color: "bg-emerald-500/20 text-emerald-300" },
] as const;

export const dashboardQuadrants = [
  {
    title: "Roadmap progress",
    items: ["HTML & CSS", "JavaScript", "React basics"],
    active: false,
  },
  {
    title: "Active project",
    items: ["Booking dashboard", "Auth milestone", "Deploy preview"],
    active: true,
  },
  {
    title: "Community feedback",
    items: ["README review", "Portfolio critique", "Debug thread"],
    active: false,
  },
  {
    title: "Weekly goals",
    items: ["Ship milestone", "Post update", "Review peers"],
    active: false,
  },
] as const;

export const aiProfileFeatures = [
  {
    icon: Sparkles,
    title: "Customizable profiles",
    description:
      "Present your skills, projects, and proof-of-work in a profile built for hiring managers.",
  },
  {
    icon: Brain,
    title: "AI profile insights",
    description:
      "Get suggestions to strengthen your portfolio narrative, README, and project highlights.",
  },
  {
    icon: Target,
    title: "Career-ready positioning",
    description:
      "Translate what you have built into language that reads well for internships and junior roles.",
  },
] as const;

export const bentoFeatures = [
  {
    icon: BookOpen,
    title: "Structured roadmaps",
    description:
      "Follow clear stages from fundamentals to job-ready outcomes without guessing what to learn next.",
    className: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Portfolio projects",
    description:
      "Build real apps with milestones, requirements, and deployment guidance.",
    className: "md:col-span-1",
  },
  {
    icon: MessageSquare,
    title: "Actionable feedback",
    description:
      "Share work, get reviews, and improve faster inside a community focused on execution.",
    className: "md:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    description:
      "See where you stand across skills, projects, and roadmap stages in one dashboard.",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Peer accountability",
    description:
      "Stay consistent with builders who are also moving from learning to shipping.",
    className: "md:col-span-1",
  },
  {
    icon: Rocket,
    title: "Career momentum",
    description:
      "Move from tutorials to proof-of-work that supports internships, freelancing, and junior roles.",
    className: "md:col-span-2",
  },
] as const;

export const pricingPlans = [
  {
    name: "Pro",
    price: "$200",
    period: "/mo",
    highlight: true,
    features: [
      "Full roadmap library",
      "Unlimited project submissions",
      "Priority community reviews",
      "Portfolio AI insights",
    ],
  },
  {
    name: "Starter",
    price: "$100",
    period: "/mo",
    highlight: false,
    features: [
      "Core roadmap access",
      "Monthly project reviews",
      "Community spaces",
      "Progress dashboard",
    ],
  },
  {
    name: "Basic",
    price: "$50",
    period: "/mo",
    highlight: false,
    features: [
      "Beginner roadmaps",
      "Starter projects",
      "Forum access",
      "Weekly goals",
    ],
  },
] as const;

export const platformStats = [
  { value: "1.7M+", label: "Learning hours" },
  { value: "7.5M+", label: "Community replies" },
  { value: "59K", label: "Projects shipped" },
  { value: "807K", label: "Roadmap milestones" },
] as const;

export const annualPlan = {
  price: "$1,000",
  period: "/year",
  features: [
    "Everything in Pro",
    "Annual career review session",
    "Portfolio case-study templates",
    "Early access to new roadmaps",
    "Private accountability group",
  ],
} as const;

export const splitFeatures = [
  {
    title: "Your personalized dashboard",
    description:
      "Track roadmap stages, active projects, and community feedback from one calm home screen.",
    type: "dashboard" as const,
  },
  {
    title: "One-click project flow",
    description:
      "Move from milestone to submission without friction — update progress and share work in seconds.",
    type: "extension" as const,
  },
] as const;

export const sectionIcons = {
  roadmap: Layers,
  project: Code2,
  community: Globe,
  shield: Shield,
  zap: Zap,
};
