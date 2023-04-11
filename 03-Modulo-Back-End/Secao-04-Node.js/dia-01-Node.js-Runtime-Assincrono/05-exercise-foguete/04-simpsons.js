// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const fs = require('fs').promises;

async function createSimpsonsFamily () {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const familyId = [1,2,3,4] 

  const simpsonsFamily = simpsons.filter((simpsons) => familyId.includes(Number(simpsons.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

}


async function main() {
  await createSimpsonsFamily();
  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}
main();