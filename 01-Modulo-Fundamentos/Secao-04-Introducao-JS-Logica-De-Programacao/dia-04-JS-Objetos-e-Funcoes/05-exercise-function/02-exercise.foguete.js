// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function recebaArrayInteiros(numerosInteiros) {
  let maiorValorIndice = 0;

  for (let index in numerosInteiros) {
    // console.log(numerosInteiros[maiorValorIndice]);

    if (numerosInteiros[maiorValorIndice] < numerosInteiros[index]) {
      maiorValorIndice = index;
    }
  }

  return maiorValorIndice;
}
console.log(recebaArrayInteiros([1, 3, 6, 50, 10, 30]));

