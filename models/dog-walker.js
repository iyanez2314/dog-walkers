const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class dogWalker extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        hooks: {
            async beforeCreate(newDogWalkerData) {
                newDogWalkerData.password = await bcrypt.hash(newDogWalkerData.password, 10);
                return newDogWalkerData;
            },

            async beforeUpdate(updatedDogWalkerData) {
                updatedDogWalkerData.password = await bcrypt.hash(updatedDogWalkerData.password, 10);
                return updatedDogWalkerData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dogWalker'
    }
);

module.exports = dogWalker;