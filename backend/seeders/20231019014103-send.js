'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SendMessages', [
      {
        id: '',
        message: ''
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Se precisar reverter a ação, insira o código aqui
    // Por exemplo, para excluir os registros inseridos acima:
    // return queryInterface.bulkDelete('Tabela', null, {});
  }
};
