import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useStudentsStore } from "@/stores/students/studentStore";
import { CiTrash } from "react-icons/ci";

export default function DeleteStudentModal({ student }) {
  const deleteStudent = useStudentsStore((state) => state.deleteStudent);
  const handleDeleteStudent = () => {
    deleteStudent(student);
  };

  console.log(student);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CiTrash className="text-red-600 font-medium text-xl hover:text-red-700" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete {student.firstName} from the
            masterlist?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete
            {` ${student.firstName}'s`} and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteStudent}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
