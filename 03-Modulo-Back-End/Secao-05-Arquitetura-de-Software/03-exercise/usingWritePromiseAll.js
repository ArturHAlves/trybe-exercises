const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFilesPromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );
  await Promise.all(createFilesPromises);
  
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFilesPromises = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));
  const fileContent = await Promise.all(readFilesPromises);

  const newFileContent = fileContent.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent)
}

arrayToFile();