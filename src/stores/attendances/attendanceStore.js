import { create } from "zustand";
import { ATTENDANCE_DATES, ATTENDANCE_RECORDS } from "@/constants/dummyData";

export const useAttendanceStore = create((set) => ({
  loading: false,
  error: "",
  dates: [""],
  records: [],

  addNewStudent: (student) =>
    set((state) => ({
      records: [
        ...state.records,
        {
          name: `${student.lastName}, ${student.firstName}`,
          studentNumber: student.studentNumber,
          records: state.dates.map((d) => ({
            record_id: Math.random(),
            date_id: d.date_id,
            record_status: "",
          })),
        },
      ],
    })),

  deleteStudent: (student) =>
    set((state) => ({
      records: state.records.filter(
        (r) => r.studentNumber !== student.studentNumber
      ),
    })),

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

  addNewDate: () =>
    set((state) => ({
      dates: [
        ...state.dates,
        { date_id: state.dates.length + 1, attendance_date: "" },
      ],
      records: state.records.map((record) => ({
        ...record,
        records: [
          ...record.records,
          {
            record_id: Math.random(),
            date_id: state.dates.length + 1,
            record_status: "",
          },
        ],
      })),
    })),

  changeDate: (date_id, newDate) =>
    set((state) => ({
      dates: state.dates.map((date) => {
        if (date.date_id === date_id) {
          return { ...date, attendance_date: newDate };
        }
        return date;
      }),
    })),

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
