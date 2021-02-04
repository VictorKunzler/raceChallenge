'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Race.init({
    tournamentId: DataTypes.STRING,
    date: DataTypes.STRING,
    laps: DataTypes.INTEGER,
    winner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Race',
  });

  Race.beforeCreate(race => race.id = uuid());

  return Race;
};