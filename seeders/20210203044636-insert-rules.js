'use strict';
const { v4: uuid } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rules', [
      {
        id: uuid(),
        description: 'First place',
        points: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Second place',
        points: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Third place',
        points: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Fourth place',
        points: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Fifth place',
        points: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Sixth place',
        points: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'After sixth place',
        points: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Pole position',
        points: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        description: 'Best lap',
        points: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
