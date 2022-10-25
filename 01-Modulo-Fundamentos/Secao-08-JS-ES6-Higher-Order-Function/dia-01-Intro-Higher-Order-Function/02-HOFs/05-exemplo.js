
// NÃO É HOF
// const double = (Number) => {
//   return Number * 10
// }

// console.log(double(2));

// É UMA HOFF
// const getMultiplier = (multiplier) => {
//   return function (number) {
//     return number - multiplier
//   }
// } return -1 

const getMultiplier = (multiplier) => aNumber => aNumber * multiplier;


const triple = getMultiplier(3)
const double = getMultiplier(2);

console.log(double(1));


