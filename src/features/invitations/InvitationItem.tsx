import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Invitation } from "@/types";
import { X, Check } from "lucide-react";

interface InvitationProps {
  invitation: Invitation;
}

const InvitationItem = ({ invitation }: InvitationProps) => {
  // const { userId, invitation_status } = invitation;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Pending Invitation
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <Avatar className="h-12 w-12">
            {/* <AvatarImage src={invitee.avatarUrl} alt={invitee.name} /> */}
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Joanna</p>
            <p className="text-sm text-muted-foreground">Joanna@gmail.com</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 sm:space-y-0">
        {/* <p className="w-full text-sm text-muted-foreground sm:mr-4 sm:w-auto">
          Expires in 2h
        </p> */}
        <p className="w-full text-sm text-muted-foreground sm:mr-4 sm:w-auto">
          Joanna invited you to join #project
        </p>
        <div className="flex w-full space-x-2 sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-initial">
            <X className="mr-2 h-4 w-4" />
            Decline
          </Button>
          <Button className="flex-1 sm:flex-initial">
            <Check className="mr-2 h-4 w-4" />
            Accept
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InvitationItem;
