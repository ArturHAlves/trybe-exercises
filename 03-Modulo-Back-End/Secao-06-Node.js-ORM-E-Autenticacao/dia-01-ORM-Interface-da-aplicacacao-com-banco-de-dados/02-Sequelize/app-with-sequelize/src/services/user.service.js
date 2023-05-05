// src/services/user.service.js

const { User } = require('../models');

/* Esta função usa o método findAll do Sequelize para buscar todas as linhas da tabela Users
Equivale a fazer a query: SELECT * FROM Users */
const getAll = async () => {
  const users = await User.findAll();

  return users;
};

/* Esta função usa o método findByPk do Sequelize para buscar um usuário pelo id.
Equivale a fazer a query: SELECT * FROM Users WHERE id=? */
const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

/* Esta função usa o método findOne do Sequelize combinado 
com a chave where para buscar por id e email. 
Equivale a fazer a query: SELECT * FROM Users WHERE id=? AND email=? */
const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};


/* Esta função usa o método create do Sequelize para inserir um objeto na tabela Users
Equivale a fazer a query: INSERT INTO Users (full_name, email) VALUES (?, ?) */
const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });

  return newUser;
};

/* Esta função usa o método update do Sequelize para atualizar um objeto na tabela Users
Equivale a fazer a query: UPDATE Users SET full_name=?, email=? WHERE id=?*/
const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedUser); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updatedUser;
};


/* Esta função usa o método destroy do Sequelize para remover um objeto na tabela Users
Equivale a fazer a query: DELETE FROM Users WHERE id=?*/
const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
  return user;
};



module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};