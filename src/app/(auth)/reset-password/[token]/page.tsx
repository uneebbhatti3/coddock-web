import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResetPasswordForm from "@/features/(auth)/components/reset-password-form";
import AuthBackground from "@/components/common/auth-background";

export const metadata: Metadata = {
  title: "Reset Password | CodDock",
  description:
    "Create a new password for your CodDock account and continue your developer learning, projects, and community progress.",
  robots: {
    index: false,
    follow: false,
  },
};

type ResetPasswordPageProps = {
  params: {
    token: string;
  };
};

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
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
            Reset your password
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Create a new password for your CodDock account. Use a strong
            password that you do not use on other websites.
          </p>
        </div>

        <ResetPasswordForm token={params.token} />

        <p className="mx-auto mt-6 max-w-sm text-center text-xs leading-5 text-muted-foreground">
          Your reset link should only be used by you. If the link has expired,
          request a new one from the forgot password page.
        </p>
      </section>
    </main>
  );
}
