import { deleteProjectApi } from "@/services/apiProject";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: (id: string) => deleteProjectApi(id),
    onSuccess: () => {
      toast.success("Project deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteProject, isDeleting };
}
