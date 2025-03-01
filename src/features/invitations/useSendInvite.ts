import { inviteUserToProjectApi } from "@/services/apiInvitation";
import { useAuthStore } from "@/stores/auth/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSendInvite() {
  const queryClient = useQueryClient();
  const senderId = useAuthStore((state) => state.user?.id);
  const { mutate: inviting, isPending: isInviting } = useMutation({
    mutationFn: ({
      projectId,
      email,
    }: {
      projectId: string;
      email: string;
    }) => {
      if (!senderId) throw new Error("User must be logged in to send invites");
      return inviteUserToProjectApi(projectId, email, senderId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invites"] });
      toast.success("Invitation sended successfully");
    },
  });

  return { inviting, isInviting };
}
