const express = require("express");
const savedlists = require("../controllers/savedlists");
const router = express.Router();

router.get("/savedlists", savedlists.getSavedLists);

router.get("/savedlists/:id", savedlists.getSavedListbyId);

router.post("/savedlists", savedlists.createSavedList);

module.exports = router;
