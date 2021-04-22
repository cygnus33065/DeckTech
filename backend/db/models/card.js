'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    art_url: DataTypes.STRING,
    mana_value: DataTypes.INTEGER,
    gatherer: DataTypes.STRING,
    color_identity: DataTypes.ARRAY(DataTypes.INTEGER),
    keywords: DataTypes.ARRAY(DataTypes.INTEGER),
    type: DataTypes.STRING,
    isLegal: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    Card.hasOne(models.Deck, {foreignKey: "commander_id"})

    const columnMapping = {
      through: 'DeckCard',
      otherKey: 'deck_id',
      foreignKey: 'card_id'
    }

    Card.belongsToMany(models.Deck, columnMapping)
  };

  const Op = Sequelize.Op;

  Card.randomCard = async function () {
    return await Card.findOne({
      order: sequelize.random()
    });
  }

  Card.sampleDeck = async function () {
    return await Card.findAll({
      order: sequelize.random(),
      limit: 100,
    });
  }

  Card.searchCards = async function(query) {
    return await Card.findAll({
      where: {
        name: {[Op.iLike]: `${query}%`}
      },
      limit: 10
    })
  }

  Card.commanders = async function () {
    return await Card.findAll ({
      where: {
        type: {[Op.iLike]: '%Legendary Creature%'}
      }
    })
  }
  return Card;
};
