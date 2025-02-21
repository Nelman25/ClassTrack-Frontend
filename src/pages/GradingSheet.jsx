import { useEffect } from "react";
import { useGradesStore } from "../stores/grades/gradesStore";
import Loading from "../components/Loading";
import AddGradeTypeModal from "@/components/AddGradeTypeModal";

export default function GradingSheet() {
  const gradesData = useGradesStore((state) => state.grades);
  const gradeTypes = useGradesStore((state) => state.gradeTypes);
  const fetchGradeTypes = useGradesStore((state) => state.fetchGradeTypes);
  const fetchGrades = useGradesStore((state) => state.fetchGrades);
  // const addNewGradeType = useGradesStore((state) => state.addNewGradeType);
  const loading = useGradesStore((state) => state.loading);
  const error = useGradesStore((state) => state.error);

  useEffect(() => {
    fetchGradeTypes();
    fetchGrades();
  }, [fetchGradeTypes, fetchGrades]);

  console.log(gradesData);

  return (
    <div className="w-full h-full min-h-[800px] mt-8 mx-8 py-2 px-4 border border-mistGray shadow rounded-md">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-xl font-medium">College Physics 1 - COM231</h2>
        <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md shadow-md duration-200 hover:scale-105 active:scale-100 hover:bg-green-600">
          Save changes
        </button>
      </div>

      <div className="h-[700px] overflow-x-auto overflow-y-auto no-scrollbar rounded-md">
        {error && <h3>{error}</h3>}
        {loading && <Loading />}
        {!loading && (
          <>
            <div className="w-full">
              <div className="sticky top-0">
                <div className="text-white text-xl flex items-center">
                  {/* Start ng header part */}
                  <div className="py-3 text-center bg-regalBlue grow self-stretch flex-1 border border-black">
                    <p>Student name</p>
                  </div>
                  {gradeTypes.map((field) => (
                    <div
                      key={field}
                      className="py-3 text-center bg-regalBlue grow self-stretch flex-1 border border-black"
                    >
                      <p>{field.type}</p>
                    </div>
                  ))}
                  {/* Plus button */}
                </div>
                {/* Dito na yung ididisplay yung mga data */}
                <div className="">
                  {gradesData.map((item) => {
                    const { studentNumber, name, grades } = item;
                    return (
                      <div className="flex items-center" key={studentNumber}>
                        <div className="py-3 border border-black self-stretch text-center grow flex-1">
                          <p>{name}</p>
                        </div>
                        {gradeTypes.map((gradeType) => {
                          const gradeForType = grades.find(
                            (g) => g.type === gradeType.type
                          );
                          return (
                            <div className="grow flex-1 flex" key={gradeType.type}>
                              {gradeForType?.scores.map((score, idx) => (
                                <div
                                  className="border border-black p-4 flex-1 text-center"
                                  key={idx}
                                >
                                  {score.score}
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <AddGradeTypeModal />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
