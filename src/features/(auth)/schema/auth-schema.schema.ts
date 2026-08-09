import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9_]+$/;

const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must contain at least 3 characters")
    .max(30, "Name cannot exceed 30 characters"),

  username: z
    .string()
    .trim()
    .min(3, "Username must contain at least 3 characters")
    .max(30, "Username cannot exceed 30 characters")
    .regex(
      usernameRegex,
      "Username can only contain letters, numbers, and underscores",
    ),

  email: z.string().trim().toLowerCase().email("Enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(128, "Password cannot exceed 128 characters"),
});

const loginSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must contain at least 3 characters")
    .max(30, "Name cannot exceed 30 characters"),

  username: z
    .string()
    .trim()
    .min(3, "Username must contain at least 3 characters")
    .max(30, "Username cannot exceed 30 characters")
    .regex(
      usernameRegex,
      "Username can only contain letters, numbers, and underscores",
    ),

  email: z.string().trim().toLowerCase().email("Enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(128, "Password cannot exceed 128 characters"),
});

export const SignupSchema = signupSchema;
export const LoginSchema = loginSchema;
