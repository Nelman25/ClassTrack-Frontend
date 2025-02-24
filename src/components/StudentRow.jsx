import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";

export default function StudentRow({ student, index }) {
  const { firstName, lastName, email, studentNumber, course, address } =
    student;
  return (
    <tr
      className={`border-b hover:bg-gray-50 transition-colors ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <td className="px-4 py-3 text-sm text-gray-900 font-medium min-w-[150px]">
        {lastName}, {firstName}
      </td>
      <td className="px-4 text-sm text-blue-600 min-w-[250px]">{email}</td>
      <td className="px-4 text-sm text-gray-600 min-w-[200px]">
        {studentNumber}
      </td>
      <td className="px-4 text-sm text-gray-600 min-w-[200px]">{course}</td>
      <td className="px-4 text-sm text-gray-600 min-w-[300px]">{address}</td>
      <td className="flex gap-4 px-4 py-3 items-center min-w-[150px]">
        <button>
          <GoPencil className="text-blue-600 font-medium text-xl hover:text-blue-700" />
        </button>
        <button>
          <CiTrash className="text-red-600 font-medium text-xl hover:text-red-700" />
        </button>
      </td>
    </tr>
  );
}
