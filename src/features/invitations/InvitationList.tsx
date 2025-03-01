import InvitationItem from "./InvitationItem";
import { useInvitationDetails } from "./useInvitationDetails";
import { useInvitations } from "./useInvitations";

const InvitationList = () => {
  // const { invitationsFn, isLoading } = useInvitations();
  // console.log(invitationsFn);
  const { invitationsDetails, isLoading } = useInvitationDetails();
  console.log(invitationsDetails);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="grid auto-rows-min gap-4 lg:grid-cols-2">
      {/* {invitationsFn?.map((invitation) => (
        <InvitationItem
          key={invitation.project_id}
          invitation={{
            projectId: invitation.project_id,
            userId: invitation.user_id,
            role: invitation.role,
            invitation_status: invitation.invitation_status,
          }}
        />
      ))} */}
      {/* {invitationsDetails?.map((invitation)=>(
        <InvitationItem key={invitation.project_id} invitation={invitation}/>
      ))} */}
    </div>
  );
};

export default InvitationList;
