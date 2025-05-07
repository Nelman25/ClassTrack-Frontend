import { create } from "zustand";
import { GRADE_TYPES, GRADES } from "@/constants/dummyData";

export const useGradesStore = create((set) => ({
  loading: false,
  error: "",
  gradeTypes: [],
  grades: [],
  weight: [],

  addNewStudent: (student) =>
    set((state) => ({
      grades: [
        ...state.grades,
        {
          name: `${student.lastName}, ${student.firstName}`,
          studentNumber: student.studentNumber,
          grades: state.gradeTypes.map((gt) => ({
            type: gt.type,
            scores: gt.assessments.map((a) => ({
              assessmentId: a.id,
              score: 0,
            })),
          })),
        },
      ],
    })),

  deleteStudent: (student) =>
    set((state) => ({
      grades: state.grades.filter(
        (g) => g.studentNumber !== student.studentNumber
      ),
    })),

  addWeight: (gradeType, weightValue) => {
    set((state) => ({
      weight: [
        ...state.weight,
        { gradeType: gradeType, percentage: Number(weightValue) },
      ],
    }));
  },

  updateWeight: (updatedWeight) => set({ weight: updatedWeight }),

  fetchGradeTypes: async () => {
    set({ loading: true, error: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      set({ gradeTypes: GRADE_TYPES, loading: false });
    } catch (error) {
      set({ error: `Error fetching grade types: ${error}`, loading: false });
    }
  },

  fetchGrades: async () => {
    set({ loading: true, error: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const fetchedGrades = [...GRADES];

      set({ grades: fetchedGrades, loading: false });
    } catch (error) {
      set({ error: `Error fetching grades: ${error}`, loading: false });
    }
  },

  addNewGradeType: (newGradeType, initialAssessment, maxPoints) =>
    set((state) => ({
      gradeTypes: [
        ...state.gradeTypes,
        {
          type: newGradeType,
          assessments: [
            {
              id: initialAssessment.split(" ").join("").toLowerCase(),
              name: initialAssessment,
              maxPoints: Number(maxPoints),
            },
          ],
        },
      ],

      grades: state.grades.map((student) => ({
        ...student,
        grades: student.grades.concat({
          type: newGradeType,
          scores: [
            {
              assessmentId: initialAssessment.split(" ").join("").toLowerCase(),
              score: 0,
            },
          ],
        }),
      })),
    })),

  addNewAssessment: (type, assessmentName, maxScore) =>
    set((state) => {
      return {
        gradeTypes: state.gradeTypes.map((t) =>
          t.type === type
            ? {
                ...t,
                assessments: [
                  ...t.assessments,
                  {
                    id: assessmentName.split(" ").join("").toLowerCase(),
                    name: assessmentName,
                    maxPoints: maxScore,
                  },
                ],
              }
            : t
        ),

        // append new assessment to each student grades record
        grades: state.grades.map((student) => ({
          ...student,
          grades: student.grades.map((g) =>
            g.type === type
              ? {
                  ...g,
                  scores: [
                    ...g.scores,
                    {
                      assessmentId: assessmentName
                        .split(" ")
                        .join("")
                        .toLowerCase(),
                      score: 0,
                    },
                  ],
                }
              : g
          ),
        })),
      };
    }),

  updateGrades: (updatedStudentRecord) =>
    set((state) => ({
      grades: state.grades.map((g) => {
        if (g.studentNumber === updatedStudentRecord.studentNumber) {
          return updatedStudentRecord;
        }

        return g;
      }),
    })),
}));
