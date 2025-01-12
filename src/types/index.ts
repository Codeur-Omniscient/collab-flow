// types/index.ts
export interface User {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  status: "active" | "archived";
  admin_id: string;
  created_at: string;
}

export interface ProjectMember {
  project_id: string;
  user_id: string;
  role: "admin" | "member";
  invitation_status: "pending" | "accepted" | "rejected";
}
