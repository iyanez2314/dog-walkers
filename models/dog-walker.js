const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class dogWalker extends Model {}

dogWalker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        dogs_walked: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dogs',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog_walker'
    }
)

module.exports = dogWalker;