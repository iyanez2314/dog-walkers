const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class applicant extends Model {}

applicant.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'applicant'
    }
)

module.exports = applicant;