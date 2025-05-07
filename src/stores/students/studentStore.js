import { create } from "zustand";
import { STUDENTS } from "@/constants/dummyData";
import { useGradesStore } from "../grades/gradesStore";
import { useAttendanceStore } from "../attendances/attendanceStore";
import { useClassStore } from "../classes/classStore";
import { useUserActivityStore } from "../userActivity/userActivityStore";

export const useStudentsStore = create((set) => ({
  loading: false,
  students: [],
  error: "",

  fetchStudents: async () => {
    set({ loading: true, error: "" }); // start loading and clear prev errors

    try {
      // TODO: Replace this simulation with an actual API call to fetch students
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API delay
      // const fetchedStudents = [...STUDENTS];

      set({ students: STUDENTS, loading: false });
    } catch (error) {
      set({ error: `Error fetching students: ${error}`, loading: false });
    }
  },

  addNewStudent: (newStudent) => {
    set((state) => ({ students: [newStudent, ...state.students] }));

    const gradeStore = useGradesStore.getState();
    const attendanceStore = useAttendanceStore.getState();
    const classStore = useClassStore.getState();
    const userActivity = useUserActivityStore.getState();
    gradeStore.addNewStudent(newStudent);
    attendanceStore.addNewStudent(newStudent);
    classStore.incrementClassSize(userActivity.selectedClass.id);
  },

  deleteStudent: (student) => {
    set((state) => ({
      students: state.students.filter(
        (s) => s.studentNumber !== student.studentNumber
      ),
    }));

    const gradeStore = useGradesStore.getState();
    const attendanceStore = useAttendanceStore.getState();
    const classStore = useClassStore.getState();
    const userActivity = useUserActivityStore.getState();
    gradeStore.deleteStudent(student);
    attendanceStore.deleteStudent(student);
    classStore.decrementClassSize(userActivity.selectedClass.id);
  },

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
