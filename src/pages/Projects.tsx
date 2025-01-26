import { Button } from "@/components/ui/button";
import ProjectAddForm from "@/features/projects/ProjectAddForm";
import ProjectEditForm from "@/features/projects/ProjectEditForm";
import ProjectList from "@/features/projects/ProjectList";
import { useFormStore } from "@/stores/formStore";

const Projects = () => {
  const { formOpen, isOpen } = useFormStore();
  console.log(formOpen);
  return (
    <div className="space-y-5 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Project</h1>
          <p className="text-muted">Manage your project here</p>
        </div>
        <div>
          <Button type="button" onClick={isOpen}>
            Create Project
          </Button>
        </div>
      </div>
      <ProjectList />
      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div> */}
      <ProjectAddForm />
      <ProjectEditForm />
    </div>
  );
};

export default Projects;
