/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";

import StudentRow from "../components/StudentRow";
import Loading from "../components/Loading";

import { useStudentsStore } from "../stores/students/studentStore";
import { AddStudentModal } from "@/components/AddStudentModal";

export default function Masterlist() {
  const students = useStudentsStore((state) => state.students);
  const fetchStudents = useStudentsStore((state) => state.fetchStudents);
  const loading = useStudentsStore((state) => state.loading);
  const error = useStudentsStore((state) => state.error);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div className="w-full px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium py-6">
          College Physics 1 - COM231
        </h2>

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
