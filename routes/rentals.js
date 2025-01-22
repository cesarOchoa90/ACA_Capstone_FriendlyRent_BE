const express = require("express");
const rentals = require("../controllers/rentals");
const router = express.Router();

router.get("/rentals", rentals.getRentals);
router.get("/rentalsByZipCode/:zipcode", rentals.getRentalsbyZipCode);

module.exports = router;
