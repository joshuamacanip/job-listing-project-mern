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
    overview: {
      type: String,
      default:
        "As a developer your job is to create a minimalist application that cater the needs of our clients.",
    },
    typeOfEmployement: {
      type: String,
      default: "Full-Time",
    },
    skills: [{ type: String }],
    favorite: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default:
        "Developed beautiful application that can solve real world problem!",
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

//Model
const JobListing = mongoose.model("JobListing", JobListingSchema);

module.exports = JobListing;
