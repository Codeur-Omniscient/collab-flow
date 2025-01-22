import { Project } from "@/types";
import supabase from "./supabase";

export async function getAllProjectApi() {
  const { data: projects, error } = await supabase.from("projects").select("*");

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
