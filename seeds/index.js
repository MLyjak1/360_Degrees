const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedDegree = require("./degreeData");
const seedReview = require("./reviewData");
const seedSchool = require("./schoolData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedDegree();

  await seedReview();

  await seedSchool();

};

seedAll();
