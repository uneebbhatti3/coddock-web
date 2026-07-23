import {
  Code2,
  HelpCircle,
  Map,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

export const communityCategories = [
  {
    label: "All",
    value: "all",
    icon: MessageSquareText,
  },
  {
    label: "Questions",
    value: "questions",
    icon: HelpCircle,
  },
  {
    label: "Project Help",
    value: "project-help",
    icon: Code2,
  },
  {
    label: "Roadmaps",
    value: "roadmaps",
    icon: Map,
  },
  {
    label: "Feedback",
    value: "feedback",
    icon: Sparkles,
  },
];

export const communityPosts = [
  {
    id: "1",
    title: "How should I structure my first Next.js project?",
    excerpt:
      "I understand pages and components, but I am confused about where to put feature logic, hooks, services, and reusable UI.",
    content:
      "I understand pages and components in Next.js, but I am confused about where to put feature logic, hooks, services, types, and reusable UI. I want my project structure to be clean enough for a portfolio project, but I do not want to over-engineer it.\n\nRight now, I usually put everything inside components, but it starts getting messy when the project grows. How should I structure a beginner-to-intermediate Next.js project properly?",
    category: "Project Help",
    author: {
      id: "u1",
      name: "Uneeb",
      role: "Full-stack learner",
      initials: "UB",
      bio: "Aspiring developer passionate about modern web technologies and building clean, maintainable projects.",
    },
    replies: 4,
    views: 128,
    likes: 16,
    createdAt: "2h ago",
  },
  {
    id: "2",
    title: "Should I learn backend before starting full-stack projects?",
    excerpt:
      "I know React basics and want to build real apps, but I am not sure when to start APIs, databases, and auth.",
    content:
      "I know React basics and can build simple frontend projects. Now I want to build real full-stack applications, but I am not sure if I should first learn backend deeply or start building projects and learn backend along the way.\n\nWhat would be the better path for someone who wants to become job-ready?",
    category: "Roadmaps",
    author: {
      id: "u2",
      name: "Ahsan",
      role: "Frontend beginner",
      initials: "AH",
      bio: "Learning React and JavaScript one project at a time – aiming to become confident with full-stack apps.",
    },
    replies: 7,
    views: 214,
    likes: 23,
    createdAt: "5h ago",
  },
  {
    id: "3",
    title: "Can someone review my portfolio README structure?",
    excerpt:
      "I want to make my GitHub projects look more professional before applying for internships.",
    content:
      "I am preparing my GitHub projects before applying for internships. I want to improve my README structure so recruiters or seniors can quickly understand what the project does, what problem it solves, and how it was built.\n\nWhat sections should a good README include?",
    category: "Feedback",
    author: {
      id: "u3",
      name: "Sara",
      role: "Student developer",
      initials: "SA",
      bio: "Final-year CS student working on real-world projects and building a strong portfolio presence.",
    },
    replies: 2,
    views: 91,
    likes: 7,
    createdAt: "1d ago",
  },
];

export const communityReplies = [
  {
    id: "r1",
    postId: "1",
    author: {
      id: "u4",
      name: "Hamza",
      role: "Frontend Developer",
      initials: "HZ",
      bio: "Frontend developer interested in UX and clean architecture. Always happy to help beginners structure their code.",
    },
    content:
      "A good rule is to keep reusable UI in components/ui or components/common, and feature-specific logic inside a feature folder. For example, auth forms should live inside features/auth, while buttons and inputs should stay in components/ui.",
    createdAt: "1h ago",
  },
  {
    id: "r2",
    postId: "1",
    author: {
      id: "u5",
      name: "Areeba",
      role: "Full-stack Developer",
      initials: "AR",
      bio: "Full-stack developer who loves sharing tips and helping others make sense of project structure.",
    },
    content:
      "Do not overthink the structure at the start. First separate by feature, then extract shared components only when two or more features use them. This avoids creating a global folder too early.",
    createdAt: "45m ago",
  },
  {
    id: "r3",
    postId: "1",
    author: {
      id: "u6",
      name: "Bilal",
      role: "Backend Learner",
      initials: "BL",
      bio: "Exploring backend technologies and passionate about writing documentation that helps others.",
    },
    content:
      "For portfolio projects, structure matters, but clarity matters more. Add a README section explaining your architecture decisions. That will make the project look more intentional.",
    createdAt: "20m ago",
  },
];

export function getCommunityPostById(id: string) {
  return communityPosts.find((post) => post.id === id);
}

export function getRepliesByPostId(postId: string) {
  return communityReplies.filter((reply) => reply.postId === postId);
}
