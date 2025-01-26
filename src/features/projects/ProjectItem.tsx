import { Button } from "@/components/ui/button";
import { useFormStore } from "@/stores/formStore";
import { useProjectStore } from "@/stores/projectStore";
import { Project } from "@/types";
import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";

interface ProjectProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectProps) => {
  const navigate = useNavigate();
  const setProject = useProjectStore((state) => state.setProject);
  const isEditOpen = useFormStore((state) => state.isEditOpen);

  const handleClick = () => {
    setProject(project);
    isEditOpen();
  };

  return (
    <div className="grid aspect-video rounded-xl bg-muted/50">
      <div>
        <h3>{project.name}</h3>
        <Button
          type="button"
          onClick={() => {
            navigate(`/project/${project.id}`);
          }}
        >
          Open
        </Button>
        <Button onClick={handleClick}>
          <Edit />
        </Button>
        <DeleteDialog projectID={project.id!}>
          <Button>
            <Trash />
          </Button>
        </DeleteDialog>
      </div>
      <div>
        <span>{project.status}</span>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
