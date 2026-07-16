import type { Metadata } from "next";
import LoginForm from "@/features/(auth)/components/login-form";
import AuthBackground from "@/components/common/auth-background";

export const metadata: Metadata = {
  title: "Login | CodDock",
  description:
    "Log in to your CodDock account to access your developer roadmaps, projects, and community feedback.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <AuthBackground />

      <section className="relative z-10 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Welcome back to CodDock
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Continue your roadmap progress, projects, and community feedback.
          </p>
        </div>

        <LoginForm />

        <p className="mx-auto mt-6 max-w-sm text-center text-xs leading-5 text-muted-foreground">
          Continue building projects, sharing progress, and improving with
          feedback.
        </p>
      </section>
    </main>
  );
}
