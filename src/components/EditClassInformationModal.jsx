/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useClassStore } from "@/stores/classes/classStore";
import { useState } from "react";

export default function EditClassInformationModal({ classItem }) {
  const editClassInformation = useClassStore(
    (state) => state.editClassInformation
  );
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [classInfo, setClassInfo] = useState(classItem);

  const handleSubjectChange = (e) => {
    setClassInfo((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubjectCodeChange = (e) => {
    setClassInfo((prev) => ({ ...prev, subjectCode: e.target.value }));
  };

  const handleSectionChange = (e) => {
    setClassInfo((prev) => ({ ...prev, section: e.target.value }));
  };

  const handleScheduleChange = (e) => {
    setClassInfo((prev) => ({ ...prev, schedule: e.target.value }));
  };

  const handleEditClassInformation = () => {
    if (
      !classInfo.subject ||
      !classInfo.subjectCode ||
      !classInfo.section ||
      !classInfo.schedule
    ) {
      setError("Some fields are blank, please try again.");
      return;
    }
    const { subject, subjectCode, section, schedule } = classInfo;
    const editedClass = {
      subject,
      subjectCode,
      section,
      schedule,
      classSize: classItem.classSize,
      id: classItem.id,
    };

    editClassInformation(editedClass);
    setError("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-sm text-gray-600 hover:text-gray-700">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Class Information</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder={classItem.subject}
              className="col-span-3"
              value={classInfo.subject}
              onChange={handleSubjectChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject-code" className="text-right">
              Subject code
            </Label>
            <Input
              id="subject-code"
              placeholder={classItem.subjectCode}
              className="col-span-3"
              value={classInfo.subjectCode}
              onChange={handleSubjectCodeChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section" className="text-right">
              Section
            </Label>
            <Input
              id="section"
              placeholder={classItem.section}
              className="col-span-3"
              value={classInfo.section}
              onChange={handleSectionChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="schedule" className="text-right">
              Schedule
            </Label>
            <Input
              id="schedule"
              placeholder={classItem.schedule}
              className="col-span-3"
              value={classInfo.schedule}
              onChange={handleScheduleChange}
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-center font-light">{error}</p>
        )}

        <DialogFooter>
          <Button type="submit" onClick={handleEditClassInformation}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
