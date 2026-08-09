import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP, username } from "better-auth/plugins";

import prisma from "@/lib/prisma";
import { sendVerificationEmail } from "@/services/email.service";

export const auth = betterAuth({
  appName: "CodDock",

  baseURL: process.env.BETTER_AUTH_URL,

  secret: process.env.BETTER_AUTH_SECRET,

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "MEMBER",
        input: false,
        returned: true,
      },
    },
  },

  plugins: [
    username({
      minUsernameLength: 3,
      maxUsernameLength: 30,
    }),

    emailOTP({
      overrideDefaultEmailVerification: true,
      sendVerificationOnSignUp: true,
      otpLength: 6,
      expiresIn: 120,
      allowedAttempts: 2,
      storeOTP: "hashed",

      async sendVerificationOTP({ email, otp, type }) {
        if (type !== "email-verification") {
          return;
        }

        try {
          await sendVerificationEmail({ to: email, code: otp });
          console.log(`[auth] Verification OTP sent to ${email}`);
        } catch (err) {
          console.error("[auth] Failed to send verification OTP:", err);
        }
      },
    }),
  ],
});
