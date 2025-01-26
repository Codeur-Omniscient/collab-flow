import { handleLogIn } from "@/services/apiAuth";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logIn, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      handleLogIn(email, password),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user.data);

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
