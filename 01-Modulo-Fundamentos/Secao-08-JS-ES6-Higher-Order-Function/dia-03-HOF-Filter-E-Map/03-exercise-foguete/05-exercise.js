const books = require("./00-data.js");


// const autoresFantasiaEFiccao = () => {
//   return books
//     .map((book) => {
  //       if (book.genre === "Fantasia" || book.genre === "Ficção Científica") {
    //         return `${book.author.name}`;
//       }
//     })
//     .filter((filtrarAutores) => {
  //       return filtrarAutores;
  //     })
  //     .sort();
  // };
  

  
  //Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
  
//REFATORAR 

const autoresFantasiaEFiccao = () => books
    .map((book) => {
      if (book.genre === "Fantasia" || book.genre === "Ficção Científica") {
        return `${book.author.name}`;
      }
    })
    .filter((filtrarAutores) => filtrarAutores).sort();

console.log(autoresFantasiaEFiccao());
