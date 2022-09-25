// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let novaArray = [];

for (let index = 1; index <= 25; index += 1) {
  novaArray.push([index]);
}
for (let index = 0; index < novaArray.length; index += 1) {
  console.log(novaArray[index] / 2);
}
