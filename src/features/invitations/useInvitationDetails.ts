import { getInvitationDetailsApi } from "@/services/apiInvitation";
import { useAuthStore } from "@/stores/auth/authStore";
import { useQuery } from "@tanstack/react-query";

export function useInvitationDetails() {
  const userId = useAuthStore((state) => state.user?.id);
  const { data: invitationsDetails, isPending: isLoading } = useQuery({
    queryKey: ["invites", userId],
    queryFn: () => getInvitationDetailsApi(userId as string),
    enabled: !!userId,
  });

  return { invitationsDetails, isLoading };
}
