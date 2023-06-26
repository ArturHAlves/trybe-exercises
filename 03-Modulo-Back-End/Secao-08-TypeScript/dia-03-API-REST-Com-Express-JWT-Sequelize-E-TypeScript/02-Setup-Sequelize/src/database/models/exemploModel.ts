import { DataTypes } from 'sequelize';
import db from './index';

const UserModel = db.define('User', { 
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;