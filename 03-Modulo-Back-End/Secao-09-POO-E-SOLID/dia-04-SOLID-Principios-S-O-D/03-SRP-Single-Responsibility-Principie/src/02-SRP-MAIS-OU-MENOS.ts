// // ./src/index.ts

// type Discipline = {
//   name: string;
//   grade: number;
//   letterGrade?: string;
// };

// type Student = {
//   name: string;
//   disciplines: Discipline[];
// };

// /* "Converter" */
// const percentageGradesIntoLetters = ({ name: studentName, disciplines }: Student):
//   { name: string, disciplines: Discipline[]} => ({
//   name: studentName,
//   disciplines: disciplines.map(({ name, grade }) => {
//     let letterGrade;

//     if (grade >= 0.9) letterGrade = 'A';
//     else if (grade >= 0.8) letterGrade = 'B';
//     else if (grade >= 0.7) letterGrade = 'C';
//     else if (grade >= 0.6) letterGrade = 'D';
//     else if (grade >= 0.1) letterGrade = 'E';
//     else letterGrade = 'F';

//     return { name, grade, letterGrade };
//   }),
// });

// /* "Determinar" */
// const approvedStudents = ({ disciplines }: Student): boolean =>
//   disciplines.every(
//     ({ grade }) => grade > 0.7,
//   );

// /* "Atualizar" */
// const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
//   console.log(`A pessoa com nome ${studentName} foi aprovada!`);

//   disciplines.map(({ name, letterGrade }) =>
//     console.log(`${name}: ${letterGrade}`));
// };

// function setApproved(students: Student[]): void {
//   students
//     .map(percentageGradesIntoLetters)
//     .filter(approvedStudents)
//     .map(updateApprovalData);
// }

// /*
//   Não se esqueça que é necessário exportar ao final as funções para que você
//   possa testá-las
// */
// export {
//   percentageGradesIntoLetters,
//   approvedStudents,
//   updateApprovalData,
//   setApproved,
// };