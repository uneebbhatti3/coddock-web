"use client";

import { useEffect, useRef, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { toast } from "@/components/ui/toast";

import { resendVerificationCode } from "../services/resend-verification-code.service";
import { verifyEmail } from "../services/verify-email.service";

type UseVerifyEmailProps = {
  email: string;
};

const RESEND_COOLDOWN = 120;

const useVerifyEmail = ({ email }: UseVerifyEmailProps) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          timerRef.current = null;
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startCooldown = () => {
    setCooldown(RESEND_COOLDOWN);
    setCanResend(false);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate: submitOtp, isPending: isVerifying } = useMutation({
    mutationFn: () => verifyEmail({ email, otp }),

    onSuccess() {
      toast.add({
        type: "success",
        title: "Email verified",
        description:
          "Your email has been verified. Let's set up your developer profile.",
      });

      router.push("/onboarding");
    },

    onError(error: Error) {
      toast.add({
        type: "error",
        title: "Verification failed",
        description:
          error.message || "The code is invalid or has expired. Try again.",
      });

      setOtp("");
    },
  });

  const { mutate: resendOtp, isPending: isResending } = useMutation({
    mutationFn: () => resendVerificationCode(email),

    onSuccess() {
      toast.add({
        type: "success",
        title: "Code sent",
        description: `A new verification code has been sent to ${email}.`,
      });

      startCooldown();
    },

    onError(error: Error) {
      toast.add({
        type: "error",
        title: "Could not resend code",
        description:
          error.message || "Unable to send a new code. Please try again.",
      });
    },
  });

  const handleOtpChange = (value: string) => setOtp(value);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length === 6) submitOtp();
  };

  const handleResend = () => {
    if (canResend && !isResending) resendOtp();
  };

  const formattedCooldown = `${Math.floor(cooldown / 60)}:${String(cooldown % 60).padStart(2, "0")}`;

  return {
    otp,
    cooldown: formattedCooldown,
    canResend,
    loading: isVerifying,
    isResending,
    handleOtpChange,
    handleOnSubmit,
    handleResend,
  };
};

export default useVerifyEmail;
