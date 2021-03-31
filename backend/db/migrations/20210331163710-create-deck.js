'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      commander_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Cards"}
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"}
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
    return queryInterface.dropTable('Decks');
  }
};
