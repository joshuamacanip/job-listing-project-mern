const JobListing = require("../model/jobListingModel");

//GET controller
const getJobListingController = async (req, res) => {
  //Find all joblisting
  const jobs = await JobListing.find({});

  //Return a response
  res.json({ result: jobs, statusCode: 200 }).status(200);
};

//POST controller
const postJobListingController = async (req, res) => {
  //Get request body
  const jobListing = new JobListing(req.body);

  //Save newly created
  const newJobListing = await jobListing.save();

  //Respond the newly created document
  res.json(newJobListing).status(200);
};

//UPDATE controller
const updateJobListingController = async (req, res) => {
  //Get document id
  const { id } = req.params;

  //Find document and update the data
  const updatedDoc = await JobListing.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  //Respond the newly created document
  res.json(updatedDoc).status(200);
};

//DELETE controller
const deleteJobListingController = async (req, res) => {
  //Get document id
  const { id } = req.params;

  //Find document and delete the data
  const deletedDoc = await JobListing.findByIdAndDelete(id);

  //Respond the deleted document
  res.json(deletedDoc).status(200);
};

module.exports = {
  getJobListingController,
  postJobListingController,
  updateJobListingController,
  deleteJobListingController,
};
