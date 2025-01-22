const express = require("express");
const users = require("../controllers/users");
const router = express.Router();

router.get("/users", users.getUsers);

router.get("/users/:id", users.getUserbyId);

// router.post("/users", users.createUser);

module.exports = router;
