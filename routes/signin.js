const express = require("express");
const router = express.Router();
const signinControllers = require("../controllers/signin");

router.post("/signin", signinControllers.signin);

module.exports = router;