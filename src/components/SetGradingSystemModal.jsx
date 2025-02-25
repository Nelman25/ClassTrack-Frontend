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
import { useEffect, useState } from "react";

export default function SetGradingSystemModal() {
  const weight = useGradesStore((state) => state.weight);
  const updateWeight = useGradesStore((state) => state.updateWeight);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [gradingSystem, setGradingSystem] = useState(weight);

  // NOTE: I feel like this is not the best solution for this. will fix
  //      if i think of another solution.. :D
  useEffect(() => {
    setGradingSystem(weight);
  }, [weight]);

  const handleChangeValue = (gradeType, value) => {
    setGradingSystem((prev) =>
      prev.map((p) =>
        p.gradeType === gradeType ? { ...p, percentage: Number(value) } : p
      )
    );
  };

  const handleUpdateWeight = () => {
    const totalPercentage = gradingSystem.reduce(
      (acc, item) => acc + Number(item.percentage),
      0
    );

    if (totalPercentage < 100) {
      setError(
        "The sum of the percentages should not be less than 100%. Please try again."
      );
      return;
    } else if (totalPercentage > 100) {
      setError("The sum of percentages is more than 100%. Please try again.");
      return;
    }
    updateWeight(gradingSystem);
    setError("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="" variant="outline">
          Set grading system
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modify grading system</DialogTitle>
          <DialogDescription>
            Modify the grading system for this course, set the percentage for
            each assessment. Total should be 100%
          </DialogDescription>
        </DialogHeader>
        {weight.map((w) => {
          const selectedType = gradingSystem.find(
            (g) => g.gradeType === w.gradeType
          );

          console.log(selectedType);
          return (
            <div
              key={w.gradeType}
              className="grid grid-cols-4 items-center gap-4"
            >
              <Label htmlFor={w.gradeType} className="text-right">
                {w.gradeType}
              </Label>
              <Input
                type="number"
                id={selectedType?.gradeType}
                placeholder={w.percentage}
                value={selectedType?.percentage}
                className="col-span-3"
                onChange={(e) => handleChangeValue(w.gradeType, e.target.value)}
              />
            </div>
          );
        })}

        {error && (
          <p className="text-red-500 text-center font-light">{error}</p>
        )}
        <DialogFooter>
          <Button type="submit" onClick={handleUpdateWeight}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
