const fs = require('fs').promises;

async function main () {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Acrescentando "Vai dar tudo certo"');
    console.log('Arquivo escrito com Sucesso');

  } catch (error) {
    console.log(`Error ao escrever o arquivo ${error.message}`);
  }

}

main();