const router = require("express").Router();
const degreeRoutes = require("./degree-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/review", reviewRoutes);
router.use("/degree", degreeRoutes);

module.exports = router;