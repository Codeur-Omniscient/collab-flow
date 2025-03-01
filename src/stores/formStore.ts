import { create } from "zustand";

interface FormStore {
  formOpen: boolean;
  editForm: boolean;
  deleteDialog: boolean;
  inviteForm: boolean;
  isOpen: () => void;
  onClose: () => void;
  isEditOpen: () => void;
  onEditClose: () => void;
  onDeleteClose: () => void;
  isInviteOpen: () => void;
  onInviteClose: () => void;
}

export const useFormStore = create<FormStore>()((set) => ({
  formOpen: false,
  editForm: false,
  deleteDialog: false,
  inviteForm: false,
  isOpen: () => set({ formOpen: true }),
  isEditOpen: () => set({ editForm: true }),
  isInviteOpen: () => set({ inviteForm: true }),
  onClose: () => set({ formOpen: false }),
  onEditClose: () => set({ editForm: false }),
  onDeleteClose: () => set({ deleteDialog: false }),
  onInviteClose: () => set({ inviteForm: false }),
}));
