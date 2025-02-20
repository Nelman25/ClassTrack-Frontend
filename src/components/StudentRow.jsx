export default function StudentRow({ student }) {
  const { name, email, studentNumber, course, address } = student;
  return (
    <tr className="odd:bg-blue-50 even:bg-white hover:bg-amber-50 duration-100 border-b text-center border-b-slate-300">
      <td className="py-3 text-start indent-5 border-r border-l" colSpan={1}>
        {name}
      </td>
      <td className="text-blue-600 border-r border-l" colSpan={2}>
        {email}
      </td>
      <td className="border-r border-l" colSpan={1}>
        {studentNumber}
      </td>
      <td className="border-r border-l" colSpan={1}>
        {course}
      </td>
      <td className="border-r border-l" colSpan={2}>
        {address}
      </td>
    </tr>
  );
}
