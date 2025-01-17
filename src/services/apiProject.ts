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
