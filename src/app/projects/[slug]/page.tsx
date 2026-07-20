import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectAcceptanceCriteria from "@/features/projects/components/project-acceptance-criteria";
import ProjectDetailHeader from "@/features/projects/components/project-detail-header";
import ProjectDetailSection from "@/features/projects/components/project-detail-section";
import ProjectRequirements from "@/features/projects/components/project-requirements";
import ProjectSubmissionGuide from "@/features/projects/components/project-submission-guide";
import ProjectTechStack from "@/features/projects/components/project-tech-stack";
import { getProjectBySlug } from "@/features/projects/data/project-data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | CodDock",
      description: "The requested CodDock project was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} | CodDock Projects`,
    description: project.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6">
      <ProjectDetailHeader project={project} />

      <ProjectDetailSection
        title="Problem statement"
        description="Understand the practical problem this project is designed to solve."
      >
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {project.problemStatement}
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="What you will build"
        description="The main parts of the project you should complete."
      >
        <ProjectRequirements requirements={project.whatYouWillBuild} />
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Project requirements"
        description="Use these requirements to guide your implementation."
      >
        <ProjectRequirements requirements={project.requirements} />
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Acceptance criteria"
        description="Use this checklist to judge whether the project is complete."
      >
        <ProjectAcceptanceCriteria
          acceptanceCriteria={project.acceptanceCriteria}
        />
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Suggested tech stack"
        description="You can use these tools, or replace them with equivalent alternatives."
      >
        <ProjectTechStack techStack={project.suggestedTechStack} />
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Submission guide"
        description="What the user should submit when this project is complete."
      >
        <ProjectSubmissionGuide
          submissionInstructions={project.submissionInstructions}
        />
      </ProjectDetailSection>
    </section>
  );
}
