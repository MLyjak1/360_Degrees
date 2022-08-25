const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    score_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    score_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    score_3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    score_4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    comment: {
        type: DataTypes.STRING,
    },
    degree_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Degree",
            key: "id",
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id",
        },
    },
    school_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "School",
            key: "id",
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modeName: "Review",
});

module.exports = Review;