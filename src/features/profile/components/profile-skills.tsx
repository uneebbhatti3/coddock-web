import type { ProfileSkillsProps } from "@/features/profile/types/profile-types";

export default function ProfileSkills({ skills }: ProfileSkillsProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Skills
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
