export type VerifyEmailPayload = {
  email: string;
  otp: string;
};

export type VerifyEmailResponse = {
  status: boolean;
  user?: {
    id: string;
    email: string;
    emailVerified: boolean;
  };
};
