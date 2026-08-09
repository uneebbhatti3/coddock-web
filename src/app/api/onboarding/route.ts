import { Prisma } from "../../../../generated/prisma/client";
import OnboardingSchema from "@/features/onboarding/schema/onboarding-schema.schema";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { APIResponse } from "@/types/response-types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // 1. Validate the Better Auth session.
    const session = await auth.api.getSession({
      headers: req.headers,
      query: {
        disableCookieCache: true,
      },
    });

    if (!session) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 401,
          error: "You must be signed in to complete onboarding.",
        },
        {
          status: 401,
        },
      );
    }

    // 2. Confirm that the session user still exists in the database.
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        id: true,
        emailVerified: true,
        userOnboarding: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 401,
          error: "The authenticated user does not exist.",
        },
        {
          status: 401,
        },
      );
    }

    // Keep this check if CodDock requires verification before onboarding.
    if (!user.emailVerified) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 403,
          error: "Verify your email before completing onboarding.",
        },
        {
          status: 403,
        },
      );
    }

    // 3. Prevent users from creating multiple onboarding records.
    if (user.userOnboarding) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 409,
          error: "You have already completed onboarding.",
        },
        {
          status: 409,
        },
      );
    }

    // 4. Parse the request body safely.
    let body: unknown;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 400,
          error: "The request body must contain valid JSON.",
        },
        {
          status: 400,
        },
      );
    }

    // 5. Validate the payload using Zod.
    const validateBody = OnboardingSchema.safeParse(body);

    if (!validateBody.success) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 422,
          error:
            validateBody.error.issues[0]?.message ??
            "Invalid onboarding information.",
        },
        {
          status: 422,
        },
      );
    }

    const {
      background,
      learningPreferences,
      primaryGoal,
      projectExperience,
      roadmapIntensity,
      skillRatings,
      specialization,
      targetTimeline,
      technologies,
      technologyExperience,
      weeklyHours,
      strongestProject,
    } = validateBody.data;

    // 6. Create onboarding using the authenticated user's ID.
    //
    // The frontend must never provide userId. It comes from the
    // authenticated Better Auth session.
    const onboarding = await prisma.userOnboarding.create({
      data: {
        userId: user.id,

        background,
        primaryGoal,
        specialization,

        programmingFundamentals: skillRatings.programmingFundamentals,
        problemSolving: skillRatings.problemSolving,
        gitAndGitHub: skillRatings.gitAndGitHub,
        commandLine: skillRatings.commandLine,
        databases: skillRatings.databases,
        apisAndHttp: skillRatings.apisAndHttp,
        testing: skillRatings.testing,
        deployment: skillRatings.deployment,
        systemDesign: skillRatings.systemDesign,

        technologies,
        technologyExperience,

        projectExperience,
        strongestProject: strongestProject?.trim() || null,

        weeklyHours,
        targetTimeline,
        learningPreferences,
        roadmapIntensity,
      },
      select: {
        id: true,
        userId: true,
        background: true,
        primaryGoal: true,
        specialization: true,
        weeklyHours: true,
        targetTimeline: true,
        roadmapIntensity: true,
        completedAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        status: 201,
        message: "Onboarding completed successfully.",
        data: onboarding,
      },
      {
        status: 201,
      },
    );
  } catch (error: unknown) {
    /*
     * userId is unique in UserOnboarding. This handles two onboarding
     * requests arriving simultaneously after both pass the initial check.
     */
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          status: 409,
          error: "You have already completed onboarding.",
        },
        {
          status: 409,
        },
      );
    }

    console.error("POST /api/onboarding failed:", error);

    return NextResponse.json<APIResponse>(
      {
        success: false,
        status: 500,
        error: "Unable to complete onboarding at this time.",
      },
      {
        status: 500,
      },
    );
  }
}
