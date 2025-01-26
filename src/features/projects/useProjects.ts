import { getAllProjectApi } from "@/services/apiProject";
import { useAuthStore } from "@/stores/auth/authStore";
import { useQuery } from "@tanstack/react-query";

export function useProjects() {
  const user = useAuthStore((state) => state.user);
  const { data: projects, isPending: isLoading } = useQuery({
    queryKey: ["projects", user?.id],
    queryFn: () => getAllProjectApi(user?.id as string),
    enabled: !!user?.id,
  });

  return { projects, isLoading };
}
