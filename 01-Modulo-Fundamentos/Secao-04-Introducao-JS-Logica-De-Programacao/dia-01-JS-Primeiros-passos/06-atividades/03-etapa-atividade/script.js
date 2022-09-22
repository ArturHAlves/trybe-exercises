// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const numero1 = 15;
const numero2 = 10;
const numero3 = 11;

if (numero1 > numero2 && numero1 > numero3) {
  console.log("Número1 é maior");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log("Número2 é maior");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log("Numero3 é maior");
} else {
  console.log("Os números são iguais!");
}
