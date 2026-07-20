import ProfileEmptyState from "@/features/profile/components/profile-empty-state";
import ProfileProjectCard from "@/features/profile/components/profile-project-card";
import type { ProfileProjectsProps } from "@/features/profile/types/profile-types";

export default function ProfileProjects({ projects }: ProfileProjectsProps) {
  if (projects.length === 0) {
    return (
      <ProfileEmptyState
        title="No projects yet"
        description="This user has not submitted any projects yet."
      />
    );
  }

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Projects
        </h2>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Projects this user has started, submitted, or completed on CodDock.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProfileProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
