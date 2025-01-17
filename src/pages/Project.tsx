import { Button } from "@/components/ui/button";
import ProjectForm from "@/features/projects/ProjectForm";
import { useProjectStore } from "@/stores/projectStore";

const Project = () => {
  const { formOpen, isOpen } = useProjectStore();
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
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <ProjectForm />
    </div>
  );
};

export default Project;
