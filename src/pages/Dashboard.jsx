import { useClassStore } from "@/stores/classes/classStore";
import { useEffect } from "react";

import ClassCard from "@/components/ClassCard";
import Loading from "@/components/Loading";

export default function Dashboard() {
  const classes = useClassStore((state) => state.classes);
  const loading = useClassStore((state) => state.loading);
  const error = useClassStore((state) => state.error);
  const fetchClasses = useClassStore((state) => state.fetchClasses);
  // const addNewClass = useClassStore((state) => state.addNewClass);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  // TODO: Create a function for creating a new class.

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-royalIndigo/95 border-b borde-b-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/src/assets/NU_shield.png"
                alt="NU Logo"
                className="size-10 mr-2"
              />
              <span className="ml-2 text-xl font-bold text-white/80">
                ClassTrack
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                {/* SEARCH BAR ICON + TEXT INPUT HERE */}
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Create class
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-gray-800">My Classes</h1>
          <div className="flex gap-2">
            <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50">
              Filter
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50">
              Sort
            </button>
          </div>
        </div>

        {error && <p>{error}</p>}
        {loading && <Loading className="mt-48" />}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {classes.map((classItem, index) => (
              <ClassCard
                key={classItem.id}
                classItem={classItem}
                index={index}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
