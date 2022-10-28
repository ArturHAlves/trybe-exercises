const books = require("./00-data.js");

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

// const ordernarLivrosVelhos = () => {
//   return books.filter((book) => {
//     let data = new Date();
//     let anoAtual = data.getFullYear();

//     if (anoAtual - book.releaseYear > 60) {
//       return book;
//     }
//   }).sort( (a,b) => a.releaseYear - b.releaseYear);
// };

//REFATORANDO

const ordernarLivrosVelhos = () =>
  books
    .filter((book) => {
      let data = new Date();
      let anoAtual = data.getFullYear();

      if (anoAtual - book.releaseYear > 60) {
        return book;
      }
    })
    .sort((a, b) => a.releaseYear - b.releaseYear);

console.log(ordernarLivrosVelhos());
