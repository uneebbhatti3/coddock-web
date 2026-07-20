import type { Profile } from "@/features/profile/types/profile-types";

export const profiles: Profile[] = [
  {
    user: {
      id: "user_1",
      username: "uneeb-bhatti",
      name: "Uneeb Bhatti",
      headline:
        "Full-stack developer learning backend systems and AI products.",
      bio: "I am building practical projects while improving my frontend, backend, cloud, and AI agent development skills. My goal is to become job-ready by building real proof-of-work instead of only watching tutorials.",
      initials: "UB",
      location: "Pakistan",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
      portfolioUrl: "https://coddock.vercel.app",
      joinedAt: "July 2026",
    },
    currentRoadmap: {
      title: "Frontend Developer Roadmap",
      slug: "frontend-developer",
      status: "IN_PROGRESS",
      progressPercentage: 32,
      currentChapter: "Learn JavaScript",
      startedAt: "July 2026",
    },
    projects: [
      {
        id: "project_1",
        title: "Responsive Landing Page",
        slug: "responsive-landing-page",
        description:
          "A responsive product landing page with hero, features, CTA, pricing, and footer sections.",
        status: "APPROVED",
        difficulty: "Beginner",
        category: "Frontend",
        githubUrl: "https://github.com",
        liveUrl: "https://vercel.app",
        submittedAt: "July 2026",
        skills: ["HTML", "CSS", "Responsive Design"],
      },
      {
        id: "project_2",
        title: "Developer Dashboard UI",
        slug: "developer-dashboard-ui",
        description:
          "A dashboard interface with reusable cards, sidebar layout, stats, and responsive behavior.",
        status: "SUBMITTED",
        difficulty: "Intermediate",
        category: "Frontend",
        githubUrl: "https://github.com",
        liveUrl: "https://vercel.app",
        submittedAt: "July 2026",
        skills: ["React", "Components", "Tailwind CSS"],
      },
      {
        id: "project_3",
        title: "Notes API",
        slug: "notes-api",
        description:
          "A REST API for notes with CRUD routes, validation, error handling, and API documentation.",
        status: "IN_PROGRESS",
        difficulty: "Beginner",
        category: "Backend",
        skills: ["Node.js", "REST API", "Validation"],
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    stats: {
      roadmapsStarted: 1,
      projectsSubmitted: 2,
      projectsApproved: 1,
      communityReplies: 8,
    },
  },
];

export function getProfileByUsername(username: string) {
  return profiles.find((profile) => profile.user.username === username);
}
