import {
  backgroundOptions,
  goalOptions,
  learningPreferenceOptions,
  projectExperienceOptions,
  roadmapIntensityOptions,
  skillLevelOptions,
  specializationOptions,
  technologyExperienceOptions,
} from "../data/onboarding-data";

export type Background = (typeof backgroundOptions)[number]["value"];
export type PrimaryGoal = (typeof goalOptions)[number]["value"];
export type Specialization = (typeof specializationOptions)[number]["value"];

export type SkillLevel = (typeof skillLevelOptions)[number]["value"];

export type TechnologyExperience =
  (typeof technologyExperienceOptions)[number]["value"];

export type ProjectExperience =
  (typeof projectExperienceOptions)[number]["value"];

export type LearningPreference =
  (typeof learningPreferenceOptions)[number]["value"];

export type RoadmapIntensity =
  (typeof roadmapIntensityOptions)[number]["value"];

export type WeeklyHours =
  | "ONE_TO_THREE"
  | "FOUR_TO_SEVEN"
  | "EIGHT_TO_FOURTEEN"
  | "FIFTEEN_TO_TWENTY"
  | "MORE_THAN_TWENTY";

export type TargetTimeline =
  "ONE_MONTH" | "THREE_MONTHS" | "SIX_MONTHS" | "TWELVE_MONTHS" | "NO_DEADLINE";

export type SkillRatings = {
  programmingFundamentals: SkillLevel | "";
  problemSolving: SkillLevel | "";
  gitAndGitHub: SkillLevel | "";
  commandLine: SkillLevel | "";
  databases: SkillLevel | "";
  apisAndHttp: SkillLevel | "";
  testing: SkillLevel | "";
  deployment: SkillLevel | "";
  systemDesign: SkillLevel | "";
};

export type OnboardingFormData = {
  background: Background | "";
  primaryGoal: PrimaryGoal | "";
  specialization: Specialization | "";

  skillRatings: SkillRatings;

  technologies: string[];
  technologyExperience: TechnologyExperience | "";

  projectExperience: ProjectExperience | "";
  strongestProject: string;

  weeklyHours: WeeklyHours | "";
  targetTimeline: TargetTimeline | "";
  learningPreferences: LearningPreference[];
  roadmapIntensity: RoadmapIntensity | "";
};

export type CreatedOnboarding = {
  id: string;
  userId: string;
  background: string;
  primaryGoal: string;
  specialization: string;
  weeklyHours: string;
  targetTimeline: string;
  roadmapIntensity: string;
  completedAt: string;
  createdAt: string;
};

export type OnboardingApiResponse = {
  success: boolean;
  status: number;
  message?: string;
  error?: string;
  data?: CreatedOnboarding;
};
