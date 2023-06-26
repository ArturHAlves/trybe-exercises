// src/database/migrations/01-create-users.ts

import { Model, QueryInterface, DataTypes } from 'sequelize'; 

import { User } from '../../types/User';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<User>>('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('users') 
  } 
};