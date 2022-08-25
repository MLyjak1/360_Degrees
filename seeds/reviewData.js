const { Review } = require("../models");

const reviewSeedData = [
    {
        score_1: 9,
        score_2: 4,
        score_3: 7,
        score_4: 2,
        comment: "This is a good test",
    },
    {
        score_1: 1,
        score_2: 2,
        score_3: 3,
        score_4: 4,
        comment: "This is a bad test",
    },
    {
        score_1: 5,
        score_2: 5,
        score_3: 5,
        score_4: 5,
        comment: "This is an ok test",
    },
    {
        score_1: 10,
        score_2: 10,
        score_3: 10,
        score_4: 10,
        comment: "This is a perfect test",
    },
    {
        score_1: 100,
        score_2: 10,
        score_3: 0,
        score_4: 1.1,
        comment: "This is a broken test",
    },
];

const seedReview = () => Review.bulkCreate(reviewSeedData);

module.exports = seedReview;