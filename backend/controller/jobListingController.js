const JobListing = require("../model/jobListingModel");
const asyncFn = require("../middleware/asyncFn");
const { createCustomError } = require("../error/custom-error");

//GET controller
const getJobListingController = asyncFn(async (req, res) => {
  //Find all joblisting
  const jobs = await JobListing.find({});

  //Return a response
  res.json({ result: jobs, statusCode: 200 }).status(200);
});

//POST controller
const postJobListingController = asyncFn(async (req, res) => {
  //Get request body
  const jobListing = new JobListing(req.body);

  //Save newly created
  const newJobListing = await jobListing.save();

  //Respond the newly created document
  res.json(newJobListing).status(200);
});

//UPDATE controller
const updateJobListingController = asyncFn(async (req, res, next) => {
  //Get document id
  const { id: jobListingID } = req.params;

  //Find document and update the data
  const updatedDoc = await JobListing.findByIdAndUpdate(
    jobListingID,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  //Pass to custom error handler
  if (!updatedDoc) {
    return next(
      createCustomError(`No job listing with ID: ${jobListingID} exist!`, 404)
    );
  }

  //Respond the newly created document
  res.json(updatedDoc).status(200);
});

//DELETE controller
const deleteJobListingController = asyncFn(async (req, res, next) => {
  //Get document id
  const { id: jobListingID } = req.params;

  //Find document and delete the data
  const deletedDoc = await JobListing.findByIdAndDelete(jobListingID);

  //Pass to custom error handler
  if (!deletedDoc) {
    return next(
      createCustomError(
        `No job listing item with ID: ${jobListingID} exist!`,
        404
      )
    );
  }

  //Respond the deleted document
  res.json(deletedDoc).status(200);
});

module.exports = {
  getJobListingController,
  postJobListingController,
  updateJobListingController,
  deleteJobListingController,
};
