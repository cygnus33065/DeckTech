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
    // Card.belongsTo(models.Deck, {foreignKey: "commander_id"})

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

  Card.searchCards = async function(query) {
    const cards = Card.findAll({
      where: {
        name: {[Op.iLike]: `%${query}%`}
      },
      limit: 10
    })
    console.log(cards)
  }

  return Card;
};
