const fs = require('fs').promises;
// const fs = require('fs').promises;
const { join } = require('path');
// const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const content = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();

  const find = cacauTrybe.chocolates.find((element) => element.id === id);

  return find;
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

module.exports = { getAllChocolates, getChocolateById, getChocolatesByBrand };
