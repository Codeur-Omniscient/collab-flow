import { Button } from "@/components/ui/button";
import { useProject } from "./useProject";
import { useFormStore } from "@/stores/formStore";

const ProjectDetails = () => {
  const { isGetting, project } = useProject();
  const onInvitationOpen = useFormStore((state) => state.isInviteOpen);
  if (isGetting) return <div>Loading...</div>;
  if (!project) return <div>Not found</div>;
  const { name, description, status } = project;
  return (
    <div>
      <h2>Project Details Page</h2>
      <h3>{name}</h3>
      <span>{status}</span>
      <p>{description}</p>
      <Button type="button" onClick={onInvitationOpen}>
        +
      </Button>
    </div>
  );
};

export default ProjectDetails;
