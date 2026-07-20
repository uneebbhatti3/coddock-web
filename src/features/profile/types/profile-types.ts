export type ProfileRoadmapStatus = "IN_PROGRESS" | "COMPLETED" | "PAUSED";

export type ProfileProjectStatus =
  "IN_PROGRESS" | "SUBMITTED" | "APPROVED" | "NEEDS_IMPROVEMENT";

export type ProfileUser = {
  id: string;
  username: string;
  name: string;
  headline: string;
  bio: string;
  initials: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  joinedAt: string;
};

export type ProfileCurrentRoadmap = {
  title: string;
  slug: string;
  status: ProfileRoadmapStatus;
  progressPercentage: number;
  currentChapter: string;
  startedAt: string;
};

export type ProfileProject = {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: ProfileProjectStatus;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "Frontend" | "Backend" | "Full-stack" | "AI Agents";
  githubUrl?: string;
  liveUrl?: string;
  submittedAt?: string;
  skills: string[];
};

export type Profile = {
  user: ProfileUser;
  currentRoadmap?: ProfileCurrentRoadmap;
  projects: ProfileProject[];
  skills: string[];
  stats: {
    roadmapsStarted: number;
    projectsSubmitted: number;
    projectsApproved: number;
    communityReplies: number;
  };
};

export type ProfileHeaderProps = {
  profile: Profile;
};

export type ProfileAboutProps = {
  user: ProfileUser;
};

export type ProfileCurrentRoadmapProps = {
  roadmap?: ProfileCurrentRoadmap;
};

export type ProfileProjectsProps = {
  projects: ProfileProject[];
};

export type ProfileProjectCardProps = {
  project: ProfileProject;
};

export type ProfileSkillsProps = {
  skills: string[];
};

export type ProfileEmptyStateProps = {
  title: string;
  description: string;
};
