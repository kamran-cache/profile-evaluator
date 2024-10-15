const express = require("express");
const profileController = require("../controllers/profileController");

const router = express.Router();

router.route("/").post(profileController.createProfile);
router.route("/:id").get(profileController.getProfile);
router.route("/:id").put(profileController.updateProfile);
router.route("/:id").delete(profileController.deleteProfile);

module.exports = router;
