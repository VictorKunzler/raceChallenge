'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Automobile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Automobile.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Automobile',
  });

  Automobile.beforeCreate(automobile => automobile.id = uuid());

  return Automobile;
};