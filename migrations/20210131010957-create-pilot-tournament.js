'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PilotTournaments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      tournamentId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Tournaments'
          },
          key: 'id'
        }
      },
      pilotId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Pilots'
          },
          key: 'id'
        }
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      firstPlaces: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      secondPlaces: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      thirdPlaces: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PilotTournaments');
  }
};