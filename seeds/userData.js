const { User } = require("../models");

const userSeedData = [
    {
        username: "dsin",
        password: "itiere",
        email: "dsinitiere@bcs.com",
    },
    {
        username: "mly",
        password: "jak",
        email: "mlyjak@bcs.com",
    },
    {
        username: "jrank",
        password: "lin",
        email: "jfranklin@bcs.com",
    },
    {
        username: "svir",
        password: "ani",
        email: "svirani@bcs.com",
    },
    {
        username: "testuser",
        password: "fdsa123",
        email: "testuser@bcs.com"
    },
];

const seedUser = () => User.bulkCreate(userSeedData);

module.exports = seedUser;