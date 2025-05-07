/* eslint-disable react/no-unescaped-entities */

import StudentRow from "../components/StudentRow";
import Loading from "../components/Loading";
import { CiClock1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

import { useStudentsStore } from "../stores/students/studentStore";
import { AddStudentModal } from "@/components/AddStudentModal";
import { useUserActivityStore } from "@/stores/userActivity/userActivityStore";

export default function Masterlist() {
  const students = useStudentsStore((state) => state.students);
  const loading = useStudentsStore((state) => state.loading);
  const error = useStudentsStore((state) => state.error);
  const selectedClass = useUserActivityStore((state) => state.selectedClass);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  console.log(students);

  return (
    <div className="w-full px-8">
      <div className="flex justify-between items-center">
        <div className="py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {selectedClass.subject} - {selectedClass.section}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <CiCalendar />
            <span>{formattedDate}</span>
            <CiClock1 />
            <span>{selectedClass.schedule}</span>
          </div>
        </div>

        <AddStudentModal />
      </div>

      <div className="w-full h-full max-h-[830px] max-w-[1600px] border border-mistGray shadow rounded-md">
        <div className="h-[770px] overflow-x-auto overflow-y-auto no-scrollbar rounded-md">
          {error && (
            <h3 className="text-red-400 text-center text-2xl font-medium">
              {error}
            </h3>
          )}

          {loading && <Loading />}
          {!loading && students.length === 0 && (
            <p className="text-center pt-32 text-2xl font-light">
              No student found. Click
              <span className="text-blue-600 font-medium tracking-wide px-2">
                'Add student'
              </span>
              to get started and manage your students
            </p>
          )}

          {!loading && students.length !== 0 && (
            <div className="max-h-[830px] overflow-x-auto no-scrollbar">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr className="border-b">
                    {[
                      "Name",
                      "Email",
                      "Student Number",
                      "Course",
                      "Address",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                      >
                        <span className="text-lg">{header}</span>
                      </th>
                    ))}
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student, index) => (
                    <StudentRow
                      key={student.studentNumber}
                      student={student}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
