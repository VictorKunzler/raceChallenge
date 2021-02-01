'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RaceClassifications', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      raceId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Races'
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
      automobileId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Automobiles'
          },
          key: 'id'
        }
      },
      finished: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      totalLaps: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bestLap: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      timeBestLap: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      diff: {
        type: Sequelize.INTEGER
      },
      gap: {
        type: Sequelize.INTEGER
      },
      startingGrid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      averageVelocity: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      fasterLap: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      position: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pole: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('RaceClassifications');
  }
};