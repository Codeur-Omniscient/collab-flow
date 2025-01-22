import { updateProjectApi } from "@/services/apiProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Project } from "@/types";
import toast from "react-hot-toast";

export function useUpdateProject() {
  const queryClient = useQueryClient();

  const { mutate: updateProject, isPending: isUpdating } = useMutation({
    mutationFn: (project: Project) => updateProjectApi(project),
    onSuccess: () => {
      toast.success("Project updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProject, isUpdating };
}
