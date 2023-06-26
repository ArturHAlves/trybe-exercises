// src/database/seeders/01-users.ts

import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1@banco.com',
        password: 'chang3m3',
        name: 'User 1',
      },
      {
        email: 'user2@banco.com',
        password: 'chang3m3',
        name: 'User 2',
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};