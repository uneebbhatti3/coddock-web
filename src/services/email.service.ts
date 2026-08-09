import { render } from "@react-email/render";

import { VerifyEmail } from "@/emails/verify-email";
import { WelcomeEmail } from "@/emails/welcome-email";
import { mailer } from "@/lib/mailer";

const emailFrom = process.env.EMAIL_FROM;

if (!emailFrom) {
  throw new Error("EMAIL_FROM is not defined");
}

type SendVerificationEmailInput = {
  to: string;
  name?: string;
  code: string;
};

export async function sendVerificationEmail({
  to,
  name,
  code,
}: SendVerificationEmailInput) {
  const emailComponent = VerifyEmail({
    name,
    code,
    expiresInMinutes: 2,
  });

  const html = await render(emailComponent);

  const text = [
    `Hi ${name ?? "Developer"},`,
    "",
    `Your CodDock verification code is: ${code}`,
    "",
    "This code expires in 2 minutes.",
    "Do not share this code with anyone.",
    "",
    "If you did not create a CodDock account, ignore this email.",
  ].join("\n");

  await mailer.sendMail({
    from: emailFrom,
    to,
    subject: `${code} is your CodDock verification code`,
    html,
    text,
  });
}

type SendWelcomeEmailInput = {
  to: string;
  name?: string;
};

export async function sendWelcomeEmail({ to, name }: SendWelcomeEmailInput) {
  const dashboardUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const emailComponent = WelcomeEmail({
    name,
    dashboardUrl: `${dashboardUrl}/dashboard`,
  });

  const html = await render(emailComponent);

  const text = [
    `Hi ${name ?? "Developer"},`,
    "",
    "Welcome to CodDock.",
    "",
    "CodDock helps Pakistani developers learn through structured, project-based roadmaps.",
    "",
    `Open your dashboard: ${dashboardUrl}/dashboard`,
    "",
    "Keep building,",
    "The CodDock Team",
  ].join("\n");

  await mailer.sendMail({
    from: emailFrom,
    to,
    subject: "Welcome to CodDock",
    html,
    text,
  });
}
