'use strict';
const Sequelize = require('sequelize');
const {Card} = require('./')

module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    commander_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    Deck.belongsTo(models.Card, {foreignKey: 'commander_id'})
    Deck.belongsTo(models.User, {foreignKey: 'user_id'})

    const columnMapping = {
      through: 'DeckCard',
      otherKey: 'card_id',
      foreignKey: 'deck_id'
    }

    Deck.homePage = async function () {
      return await Deck.findAll({
        order: sequelize.random(),
        limit: 6,
        include: "Card"
      });
    }

    Deck.belongsToMany(models.Card, columnMapping)
  };

  const Op = Sequelize.Op;

  Deck.searchDecks = async function(query) {
    return await Deck.findAll({
      where: {
        name: {[Op.iLike]: `%${query}%`}
      },
      limit: 20
    })
  }

  return Deck;
};
