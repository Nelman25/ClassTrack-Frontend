/* eslint-disable react/no-unescaped-entities */
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
import { useGradesStore } from "@/stores/grades/gradesStore";
import { useState } from "react";

export default function AddAssessmentModal({ type }) {
  const addNewAssessment = useGradesStore((state) => state.addNewAssessment);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [newAssessment, setNewAssessment] = useState({
    assessmentName: "",
    maxScore: 0,
  });

  const handleAssessmentNameChange = (e) => {
    setNewAssessment((prev) => ({ ...prev, assessmentName: e.target.value }));
  };

  const handleMaxScoreChange = (e) => {
    setNewAssessment((prev) => ({ ...prev, maxScore: Number(e.target.value) }));
  };

  const handleAddNewAssessment = () => {
    if (!newAssessment.assessmentName || !newAssessment.maxScore) {
      setError("Some fields are blank, please try again.");
    } else if (newAssessment.maxScore <= 0) {
      setError("Max score should not be less than or equal to 0.");
    }

    addNewAssessment(
      type,
      newAssessment.assessmentName,
      newAssessment.maxScore
    );
    setError("");
    setNewAssessment((prev) => ({ ...prev, assessmentName: "", maxScore: 0 }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-xl text-white ml-4 bg-blue-500/50 hover:bg-blue-600/50 px-3 rounded-lg shadow"
          variant="default"
        >
          +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new {type}</DialogTitle>
          <DialogDescription>
            Give your assessment a name (e.g., `Quiz 1` for Quizzes, `Assignment
            1` for Assignments). You can chose the name as long as it is related
            to its group.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assessment-name" className="text-right">
              Assessment Name
            </Label>
            <Input
              id="assessment-name"
              placeholder="Quiz 1"
              className="col-span-3"
              value={newAssessment.assessmentName}
              onChange={handleAssessmentNameChange}
            />
          </div>
        </div>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assessment-name" className="text-right">
              Max score
            </Label>
            <Input
              type="number"
              id="max-score"
              placeholder="100"
              className="col-span-3"
              value={newAssessment.maxScore}
              onChange={handleMaxScoreChange}
            />
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-center font-light">{error}</p>
        )}
        <DialogFooter>
          <Button type="submit" onClick={handleAddNewAssessment}>
            Add {type}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
