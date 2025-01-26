import { create } from "zustand";

interface FormStore {
  formOpen: boolean;
  editForm: boolean;
  deleteDialog: boolean;
  isOpen: () => void;
  onClose: () => void;
  isEditOpen: () => void;
  onEditClose: () => void;
  onDeleteClose: () => void;
}

export const useFormStore = create<FormStore>()((set) => ({
  formOpen: false,
  editForm: false,
  deleteDialog: false,
  isOpen: () => set({ formOpen: true }),
  onClose: () => set({ formOpen: false }),
  isEditOpen: () => set({ editForm: true }),
  onEditClose: () => set({ editForm: false }),
  onDeleteClose: () => set({ deleteDialog: false }),
}));
