const express = require("express");
const getController = require("../controllers/getController");
const router = express.Router();

router.get("/awards/:experienceId", getController.getAwards);

module.exports = router;
