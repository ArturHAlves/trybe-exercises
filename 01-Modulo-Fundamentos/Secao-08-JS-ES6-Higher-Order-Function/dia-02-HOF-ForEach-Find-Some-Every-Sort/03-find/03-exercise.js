// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ["João", "Irene", "Fernando", "Maria"];

// const findNameWithFiveLetters = (array) => {
//   return array.find((name) => {
//     if (name.length === 5) {
//       return name;
//     }
//   });
// };


// Versão fatorada

const findNameWithFiveLetters = (array) => array.find( (name) => name.length === 5);


console.log(findNameWithFiveLetters(names));
