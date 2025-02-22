import { BsPeople } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

import { COLOR_STRIPS } from "@/constants/constants";

export default function ClassCard({ classItem, index }) {
  const { subject, section, classSize, schedule } = classItem;

  return (
    <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`absolute top-0 left-0 w-full h-1 ${COLOR_STRIPS[index]}`}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{subject}</h3>
            <span className="text-sm font-medium text-gray-500">{section}</span>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"></button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600 gap-2">
            <BsPeople className="text-gray-600" />
            <span className="text-sm">{classSize} enrolled students</span>
          </div>
          <div className="flex items-center text-gray-600 gap-2">
            <CiClock2 className="text-gray-600" />
            <span className="text-sm">{schedule}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="text-sm text-blue-600 hover:text-blue-700">
            View details
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-700">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
