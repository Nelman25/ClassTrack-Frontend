import StudentRow from "../components/StudentRow";
import Loading from "../components/Loading";
import { useStudentsStore } from "../stores/students/studentStore";
import { useEffect } from "react";

export default function Masterlist() {
  const students = useStudentsStore((state) => state.students);
  const fetchStudents = useStudentsStore((state) => state.fetchStudents);
  const loading = useStudentsStore((state) => state.loading);
  const error = useStudentsStore((state) => state.error);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className="w-full h-full min-h-[800px] mt-8 mx-8 py-2 px-4 border border-mistGray shadow rounded-md">
      {/* Subject and Section here  */}
      <div className="flex justify-between items-center my-2">
        <h2 className="text-xl font-medium">College Physics 1 - COM231</h2>
        <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md shadow-md duration-200 hover:scale-105 active:scale-100 hover:bg-green-600">
          Add student
        </button>
      </div>
      {/* Student data table rito */}
      <div className="h-[700px] overflow-y-auto no-scrollbar rounded-md">
        {error && <h3>{error}</h3>}
        {loading && <Loading />}
        {!loading && (
          <>
            <table className="w-full">
              <thead className="bg-regalBlue sticky top-0">
                <tr className="text-white text-xl">
                  <th className="py-3 " colSpan={1}>
                    Student name
                  </th>
                  <th className="border" colSpan={2}>Student email</th>
                  <th className="border" colSpan={1}>Student number</th>
                  <th className="border" colSpan={1}>Course</th>
                  <th className="border" colSpan={2}>Address</th>
                </tr>
              </thead>
              <tbody className="text-center font-light">
                {students.map((student) => (
                  <StudentRow key={student.studentNumber} student={student} />
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
