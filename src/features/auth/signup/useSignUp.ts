import { handleSignUp } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: handleSignUp,
    onSuccess: () => {
      toast.success("Sign up successful! Please log in to continue.");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    signUp,
    isPending,
  };
}
