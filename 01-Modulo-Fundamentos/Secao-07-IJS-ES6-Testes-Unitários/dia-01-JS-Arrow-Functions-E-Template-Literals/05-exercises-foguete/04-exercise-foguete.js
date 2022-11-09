// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

const encontrarMaiorPalavra = (frase) => {
let palavra = frase.split(' ');
let maiorPalavra = palavra[0]

for(let index = 1; index < palavra.length; index += 1){
  if (palavra[index].length > maiorPalavra.length) {
    maiorPalavra = palavra[index]
  }
  
}
return maiorPalavra
}

console.log(encontrarMaiorPalavra('Lucas bugalu'));