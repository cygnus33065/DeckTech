'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    mana_value: DataTypes.INTEGER,
    commander: DataTypes.BOOLEAN,
    gatherer: DataTypes.STRING,
    color_identity: DataTypes.ARRAY,
    keywords: DataTypes.ARRAY,
    type: DataTypes.ARRAY,
    isLegal: DataTypes.BOOLEAN
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.Deck, {foreignKey: "commander_id"})

    const columnMapping = {
      through: 'DeckCard',
      otherKey: 'deck_id',
      foreignKey: 'card_id'
    }

    Card.belongsToMany(models.Deck, columnMapping)
  };
  return Card;
};
