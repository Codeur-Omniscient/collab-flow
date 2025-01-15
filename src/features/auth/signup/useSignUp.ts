import { handleSignUp } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth/authStore";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: handleSignUp,
    onSuccess: ({ user }) => {
      toast.success("Sign up successful! Please log in to continue.");
      setUser(user);
      console.log(user);
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
