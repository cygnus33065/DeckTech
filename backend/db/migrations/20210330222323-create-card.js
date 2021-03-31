'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      mana_value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      commander: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      gatherer: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      color_identity: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      type: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
      },
      isLegal: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    return queryInterface.dropTable('Cards');
  }
};
