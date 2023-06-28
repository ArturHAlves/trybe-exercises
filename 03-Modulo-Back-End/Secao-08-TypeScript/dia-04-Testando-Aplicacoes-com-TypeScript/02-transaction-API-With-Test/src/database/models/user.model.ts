// src/database/models/user.model.ts

import { Model, Optional, ModelDefined, DataTypes } from 'sequelize';

import db from './index';

import { User } from '../../types/User';

export type UserInputtableFields = Optional<User, 'id'>;

type UserWithOptionalId = {
  // Id = number | undefined
  id?: number,
  email: string,
  password: string,
  name: string,
};

type UserSequelizeModelCreator = ModelDefined<User, UserWithOptionalId>;

export type UserSequelizeModel = Model<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;