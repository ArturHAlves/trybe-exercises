const books = require("./00-data.js");

// {
//   id: 6,
//   name: 'O Chamado de Cthulhu',
//   genre: 'Terror',
//   author: {
//     name: 'H. P. Lovecraft',
//     birthYear: 1890,
//   },
//   releaseYear: 1928,
// },

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const livrosMuitoVelhos = () => {
//   return books
//     .map((book) => {
//       let data = new Date();
//       let anoAtual = data.getFullYear();
//       if (anoAtual - book.releaseYear > 60) {
//         return book.name;
//       }
//     })
//     .filter((filtrarLivros) => {
//       return filtrarLivros;
//     });
// };

// REFATORAR

const livrosMuitoVelhos = () =>
  books
    .map((book) => {
      let data = new Date();
      let anoAtual = data.getFullYear();
      if (anoAtual - book.releaseYear > 60) {
        return book.name;
      }
    })
    .filter((filtrarLivros) => filtrarLivros);

console.log(livrosMuitoVelhos());
