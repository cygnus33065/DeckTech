'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeckCard = sequelize.define('DeckCard', {
    deck_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER
  }, {});
  DeckCard.associate = function(models) {
    // associations can be defined here
  };
  return DeckCard;
};