// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function retornarMaiorNumero() {
  const numero1 = 2;
  const numero2 = 2;
  const numero3 = 2;

  if (numero1 > numero2 && numero1 > numero3) {
    return "O" + numero1 + " é o maior número";
  } else if (numero2 > numero1 && numero2 > numero3) {
    return "O " + numero2 + " é o maior número";
  } else if (numero3 > numero1 && numero3 > numero2) {
    return "O " + numero3 + " é o maior número";
  } else {
    return "Os números são iguais";
  }
}
console.log(retornarMaiorNumero());
