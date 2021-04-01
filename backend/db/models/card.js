'use strict';
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
