const { Model, DataTypes } = require('sequelize');
const { dogWalker } = require('./dog-walker');
const sequelize = require('../config/connection');
const dogs = require('./dog');
const bcrypt = require('bcrypt');

class owner extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

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
        }
        //dog_name: {
        //    type: DataTypes.STRING,
        //    references: {
        //        model: dogs,
        //        key: 'name'
        //    }
        //}
    },
    {
        hooks: {
            async beforeCreate(newOwnerData) {
                newOwnerData.password = await bcrypt.hash(newOwnerData.password, 10);
                return newOwnerData;
            },

            async beforeUpdate(updatedOwnerData) {
                updatedOwnerData.password = await bcrypt.hash(updatedOwnerData.password, 10);
                return updatedOwnerData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner'
    }
)

module.exports = owner;