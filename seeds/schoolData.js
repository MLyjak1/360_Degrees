const { School } = require("../models");

const schoolSeedData = [
    {
        school_name: "Georgia Tech",
        school_state: "GA",
    },
    {
        school_name: "University of Alabama",
        school_state: "AL",
    },
    {
        school_name: "University of South Carolina",
        school_state: "South Carolina",
    },
    {
        school_name: "65436543",
        school_state: "GA5445733",
    },
    {
        school_name: "Emory",
        school_state: "Georgia",
    },
];

const seedSchool = () => School.bulkCreate(schoolSeedData);

module.exports = seedSchool;