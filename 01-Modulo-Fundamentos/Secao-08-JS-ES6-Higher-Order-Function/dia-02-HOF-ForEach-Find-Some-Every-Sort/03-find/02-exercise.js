const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (array) => {
//   // Adiciona seu código aqui
//   return array.find( (number) =>{
//     if (number % 3 === 0 && number % 5 === 0) {
//       return 'Ele é divisivel por 3'
//     }
//   } )

// };

//Refator

const findDivisibleBy3And5 = (array) =>  array.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5(numbers));
