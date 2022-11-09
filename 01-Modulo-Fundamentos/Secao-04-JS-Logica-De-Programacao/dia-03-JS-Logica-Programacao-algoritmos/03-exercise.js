// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let lista = ['java', 'javascript', 'python', 'html', 'css'];


let maiorPalavra = lista[0];
let menorPalavra = lista[0];
let contador = 0

for(let index = 0; index < lista.length; index +=1){
  if (lista[index].length > maiorPalavra.length) {
    maiorPalavra = lista[index];
    console.log(maiorPalavra);
  }
}

for(let index = 0; index < lista.length; index += 1){
if (lista[index].length < menorPalavra.length) {
  menorPalavra = lista[index]
  console.log(menorPalavra);
}
}