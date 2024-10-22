const express = require("express");
const addController = require("../controllers/addController");
const router = express.Router();

router.post("/authorship/:id", addController.addAuthorship);
router.post("/awards/:id", addController.addAwards);
router.post("/exhibition/:id", addController.addExhibition);
router.post("/education/:id", addController.addEducation);
router.post("/experience/:id", addController.addExperience);
router.post("/finalmerits/:id", addController.addFinalMerits);
router.post("/media/:id", addController.addMedia);
router.post("/originalwork/:id", addController.addOriginalWork);
router.post("/patent/:id", addController.addPatent);
router.post("/scholarship/:id", addController.addScholarship);
router.post("/visa/:id", addController.addVisa);
router.post("/pressrelease/:id", addController.addPR);
router.post("/judging/:id", addController.addJudging);
router.post("/membership/:id", addController.addMembership);

module.exports = router;
