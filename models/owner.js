const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class owner extends Model {
    checkPassword(ownerloginPw) {
        return bcrypt.compareSync(ownerloginPw, this.password);
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