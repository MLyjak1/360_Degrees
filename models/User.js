const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [8]
            // }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {

        //Bcrypt hook for salting and hashing of user passwords.
        hooks: {
            beforeCreate: async (newUserData) => {
                //Salt the newly created password 10 times and then hash it.
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.password) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                }
                return updatedUserData;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modeName: "User",
    }
);

module.exports = User;