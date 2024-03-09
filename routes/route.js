const express = require("express");
const router = express.Router();

const { createPolyline , tollCalculator } = require("../controllers/Map");

router.post("/createPolyline" , createPolyline);
router.post("/tollCalculator" , tollCalculator);

module.exports = router;