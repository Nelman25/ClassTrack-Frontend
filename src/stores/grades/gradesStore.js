import { create } from "zustand";
import { GRADE_TYPES, GRADES } from "../../constants/dummyData";

export const useGradesStore = create((set) => ({
  loading: false,
  error: "",
  gradeTypes: [],
  grades: [],

  fetchGradeTypes: async () => {
    set({ loading: true, error: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const fetchedGradeTypes = [...GRADE_TYPES];

      set({ gradeTypes: fetchedGradeTypes, loading: false });
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
              maxPoints,
            },
          ],
        },
      ],
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
      };
    }),
}));
