const expres = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const jobListingRoute = require("./routes/jobListingRoute");
const app = expres();

dotenv.config();

//Express top level middleware
app.use(cors());
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

//Job Listing Routes
app.use("/api/v1", jobListingRoute);

//Handler for route that not exist
app.use((req, res) => {
  res.json({ msg: "Route does not exist!" });
});

//Power-up the server
app.listen(3000, async () => {
  try {
    //connect to mongodb
    await connectDB();

    //console log something to console
    console.log("Connected to Database!");
  } catch (err) {
    //console log the error
    console.log(err);
  }
});
