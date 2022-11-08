// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const numero1 = 2;
const numero2 = 2;
const numero3 = 2; 

let impar = true; 

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0){
  console.log(impar)
}

else{
  console.log("É par")
}