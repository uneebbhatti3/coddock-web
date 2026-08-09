export type AuthFormCredentials = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type SignupFormData = AuthFormCredentials;

export type LoginFormData = Omit<AuthFormCredentials, "name" | "username">;
