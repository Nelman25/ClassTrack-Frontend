import { create } from "zustand";
import { ATTENDANCE_DATES, ATTENDANCE_RECORDS } from "@/constants/dummyData";

export const useAttendanceStore = create((set) => ({
  loading: false,
  error: "",
  dates: [],
  records: [],

  fetchDatesAndRecords: async () => {
    set({ loading: true, error: "" }); // start loading and clear prev errors

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
      const fetchedDates = [...ATTENDANCE_DATES];
      const fetchedRecords = [...ATTENDANCE_RECORDS];

      set({ loading: false, dates: fetchedDates, records: fetchedRecords });
    } catch (error) {
      set({
        loading: false,
        error: `Error fetching dates and records: ${error}`,
      });
    }
  },

  addNewDate: () => {},

  changeRecordStatus: (studentNumber, date_id, value) =>
    set((state) => ({
      records: state.records.map((student) => {
        if (student.studentNumber === studentNumber) {
          return {
            ...student,
            records: student.records.map((r) => {
              if (r.date_id !== date_id) return r;
              return { ...r, record_status: value };
            }),
          };
        }

        return student;
      }),
    })),
}));
