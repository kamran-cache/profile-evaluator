const express = require("express");
const updateController = require("../controllers/updateController");
const router = express.Router();

router.put("/authorship/:authorshipId", updateController.updateAuthorship);
// router.post("/awards/:id", addController.addAwards);
router.put("/exhibition/:exhibitionId", updateController.updateExhibition);
router.put("/pr/:pressId", updateController.updatePressRelease);
router.put("/experience/:id", updateController.updateExperience);
router.put("/finalMerits/:meritId", updateController.addMainToMerit);
router.put("/judging/:judgingId", updateController.updateJudging);
// router.post("/originalwork/:id", addController.addOriginalWork);
// router.post("/patent/:id", addController.addPatent);
// router.post("/scholarship/:id", addController.addScholarship);
router.put("/visa/:id", updateController.updateVisa);

module.exports = router;
