const { Degree } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {

        const degree = await Degree.findAll();

        res.status(200).json(degree);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/:id", async (req, res) => {
    
    try {

        const degree = await Degree.findByPk(req.params.id);

        res.status(200).json(degree);

    } catch {

        res.status(500).json(err);

    }
});

router.post("/", async (req, res) => {
    try {

        const degree = await Degree.create({
            degree_name: req.body.degree_name,
            score_value: req.body.score_value
        });

        res.status(200).json(degree);

    } catch (err) {

        res.status(500).json(err);
    
    }
});
module.exports = router;