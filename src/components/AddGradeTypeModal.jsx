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

export default function AddGradeTypeModal() {
  const addNewGradeType = useGradesStore((state) => state.addNewGradeType);
  const addWeight = useGradesStore((state) => state.addWeight);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [newGradeType, setNewGradeType] = useState({
    newGradeType: "",
    initialAssessment: "",
    maxPoints: 0,
    weight: 0,
  });

  const handleNewGradeTypeChange = (e) => {
    setNewGradeType((prev) => ({ ...prev, newGradeType: e.target.value }));
  };

  const handleInitialAssessmentChange = (e) => {
    setNewGradeType((prev) => ({ ...prev, initialAssessment: e.target.value }));
  };

  const handleMaxPointsChange = (e) => {
    setNewGradeType((prev) => ({ ...prev, maxPoints: e.target.value }));
  };

  const handleWeightChange = (e) => {
    setNewGradeType((prev) => ({ ...prev, weight: e.target.value }));
  };

  const handleAddNewGradeType = () => {
    if (!newGradeType.newGradeType || !newGradeType.initialAssessment) {
      setError("Some fields are blank, please try again.");
      return;
    } else if (newGradeType.maxPoints === 0) {
      setError("Max point can't be 0, please try again.");
      return;
    }

    addNewGradeType(
      newGradeType.newGradeType,
      newGradeType.initialAssessment,
      newGradeType.maxPoints
    );
    addWeight(newGradeType.newGradeType, newGradeType.weight);

    setError("");
    setNewGradeType({ newGradeType: "", initialAssessment: "", maxPoints: 0 });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add new grade type</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Grade Category</DialogTitle>
          <DialogDescription>
            Define a category for grouping similar assessments (e.g., 'Quizzes',
            'Exams', 'Homework', or 'Class Participation')
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="grade-type" className="text-right">
              Category Name
            </Label>
            <Input
              id="grade-type"
              placeholder="Quizzes"
              value={newGradeType.newGradeType}
              onChange={handleNewGradeTypeChange}
              className="col-span-3"
            />
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <DialogTitle>Add Initial Assessments</DialogTitle>
          <DialogDescription>
            Create specific assessment items under this category. (e.g., For
            'Quizzes', add entries like 'Midterm Quiz' or 'Final Exam'). You can
            add more later.
          </DialogDescription>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="assessment-name" className="text-right">
              Assessment Name
            </Label>
            <Input
              id="assessment-name"
              placeholder="Quiz 1"
              value={newGradeType.initialAssessment}
              onChange={handleInitialAssessmentChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="max-points" className="text-right">
              Max points
            </Label>
            <Input
              type="number"
              id="max-points"
              placeholder="100"
              value={newGradeType.maxPoints}
              onChange={handleMaxPointsChange}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogTitle>Assign weight to this grade type</DialogTitle>
        <DialogDescription>
          Enter the percentage value that this grade type contributes to the
          overall grade.
        </DialogDescription>
        <div className="grid gap-2 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="percentage" className="text-right">
              Percentage
            </Label>
            <Input
              id="percentage"
              placeholder="10%"
              value={0}
              onChange={handleWeightChange}
              className="col-span-3"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-center font-light">{error}</p>
        )}

        <DialogFooter>
          <Button type="submit" onClick={handleAddNewGradeType}>
            Add grade type
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
