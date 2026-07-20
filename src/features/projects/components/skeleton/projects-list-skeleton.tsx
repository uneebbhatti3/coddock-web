import ProjectCardSkeleton from "@/features/projects/components/skeleton/project-card-skeleton";

const projectSkeletons = Array.from({ length: 5 });

export default function ProjectsListSkeleton() {
  return (
    <div className="grid gap-4">
      {projectSkeletons.map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
}
