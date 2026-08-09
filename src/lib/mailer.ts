import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;

if (!smtpHost) {
  throw new Error("SMTP_HOST is not defined");
}

if (!smtpUser) {
  throw new Error("SMTP_USER is not defined");
}

if (!smtpPassword) {
  throw new Error("SMTP_PASSWORD is not defined");
}

export const mailer = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,

  // Port 465 normally uses implicit TLS.
  secure: smtpPort === 465,

  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});
