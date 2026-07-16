"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordForm() {
  return (
    <div className="mt-8">
      <form className="space-y-5 text-left">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>

          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            className="h-12 rounded-xl border-border/70 bg-card/60 backdrop-blur-sm"
          />
        </div>

        <Button type="submit" className="h-12 w-full rounded-xl">
          Send reset link
        </Button>
      </form>

      <p className="mt-7 text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-medium text-primary transition-colors hover:text-primary/80"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
