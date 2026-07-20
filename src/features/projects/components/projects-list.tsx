import ProjectCard from "@/features/projects/components/project-card";
import ProjectsEmptyState from "@/features/projects/components/projects-empty-state";
import { getPublishedProjects } from "@/features/projects/data/project-data";
import type { ProjectsListProps } from "@/features/projects/types/project-types";

export default function ProjectsList({
  query = "",
  category = "all",
  difficulty = "all",
}: ProjectsListProps) {
  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = getPublishedProjects().filter((project) => {
    const matchesCategory = category === "all" || project.category === category;

    const matchesDifficulty =
      difficulty === "all" || project.difficulty === difficulty;

    const searchableText = [
      project.title,
      project.description,
      project.category,
      project.difficulty,
      project.estimatedDuration,
      project.roadmapTitle,
      project.skills.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = normalizedQuery
      ? searchableText.includes(normalizedQuery)
      : true;

    return matchesCategory && matchesDifficulty && matchesQuery;
  });

  if (filteredProjects.length === 0) {
    return <ProjectsEmptyState />;
  }

  return (
    <div className="grid gap-4">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
