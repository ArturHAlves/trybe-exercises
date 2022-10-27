const books = require("./00-data.js");
const data = require("./00-data.js");

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

// {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// },

const nameAndAge = () => {
  return books
    .map((book) => ({
      age: `${book.releaseYear - book.author.birthYear}`,
      author: `${book.author.name}`,
    }))
    .sort((a, b) => a.age - b.age);
};

console.log(nameAndAge());
