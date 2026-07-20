import type { ProfileAboutProps } from "@/features/profile/types/profile-types";

export default function ProfileAbout({ user }: ProfileAboutProps) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        About
      </h2>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">{user.bio}</p>
    </section>
  );
}
