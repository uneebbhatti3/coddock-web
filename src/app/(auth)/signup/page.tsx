import type { Metadata } from "next";
import SignupForm from "@/features/(auth)/components/signup-form";
import AuthBackground from "@/components/common/auth-background";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account | CodDock",
  description:
    "Create your CodDock account to follow structured developer roadmaps, build portfolio-ready projects, and grow through focused community feedback.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <AuthBackground />

      <section className="relative z-10 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Create your CodDock account
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Start your developer journey with structured roadmaps, real
            projects, and focused community feedback.
          </p>
        </div>

        <SignupForm />

        <p className="mx-auto mt-6 max-w-sm text-center text-xs leading-5 text-muted-foreground">
          By creating an account, you agree to CodDock&apos;s{" "}
          <Link
            href="/terms-services"
            className="underline hover:text-primary underline-offset-2 transition-colors"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-primary underline-offset-2 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      </section>
    </main>
  );
}
