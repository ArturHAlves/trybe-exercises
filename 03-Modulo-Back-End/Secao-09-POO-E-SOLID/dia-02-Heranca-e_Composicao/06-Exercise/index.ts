
import Person from './Person';


// ESTUDANTE

// import Student from './Student';
// const estudante1 = new Student('Artur', new Date('2001/01/12'));

// estudante1.examsGrades = [12,12,33,44]

// console.log(estudante1.generateEnrollment());




// TESTANDO INTERFACE 
// import Employee from './IEmployee';

// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),

//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//     return `FNC${randomStr}`;
//   },
// };

// console.log(testInterfaceEmployee);


// Subject 
// import Subject from './Subject';

// const subject1 = new Subject('Affdfdfd')
// console.log(subject1);


// Teacher
// Para testar!
// ./index.ts

import Subject from './Subject';
import Teacher from './Teacher';

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;

