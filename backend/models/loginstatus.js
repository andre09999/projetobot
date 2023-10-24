'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoginStatus extends Model {
    static associate(models) {
      // Defina as associações aqui, se houver alguma
    }
  }
  LoginStatus.init(
    {
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'LoginStatuses',
    }
  );
  return LoginStatus;
};
