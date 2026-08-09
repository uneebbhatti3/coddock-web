"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import OnboardingSchema from "../schema/onboarding-schema.schema";
import { submitOnboarding } from "../services/onboarding-service.service";
import type { z } from "zod";

// Use the type from OnboardingSchema correctly
type OnboardingPayload = z.infer<typeof OnboardingSchema>;

const useOnboarding = () => {
  const router = useRouter();

  const { mutate, mutateAsync, isPending, error, isError, isSuccess } =
    useMutation({
      mutationKey: ["complete-onboarding"],
      mutationFn: submitOnboarding,
      retry: false,

      onSuccess() {
        toast.add({
          type: "success",
          title: "Profile complete",
          description: "Your developer profile is ready. Let's get building.",
        });
        router.replace("/dashboard");
        router.refresh();
      },

      onError(error: Error) {
        toast.add({
          type: "error",
          title: "Could not save profile",
          description:
            error.message || "Something went wrong. Please try again.",
        });
      },
    });

  const completeOnboarding = (payload: OnboardingPayload) => {
    mutate(payload);
  };

  const completeOnboardingAsync = (payload: OnboardingPayload) => {
    return mutateAsync(payload);
  };

  return {
    completeOnboarding,
    completeOnboardingAsync,
    loading: isPending,
    error,
    isError,
    isSuccess,
  };
};

export default useOnboarding;
