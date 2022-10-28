const books = require("./00-data.js");

// id: 1,
// name: 'As Crônicas de Gelo e Fogo',
// genre: 'Fantasia',
// author: {
//   name: 'George R. R. Martin',
//   birthYear: 1948,
// },
// releaseYear: 1991,
// },



// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.


// const genreFantasyAndFiction = () => {
// return books.filter( (book) => {
//   if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
//     return book
//   }
// } )
// }

//REFATORANDO 
 
const genreFantasyAndFiction = () => books.
filter( (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica' )  


console.log(genreFantasyAndFiction());