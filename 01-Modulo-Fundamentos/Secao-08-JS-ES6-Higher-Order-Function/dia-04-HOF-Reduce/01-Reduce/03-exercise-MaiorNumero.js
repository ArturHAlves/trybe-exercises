
// CRIANDO COM FOR 

// const numbers = [50, 85, -30, 3, 15];

// let maiorNumero = 0;

// for(let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//   }
// }
// console.log(maiorNumero);


const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
