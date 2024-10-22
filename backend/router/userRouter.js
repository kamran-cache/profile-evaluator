const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.route("/signup").post(userController.signup);
router.route("/login").post(userController.login);
router.route("/get-user").get(auth, userController.getUser);

module.exports = router;
