import { getAllProjectApi } from "@/services/apiProject";
import { useQuery } from "@tanstack/react-query";

export function useProjects() {
  const { data: projects, isPending: isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjectApi,
  });

  return { projects, isLoading };
}
