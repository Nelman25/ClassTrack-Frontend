import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAttendanceStore } from "@/stores/attendances/attendanceStore";

export default function StudentAttendanceRow({ record, dates, index }) {
  const changeRecordStatus = useAttendanceStore(
    (state) => state.changeRecordStatus
  );

  return (
    <tr
      className={`border-b hover:bg-blue-50 hover:-translate-y-1 transition-all  ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <td className="min-w-[200px] px-4 text-start">{record.name}</td>
      {dates.map(({ date_id }) => {
        const r = record.records.find((i) => i.date_id === date_id);
        const bgColor =
          r?.record_status === "present"
            ? "bg-green-100"
            : r.record_status === "absent"
            ? "bg-red-100"
            : r.record_status === "late"
            ? "bg-orange-100"
            : r.record_status === "excused"
            ? "bg-blue-100"
            : "bg-white";
        return (
          <td className="min-w-[200px] px-4 py-3" key={date_id}>
            <Select
              value={r ? r.record_status : ""}
              onValueChange={(value) =>
                changeRecordStatus(record.studentNumber, date_id, value)
              }
            >
              <SelectTrigger className={`${bgColor}`}>
                <SelectValue placeholder="Present" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="late">Late</SelectItem>
                <SelectItem value="excused">Excused</SelectItem>
              </SelectContent>
            </Select>
          </td>
        );
      })}
      <td></td>
    </tr>
  );
}
