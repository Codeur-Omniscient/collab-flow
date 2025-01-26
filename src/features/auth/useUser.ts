import { getCurrentUserApi } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  const user = data?.user;
  return {
    user,
    isLoading,
    isAuthenticated: data?.sessionUser.role === "authenticated",
  };
}
