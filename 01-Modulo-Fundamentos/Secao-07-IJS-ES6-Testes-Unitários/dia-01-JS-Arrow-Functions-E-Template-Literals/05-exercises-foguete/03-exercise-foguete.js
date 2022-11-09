// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).

// Dentro da função crie uma variável result, que será o retorno final da função.

// Crie a lógica para retornar o fatorial de N!.

// Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).

// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (numero) =>{
let result = 1;

  for(let index = numero; index > 0; index -= 1){
    result = result * index
  }
      return `${result}: É o fatorial resultado da função`
} 

console.log(fatorial(5));