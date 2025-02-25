import { create } from "zustand";
import { STUDENTS } from "@/constants/dummyData";

export const useStudentsStore = create((set) => ({
  loading: false,
  students: [],
  error: "",

  fetchStudents: async () => {
    set({ loading: true, error: "" }); // start loading and clear prev errors

    try {
      // TODO: Replace this simulation with an actual API call to fetch students
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API delay
      const fetchedStudents = [...STUDENTS];

      set({ students: fetchedStudents, loading: false });
    } catch (error) {
      set({ error: `Error fetching students: ${error}`, loading: false });
    }
  },
  addNewStudent: (newStudent) =>
    set((state) => ({ students: [newStudent, ...state.students] })),

  deleteStudent: (student) =>
    set((state) => ({
      students: state.students.filter(
        (s) => s.studentNumber !== student.studentNumber
      ),
    })),

  editStudentInformation: (editedStudentInfo) =>
    set((state) => ({
      students: state.students.map((s) => {
        if (s.studentNumber === editedStudentInfo.studentNumber) {
          return editedStudentInfo;
        }

        return s;
      }),
    })),
}));
