import { useEffect } from "react";
import { useGradesStore } from "../stores/grades/gradesStore";
import Loading from "../components/Loading";
import AddGradeTypeModal from "@/components/AddGradeTypeModal";
import AddAssessmentModal from "@/components/AddAssessmentModal";
import StudentGradesRow from "@/components/StudentGradesRow";

export default function GradingSheet() {
  const gradeData = useGradesStore((state) => state.grades);
  const gradeTypes = useGradesStore((state) => state.gradeTypes);
  const fetchGradeTypes = useGradesStore((state) => state.fetchGradeTypes);
  const fetchGrades = useGradesStore((state) => state.fetchGrades);
  const loading = useGradesStore((state) => state.loading);
  const error = useGradesStore((state) => state.error);

  useEffect(() => {
    fetchGradeTypes();
    fetchGrades();
  }, [fetchGradeTypes, fetchGrades]);

  console.log(gradeData);

  return (
    <div className="w-full px-8">
      <h2 className="text-2xl font-medium py-6">College Physics 1 - COM231</h2>
      <div className="w-full h-full max-h-[830px] max-w-[1600px] border border-mistGray shadow rounded-md">
        <div className="h-[770px] overflow-x-auto overflow-y-auto no-scrollbar rounded-md">
          {error && <h3>{error}</h3>}
          {loading && <Loading />}
          {!loading && (
            <div className="">
              {/* HEADER PART */}
              <div className="flex justify-between items-center border-b border-b-mistyGray px-4 py-4">
                <span className="text-lg font-medium ">Class Records</span>
                <AddGradeTypeModal />
              </div>
              {/* TABLE PART */}
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="text-left font-semibold text-gray-900 p-4">
                        Student Name
                      </th>
                      <th className="text-left font-semibold text-gray-900 p-4">
                        Student Number
                      </th>
                      {gradeTypes.map((gradeType) => (
                        <th
                          key={gradeType.type}
                          className="text-center font-semibold text-gray-900 p-4"
                          colSpan={gradeType.assessments.length}
                        >
                          {gradeType.type}
                          <AddAssessmentModal type={gradeType.type} />
                        </th>
                      ))}
                    </tr>
                    <tr className="bg-gray-50 border-b text-sm sticky bottom-0">
                      <th className="p-4 min-w-[200px]" colSpan={2}></th>
                      {gradeTypes.map((gradeType) =>
                        gradeType.assessments.map((assessment, index) => (
                          <th
                            key={`${gradeType.type}-${index}`}
                            className="text-center p-4 min-w-[200px]"
                          >
                            {assessment.name}
                            <div className="text-xs font-normal text-gray-500">
                              Max: {assessment.maxPoints}
                            </div>
                          </th>
                        ))
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {gradeData.map((student, index) => (
                      <StudentGradesRow
                        key={student.studentNumber}
                        student={student}
                        index={index}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
