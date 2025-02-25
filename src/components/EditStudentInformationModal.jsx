import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStudentsStore } from "@/stores/students/studentStore";
import { useState } from "react";
import { GoPencil } from "react-icons/go";

export function EditStudentInformationModal({ studentItem }) {
  const editStudentInformation = useStudentsStore(
    (state) => state.editStudentInformation
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [student, setStudent] = useState(studentItem);

  const handleSurnameChange = (e) => {
    setStudent((prev) => ({ ...prev, lastName: e.target.value }));
  };
  const handleFirstnameChange = (e) => {
    setStudent((prev) => ({ ...prev, firstName: e.target.value }));
  };
  const handleEmailChange = (e) => {
    setStudent((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleStudentNumberChange = (e) => {
    setStudent((prev) => ({ ...prev, studentNumber: e.target.value }));
  };
  const handleCourseChange = (e) => {
    setStudent((prev) => ({ ...prev, course: e.target.value }));
  };
  const handleAddressChange = (e) => {
    setStudent((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleSaveChanges = () => {
    if (
      !student.firstName ||
      !student.lastName ||
      !student.email ||
      !student.studentNumber ||
      !student.course ||
      !student.address
    ) {
      setError("Some fields are blank, please try again.");
      return;
    }

    editStudentInformation(student);
    setError("");
    setModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <GoPencil className="text-blue-600 font-medium text-xl hover:text-blue-700" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit student information</DialogTitle>
          <DialogDescription>
            Enter necessary details of your student.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="" className="text-right">
              Surname
            </Label>
            <Input
              id="surname"
              placeholder="Dela Cruz"
              className="col-span-3"
              value={student.lastName}
              onChange={handleSurnameChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstname" className="text-right">
              Firstname
            </Label>
            <Input
              id="firstname"
              placeholder="Juan"
              className="col-span-3"
              value={student.firstName}
              onChange={handleFirstnameChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Student email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="delacruzj@students.national-u.edu.ph "
              className="col-span-3"
              value={student.email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="studentnumber" className="text-right">
              Student number
            </Label>
            <Input
              id="studentnumber"
              placeholder="2023-103585"
              className="col-span-3"
              value={student.studentNumber}
              onChange={handleStudentNumberChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <Input
              id="course"
              className="col-span-3"
              placeholder="BSCS-ML"
              value={student.course}
              onChange={handleCourseChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              className="col-span-3"
              placeholder="123 Nowhere St., Sampaloc, Manila"
              value={student.address}
              onChange={handleAddressChange}
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-center font-light">{error}</p>
        )}

        <DialogFooter>
          <Button
            className="bg-green-500 hover:bg-green-600 transition"
            type="submit"
            onClick={handleSaveChanges}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
