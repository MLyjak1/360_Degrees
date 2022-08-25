const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Degree extends Model {}

Degree.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    degree_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    score_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modeName: "Degree",
});

module.exports = Degree;