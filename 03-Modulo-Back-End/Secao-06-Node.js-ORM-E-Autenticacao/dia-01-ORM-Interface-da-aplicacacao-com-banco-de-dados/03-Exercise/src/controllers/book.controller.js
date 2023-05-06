const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim boy' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.getById(id);
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu mais ruim ainda' });
  }
};

const insertBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.insertBook({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu BO' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const books = await BookService.editBook(id, {
      title,
      author,
      pageQuantity,
    });

    if (!books) return res.status(404).json({ message: 'Book not found' });

    return res.status(201).json({ message: 'Book update' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;

    const books = await BookService.deleteBook(id);

    if (!books) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book remove' });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'deu ruim' });
  }
};

module.exports = { getAll, getById, insertBook, updateBook, removeBook };
