import { handleLogIn } from "@/services/apiAuth";
import { useAuthStore } from "@/stores/auth/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const { mutate: logIn, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      handleLogIn(email, password),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user.data);

      if (user.data) {
        setUser(user.data);
      } else {
        toast.error("User data is null");
      }
      toast.success("Log in successful! Welcome back.");
      console.log(user);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    logIn,
    isPending,
  };
}
