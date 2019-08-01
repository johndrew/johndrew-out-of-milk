'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};