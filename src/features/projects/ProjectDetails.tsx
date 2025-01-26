import { useProject } from "./useProject";

const ProjectDetails = () => {
  const { isGetting, project } = useProject();
  if (isGetting) return <div>Loading...</div>;
  if (!project) return <div>Not found</div>;
  const { name, description, status } = project;
  return (
    <div>
      <h2>Project Details Page</h2>
      <h3>{name}</h3>
      <span>{status}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProjectDetails;
