import { Bot, Code2, Database, Layers3 } from "lucide-react";

import type { Roadmap } from "@/features/roadmaps/types/roadmaps-types";

export const roadmapFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Frontend",
    value: "frontend",
  },
  {
    label: "Backend",
    value: "backend",
  },
  {
    label: "Full-stack",
    value: "full-stack",
  },
  {
    label: "AI Agents",
    value: "ai-agents",
  },
];

export const roadmaps: Roadmap[] = [
  {
    id: "1",
    slug: "frontend-developer",
    title: "Frontend Developer Roadmap",
    description:
      "Learn frontend development chapter by chapter, starting from HTML and CSS, then moving into JavaScript, React, Next.js, UI patterns, and portfolio-ready projects.",
    longDescription:
      "This roadmap helps you build a strong frontend foundation through structured chapters, focused lessons, and practical projects. You will move from HTML and CSS basics to JavaScript, React, Next.js, responsive UI patterns, and production-ready frontend habits.",
    path: "frontend",
    level: "Beginner-friendly",
    chaptersCount: 4,
    lessonsCount: 12,
    projectsCount: 4,
    estimatedDuration: "8–10 weeks",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    status: "published",
    icon: Code2,
    chapters: [
      {
        id: "html-foundations",
        title: "Learn HTML",
        description:
          "Start with the structure of the web. Learn semantic HTML, document structure, forms, links, images, and accessibility basics.",
        estimatedDuration: "1 week",
        items: [
          {
            id: "what-is-html",
            type: "lesson",
            title: "What is HTML?",
            description:
              "Understand what HTML does and how browsers use it to structure web pages.",
            estimatedDuration: "20 min",
          },
          {
            id: "semantic-html",
            type: "lesson",
            title: "Semantic HTML",
            description:
              "Learn headings, sections, articles, navigation, and why semantic markup matters.",
            estimatedDuration: "35 min",
          },
          {
            id: "html-forms",
            type: "lesson",
            title: "HTML Forms",
            description:
              "Learn inputs, labels, buttons, validation attributes, and basic form structure.",
            estimatedDuration: "40 min",
          },
          {
            id: "personal-profile-page",
            type: "project",
            title: "Build a Personal Profile Page",
            description:
              "Create a clean personal profile page using semantic HTML. Include your introduction, skills, links, and contact section.",
            difficulty: "Beginner",
            estimatedDuration: "2–3 hours",
          },
        ],
      },
      {
        id: "css-foundations",
        title: "Learn CSS",
        description:
          "Learn how to style pages with colors, spacing, typography, layouts, responsive design, and reusable visual patterns.",
        estimatedDuration: "1–2 weeks",
        items: [
          {
            id: "css-selectors",
            type: "lesson",
            title: "CSS Selectors and Cascade",
            description:
              "Understand selectors, specificity, inheritance, and how CSS rules are applied.",
            estimatedDuration: "45 min",
          },
          {
            id: "box-model",
            type: "lesson",
            title: "Box Model, Spacing, and Sizing",
            description:
              "Learn margin, padding, border, width, height, and layout spacing fundamentals.",
            estimatedDuration: "45 min",
          },
          {
            id: "flexbox-grid",
            type: "lesson",
            title: "Flexbox and Grid Basics",
            description:
              "Use modern CSS layout tools to create responsive sections and page layouts.",
            estimatedDuration: "1 hour",
          },
          {
            id: "responsive-landing-page",
            type: "project",
            title: "Build a Responsive Landing Page",
            description:
              "Create a responsive landing page with hero section, features, CTA, and footer using HTML and CSS.",
            difficulty: "Beginner",
            estimatedDuration: "4–6 hours",
          },
        ],
      },
      {
        id: "javascript-foundations",
        title: "Learn JavaScript",
        description:
          "Learn JavaScript fundamentals needed to make interfaces interactive and dynamic.",
        estimatedDuration: "2 weeks",
        items: [
          {
            id: "variables-functions",
            type: "lesson",
            title: "Variables, Functions, and Conditions",
            description:
              "Understand the core building blocks of JavaScript logic.",
            estimatedDuration: "1 hour",
          },
          {
            id: "arrays-objects",
            type: "lesson",
            title: "Arrays and Objects",
            description:
              "Learn how to store, organize, loop through, and update data.",
            estimatedDuration: "1 hour",
          },
          {
            id: "dom-events",
            type: "lesson",
            title: "DOM and Events",
            description:
              "Learn how JavaScript interacts with HTML elements and user actions.",
            estimatedDuration: "1 hour",
          },
          {
            id: "interactive-todo-list",
            type: "project",
            title: "Build an Interactive Todo List",
            description:
              "Create a todo app with add, complete, delete, and local state behavior.",
            difficulty: "Beginner",
            estimatedDuration: "5–7 hours",
          },
        ],
      },
      {
        id: "react-foundations",
        title: "Learn React",
        description:
          "Move from static pages to component-based UI development with React.",
        estimatedDuration: "2 weeks",
        items: [
          {
            id: "components-props",
            type: "lesson",
            title: "Components and Props",
            description:
              "Learn how to break interfaces into reusable components.",
            estimatedDuration: "1 hour",
          },
          {
            id: "state-events",
            type: "lesson",
            title: "State and Events",
            description:
              "Learn how React handles user interaction and changing data.",
            estimatedDuration: "1 hour",
          },
          {
            id: "forms-lists",
            type: "lesson",
            title: "Forms and Lists",
            description:
              "Render lists, handle form inputs, and manage UI state properly.",
            estimatedDuration: "1 hour",
          },
          {
            id: "developer-dashboard-ui",
            type: "project",
            title: "Build a Developer Dashboard UI",
            description:
              "Create a responsive dashboard interface with cards, navigation, stats, and reusable React components.",
            difficulty: "Intermediate",
            estimatedDuration: "1–2 days",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    slug: "backend-developer",
    title: "Backend Developer Roadmap",
    description:
      "Build backend skills through HTTP, APIs, databases, authentication, validation, testing, deployment, and practical server-side projects.",
    longDescription:
      "This roadmap focuses on the backend skills required to build reliable applications. You will learn how the web works, how APIs are designed, how databases are structured, and how authentication, validation, testing, and deployment work in real products.",
    path: "backend",
    level: "Intermediate",
    chaptersCount: 2,
    lessonsCount: 6,
    projectsCount: 2,
    estimatedDuration: "10–12 weeks",
    tags: ["Node.js", "APIs", "PostgreSQL", "Auth", "Testing"],
    status: "published",
    icon: Database,
    chapters: [
      {
        id: "web-http-fundamentals",
        title: "Web & HTTP Fundamentals",
        description:
          "Understand clients, servers, HTTP methods, status codes, headers, cookies, and request-response flow.",
        estimatedDuration: "1 week",
        items: [
          {
            id: "client-server-model",
            type: "lesson",
            title: "Client-Server Model",
            description:
              "Understand how browsers, servers, APIs, and databases communicate.",
            estimatedDuration: "30 min",
          },
          {
            id: "http-methods-status-codes",
            type: "lesson",
            title: "HTTP Methods and Status Codes",
            description:
              "Learn GET, POST, PATCH, DELETE, common status codes, and API response patterns.",
            estimatedDuration: "45 min",
          },
          {
            id: "http-notes-api",
            type: "project",
            title: "Build a Notes API",
            description:
              "Create a small REST API to practice routing, request handling, validation, and response status codes.",
            difficulty: "Beginner",
            estimatedDuration: "1 day",
          },
        ],
      },
      {
        id: "database-foundations",
        title: "Database Foundations",
        description:
          "Learn tables, relationships, indexes, migrations, querying, and basic database design.",
        estimatedDuration: "2 weeks",
        items: [
          {
            id: "relational-database-basics",
            type: "lesson",
            title: "Relational Database Basics",
            description:
              "Understand tables, rows, columns, primary keys, and relationships.",
            estimatedDuration: "45 min",
          },
          {
            id: "database-relationships",
            type: "lesson",
            title: "Database Relationships",
            description:
              "Learn one-to-one, one-to-many, and many-to-many relationships.",
            estimatedDuration: "1 hour",
          },
          {
            id: "task-management-api",
            type: "project",
            title: "Build a Task Management API",
            description:
              "Build a task API with users, tasks, relational data, and database-backed CRUD.",
            difficulty: "Intermediate",
            estimatedDuration: "2–3 days",
          },
        ],
      },
    ],
  },

  {
    id: "3",
    slug: "full-stack-developer",
    title: "Full-Stack Developer Roadmap",
    description:
      "Learn how to connect frontend, backend, databases, authentication, deployment, and product thinking into complete real-world applications.",
    longDescription:
      "This roadmap helps you connect frontend and backend skills into complete applications. You will build product-style features, work with databases, authentication, dashboards, deployment, and user flows.",
    path: "full-stack",
    level: "Project-based",
    chaptersCount: 1,
    lessonsCount: 3,
    projectsCount: 1,
    estimatedDuration: "12–14 weeks",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Auth", "Deployment"],
    status: "published",
    icon: Layers3,
    chapters: [
      {
        id: "full-stack-foundations",
        title: "Full-Stack Foundations",
        description:
          "Understand how frontend, backend, database, authentication, and deployment fit together.",
        estimatedDuration: "1 week",
        items: [
          {
            id: "full-stack-architecture",
            type: "lesson",
            title: "How Full-Stack Apps Work",
            description:
              "Understand how UI, APIs, databases, authentication, and deployment connect.",
            estimatedDuration: "45 min",
          },
          {
            id: "full-stack-starter-app",
            type: "project",
            title: "Build a Full-Stack Starter App",
            description:
              "Build a small full-stack app with pages, API routes, database storage, and deployment.",
            difficulty: "Intermediate",
            estimatedDuration: "3–5 days",
          },
        ],
      },
    ],
  },

  {
    id: "4",
    slug: "ai-agent-developer",
    title: "AI Agent Developer Roadmap",
    description:
      "Learn how to build practical AI agents with tools, workflows, memory, RAG, APIs, and real product use cases.",
    longDescription:
      "This roadmap introduces practical AI agent development. You will learn how agents use tools, APIs, structured outputs, memory, retrieval, and workflows to solve real product problems.",
    path: "ai-agents",
    level: "Emerging skill",
    chaptersCount: 1,
    lessonsCount: 2,
    projectsCount: 1,
    estimatedDuration: "6–8 weeks",
    tags: ["AI Agents", "Tool Calling", "RAG", "APIs", "Workflows"],
    status: "published",
    icon: Bot,
    chapters: [
      {
        id: "agent-foundations",
        title: "AI Agent Foundations",
        description:
          "Learn what AI agents are, when to use them, how tools work, and how agent workflows are structured.",
        estimatedDuration: "1 week",
        items: [
          {
            id: "what-are-ai-agents",
            type: "lesson",
            title: "What Are AI Agents?",
            description:
              "Understand agents, tools, workflows, memory, and structured outputs.",
            estimatedDuration: "45 min",
          },
          {
            id: "weather-agent",
            type: "project",
            title: "Build a Weather Agent",
            description:
              "Build an AI agent that calls a weather API and returns structured answers.",
            difficulty: "Beginner",
            estimatedDuration: "1–2 days",
          },
        ],
      },
    ],
  },
];

export function getPublishedRoadmaps() {
  return roadmaps.filter((roadmap) => roadmap.status === "published");
}

export function getRoadmapBySlug(slug: string) {
  return getPublishedRoadmaps().find((roadmap) => roadmap.slug === slug);
}
