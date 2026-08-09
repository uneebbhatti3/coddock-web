import { authClient } from "@/lib/auth-client";

export async function resendVerificationCode(email: string) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail) {
    throw new Error("Email address is required");
  }

  const { data, error } = await authClient.emailOtp.sendVerificationOtp({
    email: normalizedEmail,
    type: "email-verification",
  });

  if (error) {
    throw new Error(error.message ?? "Unable to send a new verification code");
  }

  return data;
}
