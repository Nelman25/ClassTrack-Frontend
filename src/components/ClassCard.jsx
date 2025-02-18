export default function ClassCard({ classItem }) {
  const { subject, section, classSize, schedule } = classItem;
  return (
    <div className="flex flex-col items-center justify-center py-4 px-6 rounded-xl border-4 border-black border-opacity-5 even:bg-royalIndigo even:text-white odd:bg-yellow-500  shadow-lg w-[30%] h-[250px]  duration-100 group-hover:scale-95 hover:group-hover:scale-100 active:group-hover:scale-95">
      <h1 className="text-2xl font-semibold text-center my-3 tracking-wide">
        {subject}
      </h1>
      <p className="font-medium text-lg">{section}</p>
      <p className="my-2">
        {classSize} {classSize > 1 ? "students" : "student"}
      </p>
      <p>{schedule}</p>
    </div>
  );
}
