import { useEffect, useMemo, useState } from "react";

import { BG_COLORS, TEXT_COLORS } from "@/constants/constants";
import { calculateFinalGrade } from "@/helpers/helpers";
import { useGradesStore } from "@/stores/grades/gradesStore";

export default function StudentGradesRow({ student, index }) {
  const [studentRecord, setStudentRecord] = useState(student);
  const [finalGrade, setFinalGrade] = useState(0);

  const updateGrades = useGradesStore((state) => state.updateGrades);
  const gradeTypes = useGradesStore((state) => state.gradeTypes);
  const weight = useGradesStore((state) => state.weight);

  const arrayOfGradeTypesString = useMemo(
    () => gradeTypes.map((gradeType) => gradeType.type),
    [gradeTypes]
  );

  useEffect(() => {
    updateGrades(studentRecord);
    const grade = calculateFinalGrade(student.grades, gradeTypes, weight);
    setFinalGrade(grade);
  }, [updateGrades, studentRecord, student, gradeTypes, weight]);

  const handleEditGrades = (type, assessment_id, value) => {
    setStudentRecord((prev) => ({
      ...prev,
      grades: prev.grades.map((g) => {
        if (g.type === type) {
          return {
            ...g,
            scores: g.scores.map((s) => {
              if (s.assessmentId === assessment_id)
                return { ...s, score: Number(value) };

              return s;
            }),
          };
        }
        return g;
      }),
    }));
  };

  return (
    <tr
      key={studentRecord.studentNumber}
      className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
    >
      <td className="p-4 font-medium text-gray-900 min-w-[250px]">
        {studentRecord.name}
      </td>
      <td className="p-4 text-gray-600 min-w-[180px]">
        {studentRecord.studentNumber}
      </td>

      {gradeTypes.map((gradeType) => {
        const studentGradeType = studentRecord.grades.find(
          (g) => g.type === gradeType.type
        );

        return gradeType.assessments.map((assessment) => {
          const selectedAssessment = studentGradeType?.scores.find(
            (s) => s.assessmentId === assessment.id
          );
          const score = selectedAssessment?.score ?? "";
          const bgColor =
            BG_COLORS[arrayOfGradeTypesString.indexOf(gradeType.type)];
          const textColor =
            TEXT_COLORS[arrayOfGradeTypesString.indexOf(gradeType.type)];

          return (
            <td
              key={`${studentRecord.studentNumber}-${assessment.id}`}
              className="text-center p-4  "
            >
              <div className={`inline-block min-w-[4rem] ${bgColor} rounded`}>
                <input
                  type="number"
                  min={0}
                  value={score}
                  className={`w-full text-center font-medium py-1 px-2 bg-transparent ${textColor} outline-none focus:ring-2 focus:ring-blue-500 rounded`}
                  maxLength={5}
                  onChange={(e) =>
                    handleEditGrades(
                      studentGradeType.type,
                      selectedAssessment.assessmentId,
                      e.target.value
                    )
                  }
                />
              </div>
            </td>
          );
        });
      })}

      <td className="p-4 text-center font-medium text-gray-900 min-w-[250px]">
        {finalGrade.toFixed(2)}
      </td>
    </tr>
  );
}
