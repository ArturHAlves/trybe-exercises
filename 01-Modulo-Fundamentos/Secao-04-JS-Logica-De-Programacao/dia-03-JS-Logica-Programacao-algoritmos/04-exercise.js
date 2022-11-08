// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5;
let linha = "";
let simbolo = "*";


for(let index = 0; index < n; index += 1){
  linha += simbolo
}

for(let index = 0; index < n; index += 1){
  console.log(linha);
}