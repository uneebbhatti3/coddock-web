import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

type EmailLayoutProps = {
  preview: string;
  children: ReactNode;
};

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <Html lang="en">
      <Head />

      <Preview>{preview}</Preview>

      <Body style={body}>
        <Container style={container}>
          <Section style={brandSection}>
            <Text style={brandName}>CodDock</Text>
            <Text style={brandTagline}>Learn. Build. Grow. Earn.</Text>
          </Section>

          <Section style={content}>{children}</Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>
              You received this email because an action was performed using this
              email address on CodDock.
            </Text>

            <Text style={footerText}>
              © {currentYear} CodDock. Built for developers in Pakistan.
            </Text>

            <Text style={footerLinks}>
              <Link href="https://coddock.vercel.app" style={link}>
                Visit CodDock
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  margin: "0",
  padding: "32px 12px",
  backgroundColor: "#f4f7fb",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  overflow: "hidden",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
};

const brandSection = {
  padding: "28px 36px",
  backgroundColor: "#0f172a",
  textAlign: "left" as const,
};

const brandName = {
  margin: "0",
  color: "#ffffff",
  fontSize: "26px",
  fontWeight: "700",
  letterSpacing: "-0.5px",
};

const brandTagline = {
  margin: "6px 0 0",
  color: "#93c5fd",
  fontSize: "13px",
  fontWeight: "500",
  letterSpacing: "0.4px",
};

const content = {
  padding: "38px 36px 24px",
};

const divider = {
  margin: "8px 36px 0",
  borderColor: "#e5e7eb",
};

const footer = {
  padding: "22px 36px 30px",
};

const footerText = {
  margin: "0 0 8px",
  color: "#64748b",
  fontSize: "12px",
  lineHeight: "18px",
};

const footerLinks = {
  margin: "12px 0 0",
  fontSize: "12px",
};

const link = {
  color: "#2563eb",
  textDecoration: "none",
};
