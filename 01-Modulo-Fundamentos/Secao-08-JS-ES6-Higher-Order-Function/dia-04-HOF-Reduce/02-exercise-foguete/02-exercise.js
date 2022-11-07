const books = require("./00-dataBase");

//Crie uma string com os nomes de todas as pessoas autoras.

const nomesAutores = () => {
  return books.reduce( (acc, curr) => {
    return `${acc} ${curr.author.name} ` + ', '
  }, '' )
    
};

console.log(nomesAutores());
