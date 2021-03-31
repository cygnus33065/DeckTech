'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DeckCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deck_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Decks"}
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Cards"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DeckCards');
  }
};
