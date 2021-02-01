'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Rule.init({
    description: DataTypes.STRING,
    points: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rule',
  });

  Rule.beforeCreate(rule => rule.id = uuid());

  return Rule;
};