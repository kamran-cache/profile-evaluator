const express = require("express");
const basicDetailsController = require("../controllers/basicDetailsController");
const router = express.Router();

router.post("/", basicDetailsController.createBasicDetails);
router.get("/:id", basicDetailsController.getBasicDetails);
router.put("/:id", basicDetailsController.updateBasicDetailsInProfile);
router.delete("/:id", basicDetailsController.deleteBasicDetails);

module.exports = router;
