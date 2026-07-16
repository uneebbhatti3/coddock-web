import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyEmailForm() {
  return (
    <div className="mt-8">
      <form className="space-y-5 text-left" autoComplete="off">
        <div className="space-y-2">
          <label htmlFor="otp" className="text-sm font-medium">
            Verification code
          </label>

          <InputOTP
            id="otp"
            name="otp"
            maxLength={6}
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

        <Button type="submit" className="h-12 w-full rounded-xl">
          Verify email
        </Button>
      </form>
    </div>
  );
}
