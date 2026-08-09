import type { Metadata } from "next";

import OnboardingForm from "@/features/onboarding/components/onboarding-form";

export const metadata: Metadata = {
  title: "Complete your profile | CodDock",
};

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-2xl">
        <OnboardingForm />
      </div>
    </main>
  );
}
