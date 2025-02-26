export const calculateFinalGrade = (studentGrades, gradeTypes, weights) => {
  return (
    studentGrades
      .map((grade) => {
        const typeRef = gradeTypes.find((gt) => gt.type === grade.type);

        if (!typeRef) return 0;

        const gradeWeight =
          weights.find((w) => w.gradeType === typeRef.type)?.percentage / 100;
        const maxPossible =
          typeRef.assessments.reduce((sum, a) => sum + a.maxPoints, 0) || 1;
        const achieved = grade.scores.reduce(
          (sum, score) => sum + score.score,
          0
        );

        return (achieved / maxPossible) * gradeWeight;
      })
      .reduce((total, weightedGrade) => total + weightedGrade, 0) * 100
  );
};
