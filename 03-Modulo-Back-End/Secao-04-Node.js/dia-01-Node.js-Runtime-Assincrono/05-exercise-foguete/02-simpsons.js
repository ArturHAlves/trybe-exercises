// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const fs = require('fs').promises;

async function findPerson (idPerson) {

  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const findSimpsons = simpsons.find((simpsons) => Number(simpsons.id) === idPerson )
    
    if (!findSimpsons) {
      throw new Error('id não encontrado')
    }

    return findSimpsons;

  } catch (error) {
    console.log(`Error: ${error.message} `);
  }

}

async function main () {
  const simpson = await findPerson(2);
  console.log(simpson);

}

main();
