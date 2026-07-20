import type { ElementType } from "react";

export type ProjectDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ProjectCategory =
  "frontend" | "backend" | "full-stack" | "ai-agents";

export type ProjectStatus = "published" | "draft";

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  whatYouWillBuild: string[];
  requirements: string[];
  acceptanceCriteria: string[];
  suggestedTechStack: string[];
  submissionInstructions: string[];
  category: ProjectCategory;
  difficulty: ProjectDifficulty;
  estimatedDuration: string;
  skills: string[];
  status: ProjectStatus;
  icon: ElementType;
  roadmapSlug?: string;
  roadmapTitle?: string;
};

export type ProjectCardProps = {
  project: Project;
};

export type ProjectsListProps = {
  query?: string;
  category?: string;
  difficulty?: string;
};

export type ProjectDetailHeaderProps = {
  project: Project;
};

export type ProjectDetailSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export type ProjectRequirementsProps = {
  requirements: string[];
};

export type ProjectAcceptanceCriteriaProps = {
  acceptanceCriteria: string[];
};

export type ProjectTechStackProps = {
  techStack: string[];
};

export type ProjectSubmissionGuideProps = {
  submissionInstructions: string[];
};
