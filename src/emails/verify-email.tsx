import { Heading, Section, Text } from "@react-email/components";

import { EmailLayout } from "./components/email-layout";

type VerifyEmailProps = {
  name?: string;
  code: string;
  expiresInMinutes?: number;
};

export function VerifyEmail({
  name = "Developer",
  code,
  expiresInMinutes = 5,
}: VerifyEmailProps) {
  return (
    <EmailLayout preview={`Your CodDock verification code is ${code}`}>
      <Text style={eyebrow}>EMAIL VERIFICATION</Text>

      <Heading style={heading}>Verify your email address</Heading>

      <Text style={paragraph}>Hi {name},</Text>

      <Text style={paragraph}>
        Enter the verification code below to confirm your email address and
        activate your CodDock account.
      </Text>

      <Section style={codeContainer}>
        <Text style={codeLabel}>YOUR VERIFICATION CODE</Text>

        <Text style={codeText}>{formatCode(code)}</Text>
      </Section>

      <Text style={expiryText}>
        This code expires in {expiresInMinutes} minutes.
      </Text>

      <Section style={noticeBox}>
        <Text style={noticeText}>
          Do not share this code with anyone. CodDock will never ask you for
          this code through a message, call, or social media.
        </Text>
      </Section>

      <Text style={secondaryText}>
        If you did not create a CodDock account, you can safely ignore this
        email.
      </Text>
    </EmailLayout>
  );
}

function formatCode(code: string) {
  return code.split("").join(" ");
}

VerifyEmail.PreviewProps = {
  name: "Uneeb",
  code: "284619",
  expiresInMinutes: 5,
} satisfies VerifyEmailProps;

export default VerifyEmail;

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

const codeContainer = {
  margin: "30px 0 18px",
  padding: "24px",
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "12px",
  textAlign: "center" as const,
};

const codeLabel = {
  margin: "0 0 12px",
  color: "#475569",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1.4px",
};

const codeText = {
  margin: "0",
  color: "#1d4ed8",
  fontSize: "34px",
  fontWeight: "700",
  letterSpacing: "5px",
  lineHeight: "42px",
};

const expiryText = {
  margin: "0 0 24px",
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "center" as const,
};

const noticeBox = {
  margin: "20px 0",
  padding: "16px 18px",
  backgroundColor: "#fff7ed",
  border: "1px solid #fed7aa",
  borderRadius: "10px",
};

const noticeText = {
  margin: "0",
  color: "#9a3412",
  fontSize: "13px",
  lineHeight: "21px",
};

const secondaryText = {
  margin: "22px 0 0",
  color: "#64748b",
  fontSize: "13px",
  lineHeight: "21px",
};
