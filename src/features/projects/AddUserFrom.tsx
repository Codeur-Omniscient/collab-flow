import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormStore } from "@/stores/formStore";
import { InviteFormData, inviteSchema } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAddOnProject } from "./useAddonProject";

const AddUserForm = () => {
  const { addingOnProject, isAdding } = useAddOnProject();
  const { projectId } = useParams();
  const { inviteForm, onInviteClose } = useFormStore();
  const form = useForm<InviteFormData>({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: InviteFormData) => {
    const { email } = data;
    if (projectId) {
      addingOnProject(
        { projectId, email },
        {
          onSuccess: () => {
            form.reset();
            onInviteClose();
          },
        },
      );
    }
  };
  return (
    <Dialog
      defaultOpen={inviteForm}
      open={inviteForm}
      modal
      onOpenChange={onInviteClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter email to add a new collaborator</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="collabflow@exemple.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <div>
                  <Button type="submit" disabled={isAdding}>
                    {isAdding ? (
                      <>
                        <Loader2 className="animate-spin" /> Adding
                      </>
                    ) : (
                      "Add"
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

export default AddUserForm;
