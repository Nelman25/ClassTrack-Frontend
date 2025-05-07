import { create } from "zustand";

export const useUserActivityStore = create((set) => ({
  selectedClass: null,

  setSelectedClass: (selectedClass) => set({ selectedClass: selectedClass }),
}));
