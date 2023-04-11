// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

async function addSimpsons () {

  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);

  simpsons.push({ id: '5', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}

addSimpsons();