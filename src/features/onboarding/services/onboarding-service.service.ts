import type { z } from "zod";
import OnboardingSchema from "../schema/onboarding-schema.schema";
import type {
  CreatedOnboarding,
  OnboardingApiResponse,
} from "../types/onboarding-types.types";

export async function submitOnboarding(
  payload: z.infer<typeof OnboardingSchema>,
): Promise<CreatedOnboarding> {
  const response = await fetch("/api/onboarding", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Better Auth's HttpOnly session cookie is sent automatically for
    // same-origin requests. Keeping this explicit documents that dependency.
    credentials: "same-origin",
    body: JSON.stringify(payload),
  });

  let responseBody: OnboardingApiResponse | null = null;
  try {
    responseBody = await response.json();
  } catch {
    // If server didn't return JSON, responseBody remains null
  }

  if (!response.ok) {
    throw new Error(
      responseBody?.error ??
        responseBody?.message ??
        "Unable to complete onboarding.",
    );
  }

  if (!responseBody?.data) {
    throw new Error("The server returned an invalid response.");
  }

  return responseBody.data;
}
