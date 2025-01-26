import { getProjectApi } from "@/services/apiProject";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useProject() {
  const { projectId } = useParams();
  const { data: project, isPending: isGetting } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => {
      if (projectId) {
        return getProjectApi(projectId);
      } else {
        console.log(projectId);
        throw new Error("Project ID is undefined");
      }
    },
  });

  return { project, isGetting };
}
