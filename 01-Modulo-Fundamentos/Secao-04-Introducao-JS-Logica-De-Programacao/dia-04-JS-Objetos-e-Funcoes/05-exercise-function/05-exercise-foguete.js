// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

function receberMaiorPalavra(arrayNomes) {
  let maiorPalavra = arrayNomes[0];

  for (let index in arrayNomes) {
    // console.log(arrayNomes[index].length);
    if (maiorPalavra.length < arrayNomes[index].length) {
      maiorPalavra = arrayNomes[index];
    }
  }
  return maiorPalavra;
}
console.log(
  receberMaiorPalavra(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
