import type { ElementType } from "react";

export type RoadmapPath = "frontend" | "backend" | "full-stack" | "ai-agents";

export type RoadmapLevel =
  "Beginner-friendly" | "Intermediate" | "Project-based" | "Emerging skill";

export type RoadmapStatus = "published" | "draft";

export type RoadmapLesson = {
  id: string;
  title: string;
  description?: string;
  type: "lesson";
  estimatedDuration?: string;
};

export type RoadmapProject = {
  id: string;
  title: string;
  description: string;
  type: "project";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedDuration?: string;
};

export type RoadmapChapterItem = RoadmapLesson | RoadmapProject;

export type RoadmapChapter = {
  id: string;
  title: string;
  description: string;
  estimatedDuration: string;
  items: RoadmapChapterItem[];
};

export type Roadmap = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  path: RoadmapPath;
  level: RoadmapLevel;
  chaptersCount: number;
  lessonsCount: number;
  projectsCount: number;
  estimatedDuration: string;
  tags: string[];
  status: RoadmapStatus;
  icon: ElementType;
  chapters: RoadmapChapter[];
};

export type RoadmapCardProps = {
  roadmap: Roadmap;
};

export type RoadmapsListProps = {
  query?: string;
  path?: string;
};

export type RoadmapDetailHeaderProps = {
  roadmap: Roadmap;
};

export type RoadmapDetailSidebarProps = {
  roadmap: Roadmap;
};

export type RoadmapCurriculumProps = {
  chapters: RoadmapChapter[];
};

export type RoadmapChapterAccordionProps = {
  chapter: RoadmapChapter;
  index: number;
};

export type RoadmapLessonItemProps = {
  lesson: RoadmapLesson;
};

export type RoadmapProjectItemProps = {
  project: RoadmapProject;
};

export type RoadmapsPageProps = {
  searchParams: Promise<{
    q?: string;
    path?: string;
  }>;
};
