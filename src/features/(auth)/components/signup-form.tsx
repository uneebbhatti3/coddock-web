"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useTogglePassword from "@/hooks/useTogglePassword";

export default function SignupForm() {
  const { showPassword, handleTogglePassword } = useTogglePassword();

  return (
    <div className="mt-8">
      <form className="space-y-5 text-left">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>

          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className="h-12 rounded-xl border-border/70 bg-card/60 backdrop-blur-sm"
          />
        </div>

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

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              placeholder="Create a password"
              className="h-12 rounded-xl border-border/70 bg-card/60 pr-11 backdrop-blur-sm"
            />

            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={handleTogglePassword}
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            Use at least 8 characters with a mix of letters and numbers.
          </p>
        </div>

        <Button type="submit" className="h-12 w-full rounded-xl">
          Create account
        </Button>
      </form>

      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="w-full">
        <Button
          type="button"
          variant="secondary"
          className="h-11 rounded-xl text-sm w-full"
        >
          <GoogleIcon />
          Google
        </Button>
      </div>

      <p className="mt-7 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
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

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.3-.9 2.4-1.9 3.1l3.1 2.4c1.8-1.7 2.8-4.1 2.8-7 0-.8-.1-1.5-.2-2.2H12z"
      />
      <path
        fill="#34A853"
        d="M6.4 14.3l-.7.5-2.5 1.9C4.8 19.9 8.1 22 12 22c2.6 0 4.9-.9 6.5-2.4l-3.1-2.4c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4z"
      />
      <path
        fill="#FBBC05"
        d="M3.2 7.3C2.4 8.8 2 10.4 2 12s.4 3.2 1.2 4.7l3.2-2.5c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2L3.2 7.3z"
      />
      <path
        fill="#4285F4"
        d="M12 5.8c1.4 0 2.7.5 3.7 1.4l2.8-2.8C16.8 2.9 14.6 2 12 2 8.1 2 4.8 4.1 3.2 7.3l3.2 2.5c.8-2.3 3-4 5.6-4z"
      />
    </svg>
  );
}
