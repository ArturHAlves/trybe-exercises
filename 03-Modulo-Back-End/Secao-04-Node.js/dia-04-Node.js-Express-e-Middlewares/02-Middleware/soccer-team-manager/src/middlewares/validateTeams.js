const validateTeams = (req, res, next) => {
  const { nome, sigla } = req.body; 

  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório' });
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });

  next();
};

module.exports = { validateTeams };
