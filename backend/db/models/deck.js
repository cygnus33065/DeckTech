'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    commander_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Deck.associate = function(models) {
    Deck.hasOne(models.Card, {foreignKey: 'commander_id'})
    Deck.belongsTo(models.User, {foreignKey: 'user_id'})

    const columnMapping = {
      through: 'DeckCard',
      otherKey: 'card_id',
      foreignKey: 'deck_id'
    }

    Deck.belongsToMany(models.Card, columnMapping)
  };
  return Deck;
};
