// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.


const fs = require('fs').promises;

async function readFile () {
  
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const string = simpsons.map(({ id, name }) => `${id} - ${name}`);
    string.forEach((string) => console.log(string));

  } catch (error) {
    console.log(`Error ao ler o arquivo: ${error.message}`);
  }

}

readFile();