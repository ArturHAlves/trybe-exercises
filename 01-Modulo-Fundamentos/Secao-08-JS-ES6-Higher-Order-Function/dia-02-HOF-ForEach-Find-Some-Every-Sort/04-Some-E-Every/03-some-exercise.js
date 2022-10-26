// Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

// const hasName = (arr, name) => {
//   //Adicione seu código aqui
//   const result = arr.some((element) => {
//     return element === name;
//   });

//   return result;
// };

// Refatorando 

const hasName = (arr, name) => arr.some( (element) => element === name )  


console.log(hasName(names, "Ana"));
