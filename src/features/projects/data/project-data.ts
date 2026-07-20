import { Bot, Code2, Database, LayoutDashboard, Layers3 } from "lucide-react";

import type { Project } from "@/features/projects/types/project-types";

export const projectCategoryFilters = [
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

export const projectDifficultyFilters = [
  {
    label: "All levels",
    value: "all",
  },
  {
    label: "Beginner",
    value: "Beginner",
  },
  {
    label: "Intermediate",
    value: "Intermediate",
  },
  {
    label: "Advanced",
    value: "Advanced",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "personal-profile-page",
    title: "Personal Profile Page",
    description:
      "Build a clean personal profile page using semantic HTML. Include your introduction, skills, links, and contact section.",
    longDescription:
      "This project helps you practice semantic HTML by creating a simple personal profile page that introduces who you are, what you are learning, and where people can find your work.",
    problemStatement:
      "Many beginner developers learn HTML tags but do not know how to structure a real page. This project forces you to use semantic HTML to create a page that could later become part of your portfolio.",
    whatYouWillBuild: [
      "A personal introduction section",
      "A skills or technologies section",
      "A simple projects or learning goals section",
      "A contact or social links section",
      "A clean semantic HTML page structure",
    ],
    requirements: [
      "Use semantic HTML elements such as header, main, section, article, and footer.",
      "Add a clear page title and heading hierarchy.",
      "Include your name, short intro, skills, and useful links.",
      "Use accessible labels or meaningful text for links.",
      "Keep the structure clean enough to style later with CSS.",
    ],
    acceptanceCriteria: [
      "The page has valid semantic HTML structure.",
      "The content is organized into clear sections.",
      "The page can be understood without CSS.",
      "Links have meaningful text.",
      "The project is pushed to GitHub with a simple README.",
    ],
    suggestedTechStack: ["HTML"],
    submissionInstructions: [
      "Push your code to a public GitHub repository.",
      "Add a README explaining what you built.",
      "Include screenshots if possible.",
      "Share the GitHub repository link when submitting.",
    ],
    category: "frontend",
    difficulty: "Beginner",
    estimatedDuration: "2–3 hours",
    skills: ["HTML", "Semantic HTML", "Accessibility", "Page Structure"],
    status: "published",
    icon: Code2,
    roadmapSlug: "frontend-developer",
    roadmapTitle: "Frontend Developer Roadmap",
  },
  {
    id: "2",
    slug: "responsive-landing-page",
    title: "Responsive Landing Page",
    description:
      "Create a responsive landing page with hero section, features, CTA, pricing section, and footer using HTML and CSS.",
    longDescription:
      "This project helps you practice layout, spacing, responsive design, and visual hierarchy by building a realistic landing page.",
    problemStatement:
      "Frontend developers need to understand how to convert a product idea into a clean, responsive page. This project teaches page sections, layout decisions, and mobile responsiveness.",
    whatYouWillBuild: [
      "A hero section with headline, description, and CTA",
      "A feature section",
      "A simple pricing or benefits section",
      "A call-to-action section",
      "A footer",
      "Responsive layout for mobile and desktop",
    ],
    requirements: [
      "Use HTML and CSS only.",
      "Create at least five clear page sections.",
      "Make the page responsive for mobile and desktop.",
      "Use consistent spacing, font sizes, and alignment.",
      "Avoid using CSS frameworks for this version.",
    ],
    acceptanceCriteria: [
      "The landing page works on mobile and desktop.",
      "The layout does not break at common screen widths.",
      "The sections are visually clear and readable.",
      "The CSS is organized and understandable.",
      "The project includes a GitHub README.",
    ],
    suggestedTechStack: ["HTML", "CSS"],
    submissionInstructions: [
      "Push the source code to GitHub.",
      "Deploy the page using Vercel, Netlify, or GitHub Pages.",
      "Add the live URL and GitHub URL to your submission.",
      "Mention what layout techniques you used in the README.",
    ],
    category: "frontend",
    difficulty: "Beginner",
    estimatedDuration: "4–6 hours",
    skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid"],
    status: "published",
    icon: LayoutDashboard,
    roadmapSlug: "frontend-developer",
    roadmapTitle: "Frontend Developer Roadmap",
  },
  {
    id: "3",
    slug: "interactive-todo-list",
    title: "Interactive Todo List",
    description:
      "Create a todo app with add, complete, delete, filtering, and local state behavior using JavaScript.",
    longDescription:
      "This project helps you practice JavaScript fundamentals by building a small interactive app with real user actions.",
    problemStatement:
      "Many beginners understand JavaScript syntax but struggle to connect it with UI behavior. This project teaches DOM updates, events, and state management through a practical app.",
    whatYouWillBuild: [
      "A todo input form",
      "Add todo functionality",
      "Complete and delete actions",
      "Basic filtering",
      "Empty state",
      "Optional localStorage persistence",
    ],
    requirements: [
      "Users can add a todo item.",
      "Users can mark a todo as completed.",
      "Users can delete a todo.",
      "The UI updates without page refresh.",
      "Show an empty state when there are no todos.",
    ],
    acceptanceCriteria: [
      "Todo actions work correctly.",
      "The code separates data and rendering logic clearly.",
      "The UI handles empty and populated states.",
      "There are no major console errors.",
      "The project includes a short README.",
    ],
    suggestedTechStack: ["HTML", "CSS", "JavaScript"],
    submissionInstructions: [
      "Push the project to GitHub.",
      "Deploy it if possible.",
      "Record or screenshot the main interactions.",
      "Explain the JavaScript logic in your README.",
    ],
    category: "frontend",
    difficulty: "Beginner",
    estimatedDuration: "5–7 hours",
    skills: ["JavaScript", "DOM", "Events", "Local State"],
    status: "published",
    icon: Code2,
    roadmapSlug: "frontend-developer",
    roadmapTitle: "Frontend Developer Roadmap",
  },
  {
    id: "4",
    slug: "developer-dashboard-ui",
    title: "Developer Dashboard UI",
    description:
      "Build a responsive dashboard interface with cards, sidebar navigation, stats, lists, and reusable React components.",
    longDescription:
      "This project helps you practice React component architecture by building a realistic dashboard interface.",
    problemStatement:
      "Many portfolio projects look like isolated components instead of real application screens. This project helps you build a complete UI that demonstrates layout, reusable components, and dashboard thinking.",
    whatYouWillBuild: [
      "A dashboard shell with sidebar/header",
      "Reusable stat cards",
      "A recent activity section",
      "A list or table section",
      "Responsive layout behavior",
      "Component-based structure",
    ],
    requirements: [
      "Use React or Next.js.",
      "Split the UI into reusable components.",
      "Create a responsive dashboard layout.",
      "Use realistic placeholder data.",
      "Keep styling consistent across cards and sections.",
    ],
    acceptanceCriteria: [
      "The dashboard is responsive.",
      "Components are reusable and named clearly.",
      "Data is separated from UI where reasonable.",
      "The layout feels like a real app screen.",
      "The README explains the component structure.",
    ],
    suggestedTechStack: ["React", "Next.js", "Tailwind CSS"],
    submissionInstructions: [
      "Push the project to GitHub.",
      "Deploy the project on Vercel.",
      "Add screenshots to the README.",
      "Explain your component structure and layout decisions.",
    ],
    category: "frontend",
    difficulty: "Intermediate",
    estimatedDuration: "1–2 days",
    skills: ["React", "Components", "Props", "State", "Responsive UI"],
    status: "published",
    icon: LayoutDashboard,
    roadmapSlug: "frontend-developer",
    roadmapTitle: "Frontend Developer Roadmap",
  },
  {
    id: "5",
    slug: "notes-api",
    title: "Notes API",
    description:
      "Build a small REST API to practice routing, request handling, validation, response status codes, and CRUD operations.",
    longDescription:
      "This project helps you understand backend fundamentals by building a clean REST API for notes.",
    problemStatement:
      "Backend beginners often jump into databases and authentication before understanding HTTP and API design. This project focuses on clean request handling, routes, validation, and CRUD.",
    whatYouWillBuild: [
      "REST endpoints for notes",
      "Create, read, update, and delete behavior",
      "Request validation",
      "Consistent API responses",
      "Basic error handling",
    ],
    requirements: [
      "Create routes for listing, creating, updating, and deleting notes.",
      "Validate required fields.",
      "Return appropriate HTTP status codes.",
      "Use consistent response structure.",
      "Handle not-found and invalid-input cases.",
    ],
    acceptanceCriteria: [
      "All CRUD endpoints work correctly.",
      "Invalid requests return useful errors.",
      "Status codes are appropriate.",
      "The API can be tested using Postman or Thunder Client.",
      "The README documents available endpoints.",
    ],
    suggestedTechStack: ["Node.js", "Express or NestJS"],
    submissionInstructions: [
      "Push the API code to GitHub.",
      "Add endpoint documentation in the README.",
      "Include example requests and responses.",
      "Mention how to run the project locally.",
    ],
    category: "backend",
    difficulty: "Beginner",
    estimatedDuration: "1 day",
    skills: ["Node.js", "REST API", "HTTP", "Validation", "CRUD"],
    status: "published",
    icon: Database,
    roadmapSlug: "backend-developer",
    roadmapTitle: "Backend Developer Roadmap",
  },
  {
    id: "6",
    slug: "task-management-api",
    title: "Task Management API",
    description:
      "Build a task API with users, tasks, relational data, database-backed CRUD, and basic authentication.",
    longDescription:
      "This project introduces relational database-backed backend development by building a task management API.",
    problemStatement:
      "Real backend projects usually involve users, relations, persistence, and authorization. This project helps you move beyond simple in-memory CRUD.",
    whatYouWillBuild: [
      "User and task models",
      "Database-backed CRUD",
      "Authentication flow",
      "User-owned tasks",
      "Validation and error handling",
    ],
    requirements: [
      "Create a database schema for users and tasks.",
      "Users can create, read, update, and delete their own tasks.",
      "Add basic authentication.",
      "Protect private task routes.",
      "Use validation for request bodies.",
    ],
    acceptanceCriteria: [
      "Users cannot access another user's tasks.",
      "Database relationships are modeled correctly.",
      "Protected routes require authentication.",
      "CRUD works with persisted data.",
      "README includes setup and environment variable instructions.",
    ],
    suggestedTechStack: ["NestJS", "PostgreSQL", "Prisma", "JWT"],
    submissionInstructions: [
      "Push the project to GitHub.",
      "Document database setup and env variables.",
      "Add example protected route requests.",
      "Mention known limitations or future improvements.",
    ],
    category: "backend",
    difficulty: "Intermediate",
    estimatedDuration: "2–3 days",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Auth", "Relations"],
    status: "published",
    icon: Database,
    roadmapSlug: "backend-developer",
    roadmapTitle: "Backend Developer Roadmap",
  },
  {
    id: "7",
    slug: "full-stack-starter-app",
    title: "Full-Stack Starter App",
    description:
      "Build a small full-stack app with frontend pages, API routes, database storage, authentication, and deployment.",
    longDescription:
      "This project helps you combine frontend, backend, database, auth, and deployment into one complete application.",
    problemStatement:
      "Many developers learn frontend and backend separately but struggle to connect them into a full product flow. This project teaches end-to-end application thinking.",
    whatYouWillBuild: [
      "Authentication pages",
      "Authenticated dashboard",
      "Database-backed user data",
      "Create/read/update/delete feature",
      "Deployment-ready full-stack app",
    ],
    requirements: [
      "Build login/signup UI.",
      "Store data in a database.",
      "Protect authenticated pages.",
      "Add one complete CRUD feature.",
      "Deploy the app and document setup.",
    ],
    acceptanceCriteria: [
      "Users can sign up and log in.",
      "Authenticated routes are protected.",
      "CRUD data persists in the database.",
      "The app is deployed.",
      "README explains architecture and setup.",
    ],
    suggestedTechStack: ["Next.js", "PostgreSQL", "Prisma", "Auth.js or JWT"],
    submissionInstructions: [
      "Push source code to GitHub.",
      "Deploy the app on Vercel or another platform.",
      "Add live link and GitHub link.",
      "Explain the data model and auth flow in the README.",
    ],
    category: "full-stack",
    difficulty: "Intermediate",
    estimatedDuration: "3–5 days",
    skills: ["Next.js", "Auth", "Database", "API", "Deployment"],
    status: "published",
    icon: Layers3,
    roadmapSlug: "full-stack-developer",
    roadmapTitle: "Full-Stack Developer Roadmap",
  },
  {
    id: "8",
    slug: "weather-agent",
    title: "Weather Agent",
    description:
      "Build an AI agent that calls a weather API and returns structured, useful answers based on user queries.",
    longDescription:
      "This project introduces practical AI agent development by connecting an AI model to an external weather API.",
    problemStatement:
      "Many AI demos only generate text. Real agentic applications need to use tools, call APIs, and return reliable structured outputs.",
    whatYouWillBuild: [
      "A basic AI agent workflow",
      "Weather API tool calling",
      "Structured response formatting",
      "User query handling",
      "Error handling for failed API calls",
    ],
    requirements: [
      "Connect to a weather API.",
      "Allow the user to ask weather-related questions.",
      "Call the API when weather data is needed.",
      "Return clear structured answers.",
      "Handle missing city or failed API responses.",
    ],
    acceptanceCriteria: [
      "The agent calls the weather API correctly.",
      "The response includes useful weather information.",
      "Invalid or incomplete queries are handled gracefully.",
      "API keys are not committed to GitHub.",
      "README explains setup and API usage.",
    ],
    suggestedTechStack: ["Node.js", "TypeScript", "OpenWeather API", "AI SDK"],
    submissionInstructions: [
      "Push source code to GitHub.",
      "Document environment variables.",
      "Add sample prompts and responses.",
      "Explain how tool calling works in your README.",
    ],
    category: "ai-agents",
    difficulty: "Beginner",
    estimatedDuration: "1–2 days",
    skills: ["AI Agents", "Tool Calling", "APIs", "Structured Output"],
    status: "published",
    icon: Bot,
    roadmapSlug: "ai-agent-developer",
    roadmapTitle: "AI Agent Developer Roadmap",
  },
];

export function getPublishedProjects() {
  return projects.filter((project) => project.status === "published");
}

export function getProjectBySlug(slug: string) {
  return getPublishedProjects().find((project) => project.slug === slug);
}
