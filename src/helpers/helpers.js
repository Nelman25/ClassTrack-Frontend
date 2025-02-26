// export const calculateFinalGrade = (
//   studentNumber,
//   gradesData,
//   gradeTypes,
//   weight
// ) => {
//   const student = gradesData.find((s) => s.studentNumber === studentNumber);

//   // checks if the student is in the list
//   if (!student) {
//     return {
//       error: `Student with student number: ${studentNumber} not found.`,
//     };
//   }

//   const categoryGrades = {};
//   const categoryPercentage = {};

//   student.grades.forEach((gradeCategory) => {
//     const categoryType = gradeCategory.type; // kinukuha yung value ng type sa bawat object sa loob ng scores array
//     const categoryInfo = gradeTypes.find((gt) => gt.type === categoryType); // kinukuha yung general info sa grade types para maging basehan

//     if (!categoryInfo) return; // walang ganong category sa class record

//     let totalScore = 0;
//     let totalPossibleScore = 0;

//     gradeCategory.scores.forEach((score) => {
//       const assessment = categoryInfo.assessments.find(
//         (a) => a.id === score.assessmentId
//       );

//       if (assessment) {
//         totalScore += score.score;
//         totalPossibleScore += assessment.maxScore;
//       }

      
//     });
//   });
// };

// export const calculateFinalGrade = (gradyTypes, grades, ) => {
//   // PLANO: 
//   // - i-total yung scores ng student sa bawat category
//   // - kuhain yung max score para sa buong category (sum of max scores)
//   // - i-divide yung total score / max score para sa buong category
//   // - multiply yung sagot sa weight ng category 
//   // - kuhain sum ng sagot sa each field
//   // - display at final grade
  
//   // FUNCTIONS: 
//   // - 
// }
