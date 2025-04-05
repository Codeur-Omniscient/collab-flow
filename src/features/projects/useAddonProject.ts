import { addUserOnProjectApi } from "@/services/apiProject";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddOnProject() {
  const queryClient = useQueryClient();
  const { mutate: addingOnProject, isPending: isAdding } = useMutation({
    mutationFn: ({ projectId, email }: { projectId: string; email: string }) =>
      addUserOnProjectApi(projectId, email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success("User added successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { addingOnProject, isAdding };
}
