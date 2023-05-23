const mongoose = require("mongoose");

//Schema
const JobListingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    position: {
      type: String,
    },
    salary: {
      string: Number,
    },
    tags: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      default:
        "Developed beautiful application that can solve real world problem!",
    },
  },
  { timestamps: true }
);

//Model
const JobListing = mongoose.model("JobListing", JobListingSchema);

module.exports = JobListing;
