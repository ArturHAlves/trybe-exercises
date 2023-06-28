// src/database/models/transaction.model.ts

import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Transaction } from '../../types/Transaction';

export type TransactionInputtableFields = Optional<Transaction, 'id'>;

type TransactionSequelizeModelCreator = ModelDefined<Transaction, TransactionInputtableFields>;

export type TransactionSequelizeModel = Model<Transaction, TransactionInputtableFields>;

const TransactionModel: TransactionSequelizeModelCreator = db.define('Transaction', { 
  name: DataTypes.STRING(30),
  price: DataTypes.DECIMAL(10, 2),
  type: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  tableName: 'transactions',
  timestamps: false,
  underscored: true,
});

export default TransactionModel;