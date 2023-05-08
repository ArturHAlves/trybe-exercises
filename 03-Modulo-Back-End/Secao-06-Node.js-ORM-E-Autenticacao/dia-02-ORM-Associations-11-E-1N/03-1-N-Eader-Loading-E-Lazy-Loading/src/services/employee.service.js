// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};


// EAGER LOADING - ANTECIPADO 

// o include vai incluir o relacionemento no caso 1:N
// exclude vai excluir uma coluna da requisição

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//     where: { id },
//     include: [
//       { model: Address, as: 'addresses', attributes: { exclude: ['number'] } },
//     ],
//   });
//   return employee;
// };



// LAZY LOADING

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}


module.exports = { getAll, getById };
