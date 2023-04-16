// src/app.js

const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const morgan = require('morgan');

const { validateTeams } = require('./middlewares/validateTeams');
const { existingId } = require('./middlewares/existingId');

const app = express();
app.use(morgan('dev'));

const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  res.json(teams);
});

app.use(apiCredentials);
app.post('/teams', validateTeams, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeams, (req, res) => {
  const id = Number(req.params.id);

  const index = teams.indexOf(id);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);

  const index = teams.indexOf(id);
  teams.splice(index, 1);

  return res.sendStatus(204);
});

module.exports = app;
