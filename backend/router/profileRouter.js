const express = require("express");
const profileController = require("../controllers/profileController");

const router = express.Router();

router.route("/:id").get(profileController.getProfile);

module.exports = router;
