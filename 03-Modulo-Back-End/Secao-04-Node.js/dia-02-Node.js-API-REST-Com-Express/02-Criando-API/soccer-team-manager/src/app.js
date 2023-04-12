const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (_req, res) => res.status(200).json({ message: 'Olá mundo!' }));

app.get('/teams', (_req, res) => res.status(200).json({ teams }));

// Método de enviar e criar um novo time 
app.post('/teams', (req, res) => {
  const newTeams = { ...req.body };
  teams.push(newTeams);

  res.status(201).json({ teams: newTeams });
});

// Método de editar novo time 
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeams = teams.find((team) => team.id === Number(id));

  if (!updateTeams) {
    res.status(404).json({ message: 'Não foi encontrado' });
  }

  updateTeams.name = name;
  updateTeams.initials = initials;
  res.status(200).json({ updateTeams });
});

// Método para remover time por id 
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPOsition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPOsition, 1);

  res.status(200).end();
});

module.exports = app;