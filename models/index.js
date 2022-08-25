const User = require("./User");
const Review = require("./Review");
const School = require("./School");
const Degree = require("./Degree");

User.hasMany(Review, {
    foreignKey: "user_id",
});

Review.belongsTo(User, {
    foreignKey: "user_id",
});

Degree.hasMany(Review, {
    foreignKey: "degree_id",
});

Review.belongsTo(Degree, {
    foreignKey: "degree_id",
});

School.hasMany(Review, {
    foreignKey: "school_id",
});

Review.belongsTo(School, {
    foreignKey: "school_id",
});

module.exports = { User, Review, School, Degree};