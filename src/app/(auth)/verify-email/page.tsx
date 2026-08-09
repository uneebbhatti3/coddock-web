import type { Metadata } from "next";
import { redirect } from "next/navigation";

import AuthBackground from "@/components/common/auth-background";
import VerifyEmailForm from "@/features/(auth)/components/verify-email-form";

export const metadata: Metadata = {
  title: "Verify Email | CodDock",
  description: "Verify your email address to activate your CodDock account.",
  robots: {
    index: false,
    follow: false,
  },
};

type PageProps = {
  searchParams: Promise<{ email?: string }>;
};

export default async function VerifyEmailPage({ searchParams }: PageProps) {
  const { email } = await searchParams;

  if (!email) {
    redirect("/signup");
  }

  const decodedEmail = decodeURIComponent(email);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground">
      <AuthBackground />

      <section className="relative z-10 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Check your inbox
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            We sent a 6-digit code to{" "}
            <span className="font-medium text-foreground">{decodedEmail}</span>.
            Enter it below to verify your email address.
          </p>
        </div>

        <VerifyEmailForm email={decodedEmail} />
      </section>
    </main>
  );
}
