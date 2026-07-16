"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useTogglePassword from "@/hooks/useTogglePassword";

type ResetPasswordFormProps = {
  token: string;
};

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const {
    showPassword: showNewPassword,
    handleTogglePassword: handleToggleNewPassword,
  } = useTogglePassword();

  const {
    showPassword: showConfirmPassword,
    handleTogglePassword: handleToggleConfirmPassword,
  } = useTogglePassword();

  return (
    <div className="mt-8">
      <form className="space-y-5 text-left">
        <input type="hidden" name="token" value={token} />

        <div className="space-y-2">
          <label htmlFor="new-password" className="text-sm font-medium">
            New password
          </label>

          <div className="relative">
            <Input
              id="new-password"
              name="newPassword"
              type={showNewPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              placeholder="Enter new password"
              className="h-12 rounded-xl border-border/70 bg-card/60 pr-11 backdrop-blur-sm"
            />

            <button
              type="button"
              aria-label={showNewPassword ? "Hide password" : "Show password"}
              onClick={handleToggleNewPassword}
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {showNewPassword ? (
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

        <div className="space-y-2">
          <label htmlFor="confirm-password" className="text-sm font-medium">
            Confirm new password
          </label>

          <div className="relative">
            <Input
              id="confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              placeholder="Confirm new password"
              className="h-12 rounded-xl border-border/70 bg-card/60 pr-11 backdrop-blur-sm"
            />

            <button
              type="button"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
              onClick={handleToggleConfirmPassword}
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {showConfirmPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className="h-12 w-full rounded-xl">
          Reset password
        </Button>
      </form>

      <p className="mt-7 text-center text-sm text-muted-foreground">
        Need a new reset link?{" "}
        <Link
          href="/forgot-password"
          className="font-medium text-primary transition-colors hover:text-primary/80"
        >
          Request again
        </Link>
      </p>
    </div>
  );
}
