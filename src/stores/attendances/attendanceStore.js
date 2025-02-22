import { create } from "zustand";
import { ATTENDANCE_DATES, ATTENDANCE_RECORDS } from "@/constants/dummyData";

export const useAttendanceStore = create((set) => ({
  loading: false,
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
}));
