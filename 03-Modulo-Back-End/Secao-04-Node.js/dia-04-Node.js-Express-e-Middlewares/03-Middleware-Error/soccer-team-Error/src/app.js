// src/app.js
const express = require('express');

const fs = require('fs').promises;

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/teams', async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../teams.json'));
    const teams = JSON.parse(data);
    return res.status(200).json({ teams });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}`));
