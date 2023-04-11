// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

async function removePerson () {

  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newArray = simpsons.filter((simpsons) => simpsons.id !== 6 && simpsons.id !== 10 );

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

}

removePerson();