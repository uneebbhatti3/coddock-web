import { authClient } from "@/lib/auth-client";

import type { VerifyEmailPayload } from "../types/verify-email-types.types";

export async function verifyEmail(payload: VerifyEmailPayload) {
  const email = payload.email.trim().toLowerCase();
  const otp = payload.otp.replace(/\s/g, "");

  if (!email) {
    throw new Error("Email address is required");
  }

  if (!/^\d{6}$/.test(otp)) {
    throw new Error("Enter the six-digit verification code");
  }

  const { error } = await authClient.emailOtp.verifyEmail({ email, otp });

  if (error) {
    if (error.code === "TOO_MANY_ATTEMPTS") {
      throw new Error(
        "Too many incorrect attempts. Request a new verification code.",
      );
    }

    throw new Error(
      error.message ?? "The verification code is invalid or has expired",
    );
  }
}
