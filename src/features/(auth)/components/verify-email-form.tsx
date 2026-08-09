"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import useVerifyEmail from "../hooks/use-verify-email";

type VerifyEmailFormProps = {
  email: string;
};

export default function VerifyEmailForm({ email }: VerifyEmailFormProps) {
  const {
    otp,
    cooldown,
    canResend,
    loading,
    isResending,
    handleOtpChange,
    handleOnSubmit,
    handleResend,
  } = useVerifyEmail({ email });

  return (
    <div className="mt-8 space-y-6">
      <form className="space-y-5 text-left" autoComplete="off" onSubmit={handleOnSubmit}>
        <div className="space-y-2">
          <label htmlFor="otp" className="text-sm font-medium">
            Verification code
          </label>

          <InputOTP
            id="otp"
            name="otp"
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
            disabled={loading}
            aria-label="Enter the 6-digit verification code"
            className="w-full"
          >
            <InputOTPGroup className="w-full">
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="h-12 flex-1 bg-card/60 text-base first:rounded-l-xl last:rounded-r-xl"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl"
          disabled={loading || otp.length !== 6}
        >
          {loading ? "Verifying..." : "Verify email"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Didn&apos;t receive a code?{" "}
        {canResend ? (
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend code"}
          </button>
        ) : (
          <span>
            Resend in{" "}
            <span className="tabular-nums font-medium text-foreground">
              {cooldown}
            </span>
          </span>
        )}
      </p>
    </div>
  );
}
