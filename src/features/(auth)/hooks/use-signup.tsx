import useFormHandler from "@/hooks/useFormhandler";
import { SignupFormData } from "../types/auth-types.types";
import { HandleOnSubmit } from "@/types/form-types";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/auth-service.service";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const initialFormData = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const useSignup = () => {
  const router = useRouter();
  const { formData, handleOnChange, setFormData } =
    useFormHandler<SignupFormData>(initialFormData);

  const { mutate, isPending } = useMutation({
    mutationFn: signup,

    onSuccess(_, variables) {
      toast.add({
        type: "success",
        title: "Account created",
        description: "Check your email for a verification code.",
      });

      const email = encodeURIComponent(variables.email.trim().toLowerCase());

      setFormData(initialFormData);

      router.push(`/verify-email?email=${email}`);
    },

    onError(error: Error) {
      toast.add({
        type: "error",
        title: "Account creation failed",
        description:
          error.message ||
          "Something went wrong while creating your account. Please try again.",
      });
    },
  });

  const handleOnSubmit = (e: HandleOnSubmit) => {
    e.preventDefault();

    const payload: SignupFormData = {
      name: formData.name.trim(),
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    mutate(payload);
  };

  return {
    formData,
    loading: isPending,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useSignup;
