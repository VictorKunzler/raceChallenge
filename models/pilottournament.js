'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class PilotTournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  PilotTournament.init({
    pilotId: DataTypes.STRING,
    tournamentId: DataTypes.STRING,
    points: DataTypes.INTEGER,
    firstPlaces: DataTypes.INTEGER,
    secondPlaces: DataTypes.INTEGER,
    thirdPlaces: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PilotTournament',
  });

  PilotTournament.beforeCreate(pilotTournament => pilotTournament.id = uuid());

  return PilotTournament;
};