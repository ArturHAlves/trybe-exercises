const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bookController = require('./src/controllers/book.controller');

app.use(express.json());

app.get('/books', bookController.getAll);

app.get('/books/:id', bookController.getById);

app.post('/books', bookController.insertBook);

app.put('/books/:id', bookController.updateBook);

app.delete('books/:id', bookController.removeBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
