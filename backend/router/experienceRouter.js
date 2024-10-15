const express = require("express");
const experienceController = require("../controllers/experienceController");
const router = express.Router();

router.post("/:id", experienceController.addExperience);
router.get("/:id", experienceController.getExperiences);
router.put("/:id", experienceController.updateExperience);
router.delete("/:id", experienceController.deleteExperience);

module.exports = router;
