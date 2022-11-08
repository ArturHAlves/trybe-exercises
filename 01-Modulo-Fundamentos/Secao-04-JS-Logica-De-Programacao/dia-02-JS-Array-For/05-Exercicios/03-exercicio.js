// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  media = soma / numbers.length;
}
console.log(media);
