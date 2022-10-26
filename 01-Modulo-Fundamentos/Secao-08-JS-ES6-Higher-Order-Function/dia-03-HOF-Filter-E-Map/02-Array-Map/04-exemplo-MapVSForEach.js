//Qual a diferença, afinal, de map para forEach? São duas principais:

//A função map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

// A função forEach não tem tal restrição. Ela pode modificar o array original e retornar nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.

//Em caso de dúvidas, pense neste exemplo:

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
