'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Mentes Bostas, o inmigo vive ao lado',
        author: 'Artur Henr',
        pageQuantity: 666,
        createdAt: '2023-09-01T00:00:00',
        updateAt: '2023-09-01T00:00:00',
      },
      {
        title: 'Meu namorado é filosofo',
        author: 'Lucas Reis',
        pageQuantity: 777,
        createdAt: '2023-09-01T00:00:00',
        updateAt: '2023-09-01T00:00:00',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
