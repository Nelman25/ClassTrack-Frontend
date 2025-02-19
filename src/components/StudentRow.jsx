export default function StudentRow({ student }) {
  const { name, email, studentNumber, course, address } = student;
  return (
    <tr className="odd:bg-blue-100 even:bg-white hover:bg-amber-50 duration-100 text-lg border-b border-b-slate-300">
      <td className="py-2 text-start indent-10" colSpan={1}>
        {name}
      </td>
      <td className="text-blue-600" colSpan={3}>
        {email}
      </td>
      <td colSpan={1}>{studentNumber}</td>
      <td colSpan={1}>{course}</td>
      <td colSpan={4}>{address}</td>
    </tr>
  );
}
