import { create } from "zustand";

interface ProjectStore {
  formOpen: boolean;
  isOpen: () => void;
  onClose: () => void;
}

export const useProjectStore = create<ProjectStore>()((set) => ({
  formOpen: false,
  isOpen: () => set({ formOpen: true }),
  onClose: () => set({ formOpen: false }),
}));
