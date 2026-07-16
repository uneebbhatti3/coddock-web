import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CodDock",
  description:
    "Read the terms that apply when using CodDock, including accounts, acceptable use, community content, project submissions, paid features, and platform limitations.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-muted-foreground">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-7 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using CodDock, you agree to these Terms of Service.
            If you do not agree with these Terms, you should not use the
            platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. About CodDock
          </h2>
          <p className="mt-2">
            CodDock is a developer growth platform designed to help users follow
            structured learning roadmaps, build portfolio-ready projects, share
            progress, receive feedback, and grow through a focused developer
            community.
          </p>
          <p className="mt-2">
            CodDock is not a university, employer, recruitment agency, or job
            placement service. It provides educational, community, and
            career-support tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. User Accounts
          </h2>
          <p className="mt-2">
            Some CodDock features may require an account. You agree to provide
            accurate information when creating an account and to keep your login
            credentials secure.
          </p>
          <p className="mt-2">
            You are responsible for all activity that occurs under your account.
            If you believe your account has been accessed without permission,
            you should contact us as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Acceptable Use
          </h2>
          <p className="mt-2">
            You agree not to misuse CodDock, disrupt the platform, attempt to
            access systems without permission, upload harmful code, spam users,
            impersonate others, harass community members, or use CodDock in a
            way that violates applicable laws or the rights of others.
          </p>
          <p className="mt-2">
            You also agree not to share private credentials, API keys,
            confidential client work, copyrighted material you do not have
            rights to use, or any content that could harm other users or the
            platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Community Standards
          </h2>
          <p className="mt-2">
            CodDock is intended to be a serious learning and project-building
            space. Users may ask questions, share progress, submit projects, and
            provide feedback. You agree to communicate respectfully and keep
            contributions relevant to learning, building, career growth, and
            developer development.
          </p>
          <p className="mt-2">
            We may remove content or restrict accounts that engage in abuse,
            harassment, spam, plagiarism, misleading behavior, or repeated
            low-quality participation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Project Submissions and User Content
          </h2>
          <p className="mt-2">
            You retain ownership of the projects, code, posts, comments, and
            other content you submit to CodDock. By sharing content on the
            platform, you give CodDock permission to display, store, process,
            and use that content as needed to operate and improve the platform.
          </p>
          <p className="mt-2">
            You are responsible for ensuring that anything you submit is your
            own work or that you have permission to share it. Do not submit
            private client work, confidential information, or code that you are
            not allowed to publish.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Roadmaps, Feedback, and Educational Content
          </h2>
          <p className="mt-2">
            CodDock may provide roadmaps, project briefs, career resources,
            community feedback, portfolio suggestions, and related learning
            material. These resources are for educational and career-development
            purposes only.
          </p>
          <p className="mt-2">
            Feedback given on CodDock should be treated as guidance, not as a
            guarantee that a project, profile, resume, or portfolio will produce
            a specific outcome.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            8. No Guarantee of Outcomes
          </h2>
          <p className="mt-2">
            CodDock may help users improve their skills, projects, portfolios,
            and confidence, but we do not guarantee internships, jobs, freelance
            clients, remote work, income, interviews, admissions, or any
            specific career outcome.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            9. Paid Features
          </h2>
          <p className="mt-2">
            CodDock may introduce paid features in the future, such as premium
            roadmaps, guided projects, portfolio reviews, mentorship, or
            career-readiness programs. Pricing, billing terms, refund rules, and
            subscription details will be shown before purchase.
          </p>
          <p className="mt-2">
            We may update, modify, or discontinue paid features as the platform
            evolves.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            10. Platform Availability and Changes
          </h2>
          <p className="mt-2">
            CodDock is currently an evolving product. Features may change,
            improve, be limited, or be removed over time. We may update the
            platform, change access rules, adjust pricing, or modify available
            features as needed.
          </p>
          <p className="mt-2">
            We aim to keep CodDock reliable, but we do not guarantee that the
            platform will always be available, error-free, or uninterrupted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            11. Account Suspension or Termination
          </h2>
          <p className="mt-2">
            We may suspend, restrict, or terminate access to CodDock if we
            believe a user has violated these Terms, misused the platform,
            harmed other users, created security risks, or engaged in activity
            that damages the CodDock community.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            12. Third-Party Links and Services
          </h2>
          <p className="mt-2">
            CodDock may include links to third-party websites, tools, GitHub
            repositories, learning resources, authentication providers, payment
            providers, or other services. We are not responsible for the
            content, policies, or practices of third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            13. Limitation of Liability
          </h2>
          <p className="mt-2">
            To the maximum extent allowed by applicable law, CodDock and its
            team will not be liable for indirect, incidental, special,
            consequential, or punitive damages arising from your use of the
            platform.
          </p>
          <p className="mt-2">
            You use CodDock at your own discretion and are responsible for how
            you apply any guidance, feedback, or resources provided through the
            platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            14. Changes to These Terms
          </h2>
          <p className="mt-2">
            We may update these Terms as CodDock evolves. If we make material
            changes, we will update the date on this page and may notify users
            through the platform or other appropriate channels. Continued use of
            CodDock after changes means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            15. Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about these Terms, you can contact us at{" "}
            <a
              href="mailto:heycoddock@gmail.com"
              className="font-medium text-primary underline underline-offset-4"
            >
              heycoddock@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
