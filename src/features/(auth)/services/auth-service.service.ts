import { authClient } from "@/lib/auth-client";
import { LoginFormData, SignupFormData } from "../types/auth-types.types";

export const signup = async (formData: SignupFormData) => {
  const { data, error } = await authClient.signUp.email({
    name: formData.name,
    email: formData.email,
    username: formData.username,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message || "Unable to create account");
  }

  if (!data) {
    throw new Error("Unable to create account");
  }

  return data;
};

export const login = async (formData: LoginFormData) => {
  const { data, error } = await authClient.signIn.email({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    throw new Error(error.message || "Unable to sign in");
  }

  if (!data) {
    throw new Error("Unable to sign in");
  }

  return data;
};
