// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.


// let fatorial = 10; 
// let resultado = 0; 

// if (fatorial > resultado) {
//   fatorial = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 
// }
// console.log(fatorial);


let fatorial = 1; 

for(let index = 10; index > 0; index -= 1){
  fatorial *= index
}
console.log(fatorial);