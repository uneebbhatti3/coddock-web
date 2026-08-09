import { Button, Heading, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/email-layout";

type WelcomeEmailProps = {
  name?: string;
  dashboardUrl?: string;
};

export function WelcomeEmail({
  name = "Developer",
  dashboardUrl = "https://coddock.vercel.app/dashboard",
}: WelcomeEmailProps) {
  return (
    <EmailLayout preview="Welcome to CodDock — your learning journey starts here.">
      <Text style={eyebrow}>WELCOME TO CODDOCK</Text>

      <Heading style={heading}>
        Your developer journey now has direction.
      </Heading>

      <Text style={paragraph}>Hi {name},</Text>

      <Text style={paragraph}>
        Welcome to CodDock. We are building a structured learning platform to
        help Pakistani developers move beyond scattered tutorials and learn
        through clear, project-based roadmaps.
      </Text>

      <Section style={highlightBox}>
        <Text style={highlightTitle}>What you can do next</Text>

        <Text style={highlightItem}>
          01 — Define your current skill level and career goal
        </Text>

        <Text style={highlightItem}>
          02 — Get a roadmap aligned with your learning needs
        </Text>

        <Text style={highlightItem}>
          03 — Build practical projects instead of only watching tutorials
        </Text>

        <Text style={highlightItem}>
          04 — Track your progress and grow with the community
        </Text>
      </Section>

      <Section style={buttonSection}>
        <Button href={dashboardUrl} style={button}>
          Go to your dashboard
        </Button>
      </Section>

      <Text style={closingText}>
        CodDock is still growing, and your feedback will directly help shape the
        platform for developers like you.
      </Text>

      <Text style={signature}>
        Keep building,
        <br />
        The CodDock Team
      </Text>
    </EmailLayout>
  );
}

WelcomeEmail.PreviewProps = {
  name: "Uneeb",
  dashboardUrl: "https://coddock.vercel.app/dashboard",
} satisfies WelcomeEmailProps;

export default WelcomeEmail;

const eyebrow = {
  margin: "0 0 12px",
  color: "#2563eb",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1.2px",
};

const heading = {
  margin: "0 0 22px",
  color: "#0f172a",
  fontSize: "30px",
  fontWeight: "700",
  lineHeight: "38px",
  letterSpacing: "-0.7px",
};

const paragraph = {
  margin: "0 0 16px",
  color: "#334155",
  fontSize: "16px",
  lineHeight: "26px",
};

const highlightBox = {
  margin: "28px 0",
  padding: "24px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
};

const highlightTitle = {
  margin: "0 0 18px",
  color: "#0f172a",
  fontSize: "15px",
  fontWeight: "700",
};

const highlightItem = {
  margin: "0 0 12px",
  color: "#475569",
  fontSize: "14px",
  lineHeight: "22px",
};

const buttonSection = {
  margin: "30px 0",
  textAlign: "left" as const,
};

const button = {
  display: "inline-block",
  padding: "13px 22px",
  backgroundColor: "#2563eb",
  color: "#ffffff",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  textDecoration: "none",
};

const closingText = {
  margin: "0 0 20px",
  color: "#475569",
  fontSize: "14px",
  lineHeight: "23px",
};

const signature = {
  margin: "0",
  color: "#0f172a",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
};
