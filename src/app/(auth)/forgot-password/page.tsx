import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ForgotPasswordForm from "@/features/(auth)/components/forgot-password-form";
import AuthBackground from "@/components/common/auth-background";

export const metadata: Metadata = {
  title: "Forgot Password | CodDock",
  description:
    "Reset access to your CodDock account and continue your developer learning, projects, and community progress.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <AuthBackground />

      <section className="relative z-10 w-full max-w-md">
        <div className="text-center">
          <Link
            href="/login"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to login
          </Link>

          <h1 className="text-3xl font-semibold tracking-[-0.04em]">
            Forgot your password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Enter your email address and we&apos;ll send password reset
            instructions if an account exists.
          </p>
        </div>

        <ForgotPasswordForm />

        <p className="mx-auto mt-6 max-w-sm text-center text-xs leading-5 text-muted-foreground">
          For security, we do not confirm whether an email address is registered
          with CodDock.
        </p>
      </section>
    </main>
  );
}
