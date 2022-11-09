// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function receberArrayMenorValor(arrayInteiro) {
  let menorIndice = 0;

  for (let index in arrayInteiro) {
    if (arrayInteiro[menorIndice] > arrayInteiro[index]) {
      menorIndice = index;
    }
  }
  return menorIndice;
}

console.log(receberArrayMenorValor([2, 4, 6, 7, 10, 0, -3]));
