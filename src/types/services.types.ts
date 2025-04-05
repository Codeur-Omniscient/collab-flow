export interface SignUpParams {
  fullName: string;
  email: string;
  password: string;
  picture: File;
}

export interface InvitationDetails {
  id: string;
  users: {
    full_name: string | null;
    email: string;
    avatar_url: string | null;
  } | null;
  projects: { name: string; id: string } | null;
  invitation_status: string | null;
}
