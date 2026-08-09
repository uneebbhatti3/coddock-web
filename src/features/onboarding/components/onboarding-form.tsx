"use client";

import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  backgroundOptions,
  goalOptions,
  learningPreferenceOptions,
  projectExperienceOptions,
  roadmapIntensityOptions,
  skillFields,
  skillLevelOptions,
  specializationOptions,
  targetTimelineOptions,
  technologyExperienceOptions,
  technologyOptions,
  weeklyHoursOptions,
} from "../data/onboarding-data";
import useOnboarding from "../hooks/use-onboarding";
import type { z } from "zod";
import OnboardingSchema from "../schema/onboarding-schema.schema";
import {
  Background,
  LearningPreference,
  OnboardingFormData,
  PrimaryGoal,
  ProjectExperience,
  RoadmapIntensity,
  SkillLevel,
  SkillRatings,
  Specialization,
  TargetTimeline,
  TechnologyExperience,
  WeeklyHours,
} from "../types/onboarding-types.types";

const totalSteps = 7;

const initialFormData: OnboardingFormData = {
  background: "",
  primaryGoal: "",
  specialization: "",

  skillRatings: {
    programmingFundamentals: "",
    problemSolving: "",
    gitAndGitHub: "",
    commandLine: "",
    databases: "",
    apisAndHttp: "",
    testing: "",
    deployment: "",
    systemDesign: "",
  },

  technologies: [],
  technologyExperience: "",

  projectExperience: "",
  strongestProject: "",

  weeklyHours: "",
  targetTimeline: "",
  learningPreferences: [],
  roadmapIntensity: "",
};

/* -------------------------------------------------------------------------- */
/*                                    Form                                    */
/* -------------------------------------------------------------------------- */

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>(initialFormData);
  const [technologySearch, setTechnologySearch] = useState("");
  const { completeOnboarding, loading: isSubmitting } = useOnboarding();

  const progress = (step / totalSteps) * 100;

  const updateField = <Key extends keyof OnboardingFormData>(
    key: Key,
    value: OnboardingFormData[Key],
  ) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const updateSkillRating = (
    skill: keyof SkillRatings,
    value: SkillLevel | "",
  ) => {
    setFormData((current) => ({
      ...current,
      skillRatings: {
        ...current.skillRatings,
        [skill]: value,
      },
    }));
  };

  const toggleTechnology = (technology: string) => {
    setFormData((current) => {
      const technologyExists = current.technologies.includes(technology);

      return {
        ...current,
        technologies: technologyExists
          ? current.technologies.filter((item) => item !== technology)
          : [...current.technologies, technology],
      };
    });
  };

  const toggleLearningPreference = (preference: LearningPreference) => {
    setFormData((current) => {
      const preferenceExists = current.learningPreferences.includes(preference);

      return {
        ...current,
        learningPreferences: preferenceExists
          ? current.learningPreferences.filter((item) => item !== preference)
          : [...current.learningPreferences, preference],
      };
    });
  };

  const allSkillsAnswered = Object.values(formData.skillRatings).every(Boolean);

  const canContinue = (() => {
    switch (step) {
      case 1:
        return Boolean(formData.background);

      case 2:
        return Boolean(formData.primaryGoal);

      case 3:
        return Boolean(formData.specialization);

      case 4:
        return allSkillsAnswered;

      case 5:
        return Boolean(
          formData.technologies.length > 0 && formData.technologyExperience,
        );

      case 6:
        return Boolean(formData.projectExperience);

      case 7:
        return Boolean(
          formData.weeklyHours &&
          formData.targetTimeline &&
          formData.learningPreferences.length > 0 &&
          formData.roadmapIntensity,
        );

      default:
        return false;
    }
  })();

  const handleNext = () => {
    if (!canContinue) {
      return;
    }

    setStep((current) => Math.min(current + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < totalSteps) {
      handleNext();
      return;
    }

    if (!canContinue || isSubmitting) {
      return;
    }

    completeOnboarding(formData as z.infer<typeof OnboardingSchema>);
  };

  const filteredTechnologies = technologyOptions.filter((technology) =>
    technology.toLowerCase().includes(technologySearch.toLowerCase()),
  );

  return (
    <form onSubmit={handleSubmit}>
      <header className="mb-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium">
            Step {step} of {totalSteps}
          </p>

          <p className="text-sm text-muted-foreground">
            {Math.round(progress)}%
          </p>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {step === 1 && (
        <FormStep
          title="What best describes your current background?"
          description="Choose the option that most closely represents your current academic or professional stage."
        >
          <ChoiceGroup
            value={formData.background}
            options={backgroundOptions}
            onValueChange={(value) =>
              updateField("background", value as Background)
            }
          />
        </FormStep>
      )}

      {step === 2 && (
        <FormStep
          title="What is your main goal right now?"
          description="Choose the most important outcome you want CodDock to help you achieve."
        >
          <ChoiceGroup
            value={formData.primaryGoal}
            options={goalOptions}
            onValueChange={(value) =>
              updateField("primaryGoal", value as PrimaryGoal)
            }
          />
        </FormStep>
      )}

      {step === 3 && (
        <FormStep
          title="Which area do you want to focus on?"
          description="This will determine the primary direction of your personalized roadmap."
        >
          <ChoiceGroup
            value={formData.specialization}
            options={specializationOptions}
            onValueChange={(value) =>
              updateField("specialization", value as Specialization)
            }
          />
        </FormStep>
      )}

      {step === 4 && (
        <FormStep
          title="How comfortable are you with these fundamentals?"
          description="Rate each skill honestly so we can avoid repeating topics you already know and identify important gaps."
        >
          <div className="divide-y">
            {skillFields.map((skill) => (
              <div key={skill.key} className="py-5 first:pt-0 last:pb-0">
                <div className="mb-3">
                  <Label htmlFor={skill.key} className="text-sm font-semibold">
                    {skill.title}
                  </Label>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {skill.description}
                  </p>
                </div>

                <Select
                  items={skillLevelOptions}
                  value={formData.skillRatings[skill.key]}
                  onValueChange={(value) =>
                    updateSkillRating(
                      skill.key,
                      (value ?? "") as SkillLevel | "",
                    )
                  }
                >
                  <SelectTrigger id={skill.key} className="h-11 w-full">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>

                  <SelectContent>
                    {skillLevelOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </FormStep>
      )}

      {step === 5 && (
        <FormStep
          title="Which technologies have you already used?"
          description="Select every technology you have worked with, even if your experience is limited."
        >
          <div className="space-y-7">
            <div>
              <Label htmlFor="technology-search">Search technologies</Label>

              <Input
                id="technology-search"
                value={technologySearch}
                onChange={(event) => setTechnologySearch(event.target.value)}
                placeholder="Search React, Python, PostgreSQL..."
                className="mt-2 h-11"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {filteredTechnologies.map((technology) => {
                const selected = formData.technologies.includes(technology);

                return (
                  <Label
                    key={technology}
                    className={[
                      "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition",
                      selected
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50",
                    ].join(" ")}
                  >
                    <Checkbox
                      checked={selected}
                      onCheckedChange={() => toggleTechnology(technology)}
                    />

                    <span className="text-sm font-medium">{technology}</span>
                  </Label>
                );
              })}
            </div>

            {filteredTechnologies.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No matching technologies found.
              </p>
            )}

            <div className="border-t pt-7">
              <h3 className="text-sm font-semibold">
                How experienced are you with these technologies?
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Choose the option that best describes your overall experience.
              </p>

              <div className="mt-4">
                <ChoiceGroup
                  value={formData.technologyExperience}
                  options={technologyExperienceOptions}
                  onValueChange={(value) =>
                    updateField(
                      "technologyExperience",
                      value as TechnologyExperience,
                    )
                  }
                />
              </div>
            </div>
          </div>
        </FormStep>
      )}

      {step === 6 && (
        <FormStep
          title="What have you built so far?"
          description="Your project experience helps us choose appropriate project difficulty and skip work you have already completed."
        >
          <div className="space-y-7">
            <ChoiceGroup
              value={formData.projectExperience}
              options={projectExperienceOptions}
              onValueChange={(value) =>
                updateField("projectExperience", value as ProjectExperience)
              }
            />

            <div className="border-t pt-7">
              <Label htmlFor="strongest-project">
                Briefly describe your strongest project
              </Label>

              <p className="mt-1 text-sm text-muted-foreground">
                This is optional, but it can help us recommend better projects.
              </p>

              <Textarea
                id="strongest-project"
                value={formData.strongestProject}
                onChange={(event) =>
                  updateField("strongestProject", event.target.value)
                }
                placeholder="For example: I built a full-stack booking application using Next.js, PostgreSQL, Prisma, and authentication."
                className="mt-3 min-h-28 resize-none"
                maxLength={500}
              />

              <p className="mt-2 text-right text-xs text-muted-foreground">
                {formData.strongestProject.length}/500
              </p>
            </div>
          </div>
        </FormStep>
      )}

      {step === 7 && (
        <FormStep
          title="How should we structure your roadmap?"
          description="Tell us about your availability, target timeline, preferred learning formats, and desired intensity."
        >
          <div className="space-y-8">
            <div>
              <Label htmlFor="weekly-hours">Weekly learning time</Label>

              <p className="mt-1 text-sm text-muted-foreground">
                Select the amount of time you can realistically dedicate every
                week.
              </p>

              <Select
                items={weeklyHoursOptions}
                value={formData.weeklyHours}
                onValueChange={(value) =>
                  updateField("weeklyHours", (value ?? "") as WeeklyHours | "")
                }
              >
                <SelectTrigger id="weekly-hours" className="mt-3 h-11 w-full">
                  <SelectValue placeholder="Select weekly availability" />
                </SelectTrigger>

                <SelectContent>
                  {weeklyHoursOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="target-timeline">Target timeline</Label>

              <p className="mt-1 text-sm text-muted-foreground">
                When would you ideally like to achieve your main goal?
              </p>

              <Select
                items={targetTimelineOptions}
                value={formData.targetTimeline}
                onValueChange={(value) =>
                  updateField(
                    "targetTimeline",
                    (value ?? "") as TargetTimeline | "",
                  )
                }
              >
                <SelectTrigger
                  id="target-timeline"
                  className="mt-3 h-11 w-full"
                >
                  <SelectValue placeholder="Select your target timeline" />
                </SelectTrigger>

                <SelectContent>
                  {targetTimelineOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Preferred learning formats
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Select all the formats you would like your roadmap to
                prioritize.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {learningPreferenceOptions.map((option) => {
                  const selected = formData.learningPreferences.includes(
                    option.value,
                  );

                  return (
                    <Label
                      key={option.value}
                      className={[
                        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition",
                        selected
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/50",
                      ].join(" ")}
                    >
                      <Checkbox
                        checked={selected}
                        onCheckedChange={() =>
                          toggleLearningPreference(option.value)
                        }
                      />

                      <span className="text-sm font-medium">
                        {option.label}
                      </span>
                    </Label>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Roadmap intensity</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Choose how demanding you want your learning plan to be.
              </p>

              <div className="mt-4">
                <ChoiceGroup
                  value={formData.roadmapIntensity}
                  options={roadmapIntensityOptions}
                  onValueChange={(value) =>
                    updateField("roadmapIntensity", value as RoadmapIntensity)
                  }
                />
              </div>
            </div>
          </div>
        </FormStep>
      )}

      <footer className="mt-10 flex items-center justify-between gap-4 border-t pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          disabled={step === 1 || isSubmitting}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>

        {step < totalSteps ? (
          <Button type="button" onClick={handleNext} disabled={!canContinue}>
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={!canContinue || isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Creating roadmap
              </>
            ) : (
              <>
                Complete onboarding
                <Check className="ml-2 size-4" />
              </>
            )}
          </Button>
        )}
      </footer>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Shared components                             */
/* -------------------------------------------------------------------------- */

type FormStepProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

function FormStep({ title, description, children }: FormStepProps) {
  return (
    <section>
      <div className="mb-7 text-left">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
}

type ChoiceOption = {
  value: string;
  title: string;
  description: string;
};

type ChoiceGroupProps = {
  value: string;
  options: readonly ChoiceOption[];
  onValueChange: (value: string) => void;
};

function ChoiceGroup({ value, options, onValueChange }: ChoiceGroupProps) {
  return (
    <RadioGroup value={value} onValueChange={onValueChange} className="gap-3">
      {options.map((option) => {
        const id = `choice-${option.value}`;
        const selected = value === option.value;

        return (
          <Label
            key={option.value}
            htmlFor={id}
            className={[
              "flex cursor-pointer items-start gap-4 rounded-xl border px-4 py-4 transition",
              "hover:border-primary/50 hover:bg-muted/30",
              selected ? "border-primary bg-primary/5" : "border-border",
            ].join(" ")}
          >
            <RadioGroupItem
              id={id}
              value={option.value}
              className="mt-1 shrink-0"
            />

            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">
                {option.title}
              </span>

              <span className="mt-1 block text-sm font-normal leading-6 text-muted-foreground">
                {option.description}
              </span>
            </span>
          </Label>
        );
      })}
    </RadioGroup>
  );
}
