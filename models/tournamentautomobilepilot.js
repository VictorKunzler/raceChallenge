'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class TournamentAutomobilePilot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TournamentAutomobilePilot.init({
    tournamentId: DataTypes.STRING,
    automobileId: DataTypes.STRING,
    pilotId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TournamentAutomobilePilot',
  });

  TournamentAutomobilePilot.beforeCreate(tournamentTournamentPilot => tournamentTournamentPilot.id = uuid());

  return TournamentAutomobilePilot;
};