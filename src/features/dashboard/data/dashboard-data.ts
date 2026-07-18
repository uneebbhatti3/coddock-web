import {
  BookOpen,
  CheckCircle2,
  Code2,
  MessageSquareText,
  PenLine,
  Sparkles,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    label: "Roadmap progress",
    value: "0%",
    description: "Start your first learning path",
    icon: BookOpen,
  },
  {
    label: "Community posts",
    value: "0",
    description: "Ask or answer your first question",
    icon: MessageSquareText,
  },
  {
    label: "Project feedback",
    value: "0",
    description: "Submit a project for review",
    icon: Sparkles,
  },
];

export const gettingStartedItems = [
  {
    title: "Choose your first roadmap",
    description: "Pick the path that matches your current goal.",
    href: "/learning-roadmaps",
    cta: "Explore roadmaps",
    icon: BookOpen,
    completed: false,
  },
  {
    title: "Start a portfolio-ready project",
    description: "Build something that proves practical ability.",
    href: "/projects",
    cta: "View projects",
    icon: Code2,
    completed: false,
  },
  {
    title: "Ask your first community question",
    description: "Get help with blockers, projects, or learning direction.",
    href: "/community",
    cta: "Ask question",
    icon: MessageSquareText,
    completed: false,
  },
  {
    title: "Prepare for feedback",
    description: "Share your progress and improve with practical review.",
    href: "/community",
    cta: "Get feedback",
    icon: PenLine,
    completed: false,
  },
];

export const communityPrompts = [
  "Which roadmap should I start with?",
  "How can I improve my project README?",
  "What should I build after learning React?",
];

export const recommendedActions = [
  {
    label: "Recommended first step",
    title: "Start with a structured roadmap",
    description:
      "Before asking random questions or jumping into projects, choose a roadmap so your learning has direction.",
    href: "/learning-roadmaps",
    cta: "Choose roadmap",
    icon: CheckCircle2,
  },
  {
    label: "Build proof",
    title: "Turn learning into a project",
    description:
      "Every major learning stage should lead to a small but clear project you can show on GitHub or your portfolio.",
    href: "/projects",
    cta: "Explore projects",
    icon: Code2,
  },
];

export const forumPosts = [];

export { Users };
