const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pares = (number) => {
  return number % 2 === 0; 
}

const sumNumber = (acc, curr ) => acc + curr;

const sumNumbers = (arr) => {
 return arr.filter(pares).reduce(sumNumber)
}

console.log(sumNumbers(numbers));