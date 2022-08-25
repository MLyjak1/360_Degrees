const { Review } = require("../../models");

const router = require("express").Router();

//This route gets a list of all reviews.
router.get("/", async (req, res) => {

    try {
        
        const review = await Review.findAll();

        res.status(200).json(review);

    } catch (err) {

        res.status(500).json(err);
        
    }

});

//Gets the specific review by the id.
router.get("/:id", async (req, res) => {

    try {

        const review = await Review.findByPk(req.params.id);

        res.status(200).json(review);

    } catch {

        res.status(500).json(err);

    }

});

//TODO: Implement logic once forms are in place.
router.post("/new", async (req, res) => {

    try {

       const review = await Review.create({

            score_1: req.body.score_1_value,
            score_2: req.body.score_2_value,
            score_3: req.body.score_3_value,
            score_4: req.body.score_4_value,
            comment: req.body.comment,
            degree_id: 1
       });

        res.status(200).json(review);

    } catch (err) {

        res.status(500).json(err);

    }

});

router.post("/degree/:id", async (req, res) => {
    try {

        console.log("Router POST successful.");
        res.status(200);

    } catch (err) {

        res.status(500).json(err);

    }

});

module.exports = router;