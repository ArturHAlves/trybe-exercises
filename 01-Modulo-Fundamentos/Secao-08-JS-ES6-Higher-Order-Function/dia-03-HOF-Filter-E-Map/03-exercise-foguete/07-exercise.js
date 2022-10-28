const books = require("./00-data.js");

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.


const authorWith3DotsOnName = () => {
  return books.filter( (book) => {
  return  book.author.name
  } ).find( (ache) =>{
    return ache
  } )
}

console.log(authorWith3DotsOnName());