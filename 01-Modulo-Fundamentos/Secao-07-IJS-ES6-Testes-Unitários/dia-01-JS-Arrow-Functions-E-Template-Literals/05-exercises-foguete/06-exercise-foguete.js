// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

const { log } = require("console");
const { NONAME } = require("dns");

// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const substituaX = (nome) => {
  const frase = "Tryber x aqui!";
  let palavraTrocada = frase.split(" ");

  for (let index = 0; index < palavraTrocada.length; index += 1) {
    if (palavraTrocada[index].length === palavraTrocada[1].length) {
      palavraTrocada[1] = nome;
    }
  }

  return palavraTrocada.join(" ");
};

// console.log(substituaX('Artur'));

const minhasSkills = (funcao) => {
  const skills = ["JS ", "Git ", "HTML"];
  let frase = funcao;

  return `${frase} 
Minhas três habilidades são:
${skills}`;
};

console.log(minhasSkills(substituaX("Artur")));
