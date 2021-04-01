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
      art_url: {
        type: Sequelize.STRING(256)
      },
      mana_value: {
        type: Sequelize.INTEGER
      },
      gatherer: {
        type: Sequelize.STRING(100)
      },
      color_identity: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      type: {
        type: Sequelize.STRING
      },
      isLegal: {
        type: Sequelize.STRING
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
