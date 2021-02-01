'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Pilot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Pilot.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pilot',
  });

  Pilot.beforeCreate(pilot => pilot.id = uuid());

  return Pilot;
};