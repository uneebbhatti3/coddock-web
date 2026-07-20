import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProfileAbout from "@/features/profile/components/profile-about";
import ProfileCurrentRoadmap from "@/features/profile/components/profile-current-roadmap";
import ProfileHeader from "@/features/profile/components/profile-header";
import ProfileProjects from "@/features/profile/components/profile-projects";
import ProfileSkills from "@/features/profile/components/profile-skills";
import { getProfileByUsername } from "@/features/profile/data/profile-data";

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  const profile = getProfileByUsername(username);

  if (!profile) {
    return {
      title: "Profile Not Found | CodDock",
      description: "The requested CodDock profile was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${profile.user.name} | CodDock Profile`,
    description: profile.user.headline,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  const profile = getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6">
      <ProfileHeader profile={profile} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <ProfileCurrentRoadmap roadmap={profile.currentRoadmap} />
          <ProfileProjects projects={profile.projects} />
        </div>

        <div className="space-y-6">
          <ProfileAbout user={profile.user} />
          <ProfileSkills skills={profile.skills} />
        </div>
      </div>
    </section>
  );
}
