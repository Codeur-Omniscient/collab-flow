// types/index.ts
export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string | null;
}

export interface Project {
  id?: string;
  name: string;
  description: string | null;
  status: string;
  admin_id: string;
  created_at?: string | null;
}

export interface ProjectMember {
  project_id: string;
  user_id: string;
  role: string;
  invitation_status: string; //"pending" | "accepted" | "rejected";
}

export interface Invitation {
  projectId: string;
  userId: string;
  role: string;
  invitation_status: string; //"pending" | "accepted" | "rejected";
}

export interface Notification {
  id: string;
  userId: string;
  type: "project_invite" | "invite_accepted";
  content: string;
  projectId: string;
  senderId: string;
  isRead: boolean;
  createdAt?: Date;
}
