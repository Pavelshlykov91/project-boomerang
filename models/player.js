"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate() {}
  }
  Player.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
