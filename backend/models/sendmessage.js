'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class send_messages extends Model {
    static associate(models) {

    }
  }

  send_messages.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'send_messages',
    underscored: true,
  });

  return send_messages;
};
