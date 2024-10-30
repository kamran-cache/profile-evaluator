const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.route("/:experienceId/:roleId").post(projectController.addProjects);
router.route("/:roleId").get(projectController.getRoleProjects);

module.exports = router;
