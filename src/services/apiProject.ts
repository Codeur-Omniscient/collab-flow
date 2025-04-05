import { Project } from "@/types";
import supabase from "./supabase";

export async function getAllProjectApi(userId: string) {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("admin_id", userId);

  if (error) throw new Error("Failed to get projects");

  return projects;
}

export async function getProjectApi(id: string) {
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);

  return project;
}

export async function createProjectApi(project: Project) {
  const { data, error } = await supabase
    .from("projects")
    .insert([{ ...project }]);

  if (error) throw new Error("Failed to create a project");

  return { data };
}

export async function updateProjectApi(project: Project) {
  if (!project.id) throw new Error("Project ID is required for update");

  const { data, error } = await supabase
    .from("projects")
    .update({ ...project })
    .eq("id", project.id);

  if (error) throw new Error("Failed to update a project");

  return { data };
}

export async function deleteProjectApi(id: string) {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw new Error("Failed to delete a project");

  return { id };
}

export async function addUserOnProjectApi(projectId: string, email: string) {
  // Vérifier si l'utilisateur existe
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!user || userError) {
    throw new Error("User not found");
  }

  // Vérifier s'il est déjà membre

  const { data: existingMember, error: projectError } = await supabase
    .from("project_members")
    .select("*")
    .eq("project_id", projectId)
    .eq("user_id", user.id)
    .single();

  if (projectError) {
    console.log(projectError.message);
  }

  if (existingMember) {
    throw new Error("Utilisateur déjà membre du projet");
  }

  // Insérer l'utilisateur

  const { error: insertError } = await supabase.from("project_members").insert({
    project_id: projectId,
    user_id: user.id,
    role: "collaborateur",
  });

  if (insertError) throw new Error("Failed to add user on project");
}
