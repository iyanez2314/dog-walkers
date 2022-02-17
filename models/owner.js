const { Model, DataTypes } = require('sequelize');
const { dogWalker } = require('./dog-walker');
const sequelize = require('../config/connection');

class owner extends Model {}

owner.init (
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
                len: [1]
            }
        },
        // dogwalker_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: dogWalker,
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner'
    }
)

module.exports = owner;