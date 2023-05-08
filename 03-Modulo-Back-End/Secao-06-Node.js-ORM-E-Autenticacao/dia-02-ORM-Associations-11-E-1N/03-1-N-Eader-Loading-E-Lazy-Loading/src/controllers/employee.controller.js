// src/controllers/employee.controller.js

const EmployeeService = require('../services/employee.service');

// LAZY LOADING 
const AddressService = require('../services/address.service');


const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

// EAGER LOADING = ANTECIPADO 

// const getById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await EmployeeService.getById(id);

//     if (!employee) {
//       return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
//     }

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// }


// LAZY LOADING - tardio

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeeService.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Pessoa colaboradora não encontrada' });
    }

    if (req.query.includeAddresses === 'true') {
      const addresses = await AddressService.getAllByEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

module.exports = {
  getAll, getById
};