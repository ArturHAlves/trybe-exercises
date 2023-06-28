// src/database/seeders/01-users.ts

import { QueryInterface } from 'sequelize';

const bcrypt = require('bcryptjs');

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10


export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1@banco.com',
        password: bcrypt.hashSync('chang3m3', SALT_ROUNDS),
        name: 'User 1',
      },
      {
        email: 'user2@banco.com',
        password: bcrypt.hashSync('chang3m3', SALT_ROUNDS),
        name: 'User 2',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};