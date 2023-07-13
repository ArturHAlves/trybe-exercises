// // ./src/index.ts

// //...

// type School = {
//   name: string;
//   approvalGrade: number;
// };

// type Student = {
//   name: string;
//   disciplines: Discipline[];
//   school: School; // Agora não é mais uma string
// };

// const approvedStudents = ({ disciplines, school }: Student): boolean =>
//   disciplines.every(({ grade }) => grade >= school.approvalGrade);

// // Para testar:
// const studentsExample = [
//   {
//     name: 'Lee',
//     school: { name: 'Standard', approvalGrade: 0.7 },
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
//   {
//     name: 'Albus',
//     school: { name: 'Hogwarts', approvalGrade: 0.8 },
//     disciplines: [
//       { name: 'divination', grade: 0.8 },
//       { name: 'potions', grade: 0.9 },
//     ],
//   },
// ];

// // setApproved(studentsExample);

// Observe que, agora, a nossa função approvedStudents está totalmente genérica. Quando quisermos acrescentar mais uma escola, duas ou até cem, basta adicionar os dados dela à nossa “base”.