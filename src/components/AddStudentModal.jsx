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

export function AddStudentModal() {
  const addStudent = useStudentsStore((state) => state.addNewStudent);
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentNumber: "",
    course: "",
    address: "",
  });

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

    addStudent(student);
    setError("");
    setStudent({
      firstName: "",
      lastName: "",
      email: "",
      studentNumber: "",
      course: "",
      address: "",
    });
    setModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <button className="bg-green-500 h-10 px-4 rounded-lg text-white shadow hover:bg-green-600 transition">
          Add student
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a student</DialogTitle>
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
            Add Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
