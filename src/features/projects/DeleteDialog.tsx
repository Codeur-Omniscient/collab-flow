import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { useDeleteProject } from "./useDeleteProject";
import { Loader2 } from "lucide-react";
import { useFormStore } from "@/stores/formStore";
import { Button } from "@/components/ui/button";

interface DeleteDialogProps {
  projectID: string;
  children: React.ReactNode;
}

const DeleteDialog = ({ projectID, children }: DeleteDialogProps) => {
  const { deleteProject, isDeleting } = useDeleteProject();
  const { onEditClose } = useFormStore();

  const handleDelete = () => {
    deleteProject(projectID, {
      onSuccess: () => {
        onEditClose();
      },
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
          <div>
            <Button type="submit" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="animate-spin" /> Deleting
                </>
              ) : (
                "Confirme"
              )}
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
