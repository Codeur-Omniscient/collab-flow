import { getAllInvitationsApi } from "@/services/apiInvitation";
import { useAuthStore } from "@/stores/auth/authStore";
import { useQuery } from "@tanstack/react-query";

export function useInvitations() {
  const user = useAuthStore((state) => state.user);
  const { data: invitationsFn, isPending: isLoading } = useQuery({
    queryKey: ["invites", user?.id],
    queryFn: () => getAllInvitationsApi(user?.id as string),
    enabled: !!user?.id,
  });

  return { invitationsFn, isLoading };
}
