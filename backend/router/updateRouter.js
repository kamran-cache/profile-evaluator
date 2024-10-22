const express = require("express");
const updateController = require("../controllers/updateController");
const router = express.Router();

// router.post("/authorship/:id", addController.addAuthorship);
// router.post("/awards/:id", addController.addAwards);
// router.post("/exhibition/:id", addController.addExhibitions);
// router.post("/education/:id", addController.addEducation);
router.put("/experience/:id", updateController.updateExperience);
// router.post("/finalmerits/:id", addController.addFinalMerits);
// router.post("/media/:id", addController.addMedia);
// router.post("/originalwork/:id", addController.addOriginalWork);
// router.post("/patent/:id", addController.addPatent);
// router.post("/scholarship/:id", addController.addScholarship);
router.put("/visa/:id", updateController.updateVisa);

module.exports = router;
