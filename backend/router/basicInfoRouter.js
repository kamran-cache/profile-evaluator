const express = require("express");
const basicDetailsController = require("../controllers/basicDetailsController");
const router = express.Router();
const { auth } = require("../middleware/auth");

router.post("/", auth, basicDetailsController.createBasicDetails);
router.get("/:id", basicDetailsController.getBasicDetails);
router.put("/:id", auth, basicDetailsController.updateBasicDetailsInProfile);
router.delete("/:id", basicDetailsController.deleteBasicDetails);

module.exports = router;
