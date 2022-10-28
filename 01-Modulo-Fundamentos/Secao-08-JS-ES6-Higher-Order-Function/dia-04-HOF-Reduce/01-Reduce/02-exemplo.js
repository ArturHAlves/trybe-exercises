
// Normalmente criariamos isso para somar todos os valores dentro da array 

// const numbers = [1, 32, 44, 2, 3];
// let sumNumbers = 30;
// // A variável `sumNumbers` tem um valor inicial de 30 e vai acumulando, a cada iteração do for, o resultado da operação feita em seu escopo!
// for (let index = 0; index < numbers.length; index += 1) {
//   sumNumbers += numbers[index];
// }
// console.log(sumNumbers); // 112

const numbers = [1, 32, 44, 2, 3];
const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 107 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3
  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
  // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.