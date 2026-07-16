"use client";

import Link from "next/link";
import { useState } from "react";

import CodDockLogo from "@/components/common/coddock-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Container from "./container";

const productLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Community", href: "/community" },
  { label: "Learning Roadmap", href: "/roadmaps" },
] as const;

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing Plan", href: "/pricing" },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/coddock/",
    icon: LinkedInIcon,
  },
] as const;

export default function Footer() {
  return (
    <Container>
      <footer className="border-t border-border/40 pt-12 pb-8 md:pt-14 md:pb-10 lg:pt-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12 lg:gap-20">
          <BrandColumn />
          <NavigationColumns />
        </div>

        <FooterBottomBar />
      </footer>
    </Container>
  );
}

function BrandColumn() {
  return (
    <div className="flex w-full flex-col gap-6 md:max-w-[340px] md:shrink-0 lg:max-w-[380px]">
      <Link href="/" aria-label="CodDock home" className="w-fit">
        <CodDockLogo />
      </Link>

      <NewsletterForm />
      <SocialLinks />
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Subscribe to our newsletter
      </p>

      <div className="relative">
        <Input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address for newsletter"
          className="h-11 rounded-lg border-0 bg-muted/50 pr-[92px] pl-4 shadow-none focus-visible:ring-1 focus-visible:ring-primary/40 md:pr-[100px]"
        />
        <Button
          type="submit"
          className="absolute top-1 right-1 h-9 rounded-md px-4 text-sm font-medium"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex size-10 items-center justify-center rounded-lg bg-muted/50 text-foreground transition-colors hover:bg-muted"
        >
          <social.icon className="size-[18px]" />
        </a>
      ))}
    </div>
  );
}

function NavigationColumns() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 md:gap-x-14 lg:gap-x-20">
      <FooterLinkColumn links={productLinks} />
      <FooterLinkColumn links={companyLinks} />
    </div>
  );
}

function FooterLinkColumn({
  links,
}: {
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterBottomBar() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-10 border-t border-border/40 pt-6 md:mt-12">
      <div className="flex flex-col items-center gap-3 text-center text-xs text-muted-foreground sm:text-sm md:grid md:grid-cols-3 md:items-center md:gap-4 md:text-left">
        <p className="md:justify-self-start">
          All copyrights reserved for CodDock {year}
        </p>

        <p className="md:justify-self-center">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          &{" "}
          <Link
            href="/terms-service"
            className="transition-colors hover:text-foreground"
          >
            Term of Service
          </Link>
        </p>
      </div>
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn(className)}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
