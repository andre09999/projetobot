'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SendMessage extends Model {
    static associate(models) {

    }
  }

  SendMessage.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SendMessage',
    underscored: true,
  });

  return SendMessage;
};