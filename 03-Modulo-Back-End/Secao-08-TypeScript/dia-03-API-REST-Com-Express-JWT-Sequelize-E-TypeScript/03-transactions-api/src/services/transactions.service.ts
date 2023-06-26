// src/services/transactions.service.ts

import TransactionModel, {
  TransactionInputtableFields,
  TransactionSequelizeModel,
} from '../database/models/transaction.model';

import { Transaction } from '../types/Transaction';
import { ServiceResponse } from '../types/ServiceResponse';

/* Esta função será responsável por retornar a mensagem de erro certa para cada campo, ou retornar "nulo" caso todos os campos sejam válidos! */
function validateParams({
  name,
  price,
  type,
  userId,
}: TransactionInputtableFields): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!type) return 'Type is required';
  if (!userId) return 'userId is required';

  return null;
}

async function create(
  transaction: TransactionInputtableFields,
): Promise<ServiceResponse<Transaction>> {
  // Graças à todo trabalho de tipagem que fizemos no model, essa função `.create()` já embute várias seguranças de tipo pra gente!

  /* Definimos a variável que receberá o valor da resposta do service
  usando o mesmo tipo envelopado na Promise retornada! */
  let responseService: ServiceResponse<Transaction>;

  const error = validateParams(transaction);

  // Se existir um error, vai retornar o devido status e a message de erro
  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  /* Se o objeto for válido, ele será cadastrado no banco! */
  const newTransaction = await TransactionModel.create(transaction);

  // Aqui acessamos o atributo dataValues do tipo Model, do TypeScript, que retornará um objeto do tipo Transaction
  responseService = { status: 'SUCCESSFUL', data: newTransaction.dataValues };

  return responseService;
}

// Listagem de Transações

// Lembrando que nosso TransactionSequelizeModel é só para abreviar a escrita do tipo que o Sequelize precisa, o Model<Transaction, TransactionInputtableFields>. Retornamos ele na função abaixo porque é isso que ela retornará - uma lista de entidades do sequelize para o controller entregar a quem pediu a requisição.

async function list(): Promise<ServiceResponse<TransactionSequelizeModel[]>> {
  const transaction = await TransactionModel.findAll();

  return { status: 'SUCCESSFUL', data: transaction };
}

// Listagem de Transação pelo Id

async function findById(id: number): Promise<ServiceResponse<Transaction>> {
  const transaction = await TransactionModel.findByPk(id);

  let responseService: ServiceResponse<Transaction>;
  
  if (!transaction) {
    responseService = { status: 'NOT_FOUND', data: { message: 'Transaction not found' } };
    return responseService;
  }

  responseService = { status: 'SUCCESSFUL', data: transaction.dataValues };

  return responseService;
}

export default {
  create,
  list,
  findById,
};
