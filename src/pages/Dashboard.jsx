import { CLASSES } from "../dummyData";
import Header from "../components/Header";
import ClassCard from "../components/ClassCard";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="w-full max-w-[1440px]">
          <div className="flex justify-between pb-4 mt-8 border-b border-b-slate-500">
            <h1 className="text-4xl text-slate-700 font-medium">My Classes</h1>
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md shadow-md duration-200 hover:scale-105 active:scale-100 hover:bg-green-600">
              Create class
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-4 max-w-full max-h-[700px] overflow-y-auto flex-wrap group no-scrollbar">
            {CLASSES.map((classItem) => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
