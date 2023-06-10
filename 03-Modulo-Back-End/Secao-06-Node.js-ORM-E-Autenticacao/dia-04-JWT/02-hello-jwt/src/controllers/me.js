// src/controllers/me.js

module.exports = (req, res) => {
  /* Se chegamos até aqui, quer dizer que o middleware de autenticação */
  /* foi executado, e adicionou as informações do token no objeto `req`. */
  /* Podemos, então, extrair as propriedades que queremos de `req.user` */
  const { username, admin } = req.user;

  /* Por fim, retornamos as informações */
  res.status(200).json({ username, admin });
};