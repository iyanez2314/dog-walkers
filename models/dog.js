const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const dogWalker = require("./dog-walker");
const owner = require("./owner");

class dogs extends Model {}

dogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: owner,
        key: "id",
      },
    },
    dogwalker_id: {
      type: DataTypes.INTEGER,
      references: {
        model: dogWalker,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dogs",
  }
);

module.exports = dogs;
