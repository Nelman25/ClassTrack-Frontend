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

export default function CreateClassModal() {
  const addNewClass = useClassStore((state) => state.addNewClass);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [classInfo, setClassInfo] = useState({
    subject: "",
    subjectCode: "",
    section: "",
    schedule: "",
  });

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

  const handleCreateClass = () => {
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
    const newClass = {
      subject,
      subjectCode,
      section,
      schedule,
      classSize: 0,
      id: Math.random(),
    };

    addNewClass(newClass);
    setError("");
    setClassInfo(() => ({
      subject: "",
      subjectCode: "",
      section: "",
      schedule: "",
    }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          variant="default"
        >
          Create class
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new class</DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="subject" className="text-right">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Information Management"
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
              placeholder="CTINFMGL"
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
              placeholder="COM231"
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
              placeholder="Tuesday 11:00am - 3:00pm | Friday 11:00AM - 01:40PM"
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
          <Button type="submit" onClick={handleCreateClass}>
            Create class
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
