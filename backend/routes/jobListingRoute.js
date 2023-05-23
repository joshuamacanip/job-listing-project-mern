const express = require("express");
const router = express.Router();
const {
  getJobListingController,
  postJobListingController,
  updateJobListingController,
  deleteJobListingController,
} = require("../controller/jobListingController");

//GET
router.get("/", getJobListingController);
//POST
router.post("/", postJobListingController);
//UPDATE
router.put("/:id", updateJobListingController);
//DELETE
router.delete("/:id", deleteJobListingController);

module.exports = router;
