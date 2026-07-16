import type { Metadata } from "next";
import AuthBackground from "@/components/common/auth-background";
import VerifyEmailForm from "@/features/(auth)/components/verify-email-form";

export const metadata: Metadata = {
  title: "Verify Email | CodDock",
  description:
    "Verify your email address to activate your CodDock account and start your developer journey. Access roadmaps, build portfolio projects, and join the CodDock community.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VerifyEmailPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-foreground py-4">
      <AuthBackground />

      <section className="relative z-10 w-full max-w-md flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Verify your email address
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            We&apos;ve sent a verification link to your email.
            <br />
            Please check your inbox (and spam folder) to activate your CodDock
            account.
          </p>
        </div>

        <VerifyEmailForm />
      </section>
    </main>
  );
}
