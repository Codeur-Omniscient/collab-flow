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
  invitation_status: "pending" | "accepted" | "rejected";
}
