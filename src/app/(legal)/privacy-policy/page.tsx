import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CodDock",
  description:
    "Read how CodDock collects, uses, protects, and manages user information across accounts, roadmaps, projects, community features, and analytics.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-muted-foreground">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 leading-7 text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            1. Introduction
          </h2>
          <p className="mt-2">
            CodDock is a developer growth platform built to help students,
            self-taught developers, fresh graduates, and junior developers
            follow structured roadmaps, build portfolio-ready projects, receive
            feedback, and grow through a focused developer community.
          </p>
          <p className="mt-2">
            This Privacy Policy explains what information we collect, how we use
            it, and the choices you have when using CodDock.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            2. Information We Collect
          </h2>
          <p className="mt-2">
            We may collect information you provide directly, including your
            name, email address, account details, profile information, waitlist
            responses, feedback, project submissions, comments, and other
            content you choose to share on CodDock.
          </p>
          <p className="mt-2">
            We may also collect limited technical information such as browser
            type, device information, pages visited, feature usage, referral
            source, and approximate usage activity to help us improve the
            platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            3. How We Use Your Information
          </h2>
          <p className="mt-2">
            We use your information to create and manage your account, provide
            access to roadmaps and project features, personalize your
            experience, improve CodDock, respond to support requests, send
            important product updates, prevent misuse, and maintain platform
            security.
          </p>
          <p className="mt-2">
            We may also use aggregated or anonymized insights to understand how
            users interact with CodDock and which features are most useful.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            4. Accounts and Authentication
          </h2>
          <p className="mt-2">
            CodDock may allow users to create accounts using email/password or
            third-party authentication providers such as Google. Authentication
            providers may process limited information required to verify your
            identity and allow you to access your account.
          </p>
          <p className="mt-2">
            You are responsible for keeping your login credentials secure and
            for notifying us if you believe your account has been accessed
            without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            5. Roadmaps, Projects, and Community Content
          </h2>
          <p className="mt-2">
            If you submit projects, GitHub links, portfolio links, comments,
            questions, feedback, or other community content, that information
            may be visible to other users depending on the feature and your
            account settings.
          </p>
          <p className="mt-2">
            Do not share sensitive personal information, private credentials,
            API keys, confidential client work, or content you do not have
            permission to share.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            6. Analytics and Product Improvement
          </h2>
          <p className="mt-2">
            We may use analytics tools to understand how users discover and use
            CodDock. These tools may help us measure page visits, user flows,
            feature usage, errors, and general product performance.
          </p>
          <p className="mt-2">
            Analytics data is used to improve the product experience, identify
            issues, and make better decisions about future roadmap, project, and
            community features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            7. Cookies and Local Storage
          </h2>
          <p className="mt-2">
            CodDock may use cookies, local storage, or similar technologies to
            support authentication, remember preferences such as theme settings,
            improve performance, and understand product usage.
          </p>
          <p className="mt-2">
            You can control cookies through your browser settings, but disabling
            them may affect some platform features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            8. Third-Party Services
          </h2>
          <p className="mt-2">
            CodDock may use third-party services for hosting, authentication,
            analytics, email delivery, database storage, payments, and other
            product operations. These providers may process limited information
            only as needed to provide their services.
          </p>
          <p className="mt-2">
            We do not sell your personal information to advertisers or data
            brokers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            9. Payments and Paid Features
          </h2>
          <p className="mt-2">
            CodDock may introduce paid features in the future, such as premium
            roadmaps, project reviews, mentorship, or career-readiness programs.
            If payments are introduced, payment information will be processed by
            trusted third-party payment providers. CodDock does not intend to
            store full payment card details directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            10. Data Sharing
          </h2>
          <p className="mt-2">
            We may share information only when needed to operate CodDock, comply
            with legal obligations, protect platform security, enforce our
            Terms, or work with trusted service providers who support the
            platform.
          </p>
          <p className="mt-2">
            We may share aggregated or anonymized information that does not
            directly identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            11. Data Security
          </h2>
          <p className="mt-2">
            We take reasonable steps to protect your information from
            unauthorized access, misuse, loss, or disclosure. However, no online
            platform can guarantee complete security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            12. Data Retention
          </h2>
          <p className="mt-2">
            We keep your information only as long as necessary to provide
            CodDock, improve the platform, comply with legal requirements,
            resolve disputes, or enforce our agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            13. Your Rights and Choices
          </h2>
          <p className="mt-2">
            You may request access, correction, or deletion of your personal
            information by contacting us. We may need to verify your identity
            before completing certain requests.
          </p>
          <p className="mt-2">
            You may also unsubscribe from non-essential emails if such emails
            are introduced in the future.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            14. Children and Younger Users
          </h2>
          <p className="mt-2">
            CodDock is intended for users who are old enough to use online
            learning and community platforms responsibly. If you are under the
            age required by applicable law to create an online account, you
            should use CodDock only with permission from a parent or guardian.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            15. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy as CodDock evolves. If we make
            material changes, we will update the date on this page and may
            notify users through the platform or other appropriate channels.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            16. Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy or how CodDock
            handles your information, you can contact us at{" "}
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
