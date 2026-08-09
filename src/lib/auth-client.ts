import { createAuthClient } from "better-auth/react";
import { emailOTPClient, usernameClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [usernameClient(), emailOTPClient()],
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
