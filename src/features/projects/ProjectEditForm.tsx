import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormStore } from "@/stores/formStore";
import { useProjectStore } from "@/stores/projectStore";
import { ProjectFormData, projectSchema } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUpdateProject } from "./useUpdateProject";

const ProjectEditForm = () => {
  const { name, description, status, admin_id, id } = useProjectStore(
    (state) => state.project,
  );
  const { editForm, onEditClose } = useFormStore();
  const { updateProject, isUpdating } = useUpdateProject();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: name,
      description: description ?? "",
      status: status,
    },
  });

  useEffect(() => {
    form.reset({
      name: name,
      description: description ?? "",
      status: status,
    });
  }, [name, description, status, form]);

  const onSubmit = (data: ProjectFormData) => {
    updateProject(
      { ...data, admin_id, id },
      {
        onSuccess: () => {
          form.reset();
          onEditClose();
        },
      },
    );
    console.log(data);
  };
  return (
    <Dialog
      defaultOpen={editForm}
      open={editForm}
      modal
      onOpenChange={onEditClose}
    >
      <DialogContent className="space-y-3">
        <DialogHeader>
          <DialogTitle>Update project</DialogTitle>
          <DialogDescription>
            Fill the form to update this project
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="CollabFlow"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the status of the project" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                          <SelectItem value="complete">Complete</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the project description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <div>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={onEditClose}
                  >
                    Close
                  </Button>
                </div>
                <div>
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? (
                      <>
                        <Loader2 className="animate-spin" /> Updating
                      </>
                    ) : (
                      "Update"
                    )}
                  </Button>
                </div>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectEditForm;
