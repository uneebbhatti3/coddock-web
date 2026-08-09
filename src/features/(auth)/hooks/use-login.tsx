import useFormHandler from "@/hooks/useFormhandler";
import { LoginFormData } from "../types/auth-types.types";
import { HandleOnSubmit } from "@/types/form-types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth-service.service";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const initialFormData = {
  email: "",
  password: "",
};

const useLogin = () => {
  const router = useRouter();
  const { formData, handleOnChange, setFormData } =
    useFormHandler<LoginFormData>(initialFormData);

  const { mutate, isPending } = useMutation({
    mutationFn: login,

    onSuccess() {
      toast.add({
        type: "success",
        title: "Welcome back!",
        description: "You have been logged in successfully.",
      });

      setFormData(initialFormData);

      router.push("/dashboard");
    },

    onError(error: Error) {
      toast.add({
        type: "error",
        title: "Login failed",
        description:
          error.message ||
          "Something went wrong while signing in. Please check your credentials and try again.",
      });
    },
  });

  const handleOnSubmit = (e: HandleOnSubmit) => {
    e.preventDefault();

    const payload: LoginFormData = {
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

export default useLogin;
