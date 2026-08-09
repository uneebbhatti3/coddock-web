// src/features/onboarding/schemas/onboarding.schema.ts

import { z } from "zod";

export const userBackgroundSchema = z.enum([
  "STUDENT",
  "SELF_TAUGHT",
  "FRESH_GRADUATE",
  "JUNIOR_DEVELOPER",
  "CAREER_SWITCHER",
  "FREELANCER",
]);

export const primaryGoalSchema = z.enum([
  "LEARN_PROGRAMMING",
  "CHOOSE_SPECIALIZATION",
  "BUILD_PROJECTS",
  "FIND_INTERNSHIP",
  "GET_FIRST_JOB",
  "BECOME_FREELANCER",
  "GET_REMOTE_JOB",
  "UPSKILL_CAREER",
]);

export const specializationSchema = z.enum([
  "FRONTEND",
  "BACKEND",
  "FULL_STACK",
  "MOBILE",
  "DEVOPS_CLOUD",
  "DATA_ANALYSIS",
  "DATA_SCIENCE",
  "AI_ML",
  "CYBERSECURITY",
  "GAME_DEVELOPMENT",
  "UI_UX",
  "UNSURE",
]);

export const skillLevelSchema = z.enum([
  "NEVER_USED",
  "BASIC",
  "COMFORTABLE",
  "STRONG",
]);

export const technologyExperienceSchema = z.enum([
  "TUTORIAL_ONLY",
  "SMALL_PROJECTS",
  "INDEPENDENT",
  "PROFESSIONAL",
]);

export const projectExperienceSchema = z.enum([
  "NO_PROJECT",
  "TUTORIAL_PROJECTS",
  "SMALL_INDEPENDENT_PROJECTS",
  "FULL_STACK_PROJECTS",
  "DEPLOYED_PROJECTS",
  "REAL_USERS_CLIENTS",
]);

export const weeklyHoursSchema = z.enum([
  "ONE_TO_THREE",
  "FOUR_TO_SEVEN",
  "EIGHT_TO_FOURTEEN",
  "FIFTEEN_TO_TWENTY",
  "MORE_THAN_TWENTY",
]);

export const targetTimelineSchema = z.enum([
  "ONE_MONTH",
  "THREE_MONTHS",
  "SIX_MONTHS",
  "TWELVE_MONTHS",
  "NO_DEADLINE",
]);

export const learningPreferenceSchema = z.enum([
  "VIDEO_COURSES",
  "DOCUMENTATION",
  "BOOKS",
  "PROJECTS",
  "GUIDED_EXERCISES",
  "CODING_CHALLENGES",
  "COMMUNITY",
  "MENTORSHIP",
]);

export const roadmapIntensitySchema = z.enum([
  "LIGHT",
  "BALANCED",
  "INTENSIVE",
]);

export const skillRatingsSchema = z.object({
  programmingFundamentals: skillLevelSchema,
  problemSolving: skillLevelSchema,
  gitAndGitHub: skillLevelSchema,
  commandLine: skillLevelSchema,
  databases: skillLevelSchema,
  apisAndHttp: skillLevelSchema,
  testing: skillLevelSchema,
  deployment: skillLevelSchema,
  systemDesign: skillLevelSchema,
});

const OnboardingSchema = z.object({
  background: userBackgroundSchema,
  primaryGoal: primaryGoalSchema,
  specialization: specializationSchema,

  skillRatings: skillRatingsSchema,

  technologies: z
    .array(z.string().trim().min(1).max(50))
    .min(1, "Select at least one technology")
    .max(30, "You can select at most 30 technologies"),

  technologyExperience: technologyExperienceSchema,

  projectExperience: projectExperienceSchema,

  strongestProject: z
    .string()
    .trim()
    .max(500, "Project description must not exceed 500 characters")
    .optional()
    .or(z.literal("")),

  weeklyHours: weeklyHoursSchema,
  targetTimeline: targetTimelineSchema,

  learningPreferences: z
    .array(learningPreferenceSchema)
    .min(1, "Select at least one learning preference")
    .max(8),

  roadmapIntensity: roadmapIntensitySchema,
});

export default OnboardingSchema;
