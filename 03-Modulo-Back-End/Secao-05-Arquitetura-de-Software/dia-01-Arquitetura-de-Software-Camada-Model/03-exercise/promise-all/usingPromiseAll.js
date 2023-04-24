// usingPromiseAll.js

const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`)
    }) 
    await Promise.all(promises);
    console.log(`That's all folks!`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

async function getFilesSizeSum() {
  try {
    let filesSizeSum = 0
    await Promise.all(files.map(async (file) => {
      contentFile = await fs.readFile(file);
      filesSizeSum = filesSizeSum + contentFile;
    }));
    result = `Lidos 3 arquivos totalizando ${filesSizeSum} bytes`;
    return console.log(result);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

getFilesSizeSum()