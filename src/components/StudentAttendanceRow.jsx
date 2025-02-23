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
    <tr className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
      <td className="min-w-[200px] px-4 text-start">{record.name}</td>
      {dates.map(({ date_id }) => {
        const r = record.records.find((i) => i.date_id === date_id);
        return (
          <td className="min-w-[200px] px-4 py-3" key={date_id}>
            <Select
              value={r.record_status}
              onValueChange={(value) =>
                changeRecordStatus(record.studentNumber, date_id, value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="hello" />
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
