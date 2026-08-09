-- CreateEnum
CREATE TYPE "UserBackground" AS ENUM ('STUDENT', 'SELF_TAUGHT', 'FRESH_GRADUATE', 'JUNIOR_DEVELOPER', 'CAREER_SWITCHER', 'FREELANCER');

-- CreateEnum
CREATE TYPE "PrimaryGoal" AS ENUM ('LEARN_PROGRAMMING', 'CHOOSE_SPECIALIZATION', 'BUILD_PROJECTS', 'FIND_INTERNSHIP', 'GET_FIRST_JOB', 'BECOME_FREELANCER', 'GET_REMOTE_JOB', 'UPSKILL_CAREER');

-- CreateEnum
CREATE TYPE "Specialization" AS ENUM ('FRONTEND', 'BACKEND', 'FULL_STACK', 'MOBILE', 'DEVOPS_CLOUD', 'DATA_ANALYSIS', 'DATA_SCIENCE', 'AI_ML', 'CYBERSECURITY', 'GAME_DEVELOPMENT', 'UI_UX', 'UNSURE');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('NEVER_USED', 'BASIC', 'COMFORTABLE', 'STRONG');

-- CreateEnum
CREATE TYPE "TechnologyExperience" AS ENUM ('TUTORIAL_ONLY', 'SMALL_PROJECTS', 'INDEPENDENT', 'PROFESSIONAL');

-- CreateEnum
CREATE TYPE "ProjectExperience" AS ENUM ('NO_PROJECT', 'TUTORIAL_PROJECTS', 'SMALL_INDEPENDENT_PROJECTS', 'FULL_STACK_PROJECTS', 'DEPLOYED_PROJECTS', 'REAL_USERS_CLIENTS');

-- CreateEnum
CREATE TYPE "WeeklyHours" AS ENUM ('ONE_TO_THREE', 'FOUR_TO_SEVEN', 'EIGHT_TO_FOURTEEN', 'FIFTEEN_TO_TWENTY', 'MORE_THAN_TWENTY');

-- CreateEnum
CREATE TYPE "TargetTimeline" AS ENUM ('ONE_MONTH', 'THREE_MONTHS', 'SIX_MONTHS', 'TWELVE_MONTHS', 'NO_DEADLINE');

-- CreateEnum
CREATE TYPE "LearningPreference" AS ENUM ('VIDEO_COURSES', 'DOCUMENTATION', 'BOOKS', 'PROJECTS', 'GUIDED_EXERCISES', 'CODING_CHALLENGES', 'COMMUNITY', 'MENTORSHIP');

-- CreateEnum
CREATE TYPE "RoadmapIntensity" AS ENUM ('LIGHT', 'BALANCED', 'INTENSIVE');

-- CreateTable
CREATE TABLE "user_onboarding" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "background" "UserBackground" NOT NULL,
    "primaryGoal" "PrimaryGoal" NOT NULL,
    "specialization" "Specialization" NOT NULL,
    "programmingFundamentals" "SkillLevel" NOT NULL,
    "problemSolving" "SkillLevel" NOT NULL,
    "gitAndGitHub" "SkillLevel" NOT NULL,
    "commandLine" "SkillLevel" NOT NULL,
    "databases" "SkillLevel" NOT NULL,
    "apisAndHttp" "SkillLevel" NOT NULL,
    "testing" "SkillLevel" NOT NULL,
    "deployment" "SkillLevel" NOT NULL,
    "systemDesign" "SkillLevel" NOT NULL,
    "technologies" TEXT[],
    "technologyExperience" "TechnologyExperience" NOT NULL,
    "projectExperience" "ProjectExperience" NOT NULL,
    "strongestProject" VARCHAR(500),
    "weeklyHours" "WeeklyHours" NOT NULL,
    "targetTimeline" "TargetTimeline" NOT NULL,
    "learningPreferences" "LearningPreference"[],
    "roadmapIntensity" "RoadmapIntensity" NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_onboarding_userId_key" ON "user_onboarding"("userId");

-- CreateIndex
CREATE INDEX "user_onboarding_background_idx" ON "user_onboarding"("background");

-- CreateIndex
CREATE INDEX "user_onboarding_primaryGoal_idx" ON "user_onboarding"("primaryGoal");

-- CreateIndex
CREATE INDEX "user_onboarding_specialization_idx" ON "user_onboarding"("specialization");

-- CreateIndex
CREATE INDEX "user_onboarding_completedAt_idx" ON "user_onboarding"("completedAt");

-- AddForeignKey
ALTER TABLE "user_onboarding" ADD CONSTRAINT "user_onboarding_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
