const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);
  return books;
};

const insertBook = async (title, author, pageQuantity) => {
  const books = await Book.create({ title, author, pageQuantity });
  return books;
};

const editBook = async (id, title, author, pageQuantity) => {
  const [books] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );
  return books;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

module.exports = { getAll, getById, insertBook, editBook, deleteBook };
