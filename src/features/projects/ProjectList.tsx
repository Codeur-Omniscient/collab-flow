import ProjectItem from "./ProjectItem";
import { useProjects } from "./useProjects";

const ProjectList = () => {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {projects?.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
