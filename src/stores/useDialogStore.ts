import { create } from 'zustand';
import { Dialog, NoteProps } from '../types';

interface State {
  note: NoteProps;
  dialog: Dialog;
  isInDialog: boolean;
  isInNote: boolean;
}

interface Actions {
  updateDialogStatus: () => void;
  updateDialog: (data: Dialog) => void;
  updateDialogText: (text: string) => void;
  updateNoteStatus: () => void;
  updateNote: (data: NoteProps) => void;
}

const useDialogStore = create<State & Actions>((set) => ({
  note: {} as NoteProps,
  dialog: {} as Dialog,
  isInDialog: false,
  isInNote: false,
  updateDialogStatus: () =>
    set((state) => ({
      isInDialog: !state.isInDialog,
    })),
  updateDialog: (data: Dialog) => set(() => ({ dialog: data })),
  updateDialogText: (text: string) =>
    set((state) => ({ dialog: { ...state.dialog, text: text } })),
  updateNoteStatus: () =>
    set((state) => ({
      isInNote: !state.isInNote,
    })),
  updateNote: (data: NoteProps) => set(() => ({ note: data })),
}));

export default useDialogStore;
