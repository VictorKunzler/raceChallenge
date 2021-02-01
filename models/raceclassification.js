'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class RaceClassification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  RaceClassification.init({
    raceId: DataTypes.STRING,
    pilotId: DataTypes.STRING,
    automobileId: DataTypes.STRING,
    finished: DataTypes.BOOLEAN,
    totalLaps: DataTypes.INTEGER,
    totalTime: DataTypes.INTEGER,
    bestLap: DataTypes.INTEGER,
    timeBestLap: DataTypes.INTEGER,
    diff: DataTypes.INTEGER,
    gap: DataTypes.INTEGER,
    startingGrid: DataTypes.INTEGER,
    averageVelocity: DataTypes.FLOAT,
    fasterLap: DataTypes.BOOLEAN,
    points: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    pole: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'RaceClassification',
  });

  RaceClassification.beforeCreate(raceClassification => raceClassification.id = uuid());

  return RaceClassification;
};