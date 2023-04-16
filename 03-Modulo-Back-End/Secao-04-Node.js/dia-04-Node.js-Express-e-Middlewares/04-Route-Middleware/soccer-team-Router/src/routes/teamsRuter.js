// src/routes/teamsRouter.js

const express = require('express');
// os requires são relativos ao arquivo, então o path muda ligeiramente
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');

// cria um router middleware
const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// o path é relativo à rota em que o router foi montado (2)
router.get('/', (req, res) => res.json(teams));

// configurações globais afetam apenas este router (3)
router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

router.post('/', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(200).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;