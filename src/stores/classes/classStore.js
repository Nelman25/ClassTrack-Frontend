import { create } from "zustand";
import { CLASSES } from "@/constants/dummyData";

export const useClassStore = create((set) => ({
  loading: false,
  classes: [],
  error: "",

  incrementClassSize: (classId) =>
    set((state) => ({
      classes: state.classes.map((c) =>
        c.id !== classId ? c : { ...c, classSize: c.classSize + 1 }
      ),
    })),

  decrementClassSize: (classId) =>
    set((state) => ({
      classes: state.classes.map((c) =>
        c.id !== classId ? c : { ...c, classSize: c.classSize - 1 }
      ),
    })),

  fetchClasses: async () => {
    set({ loading: true, error: "" }); // start loading and clear prev errors

    try {
      // TODO: Replace this simulation with an actual API call to fetch classes
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
      const fetchedClasses = [...CLASSES];

      set({ classes: fetchedClasses, loading: false });
    } catch (error) {
      set({ error: `Error fetching classes: ${error}`, loading: false });
    }
  },

  addNewClass: (newClass) =>
    set((state) => ({
      classes: [newClass, ...state.classes],
    })),

  editClassInformation: (editedClass) =>
    set((state) => ({
      classes: state.classes.map((c) => {
        if (c.id === editedClass.id) {
          return editedClass;
        }

        return c;
      }),
    })),
}));
