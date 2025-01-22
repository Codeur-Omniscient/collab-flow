import { Project } from "@/types";
import { create } from "zustand";

interface ProjectStore {
  project: Project;
  setProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectStore>()((set) => ({
  project: {} as Project,
  setProject: (project) => set({ project }),
}));
