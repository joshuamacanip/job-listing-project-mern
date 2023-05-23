const expres = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const jobListingRoute = require("./routes/jobListingRoute");
const app = expres();

//Environmental variables
dotenv.config();

//App level middleware
app.use(cors());
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

//Job Listing Routes
app.use("/api/v1", jobListingRoute);

//Not found route
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

//Start server
async function start() {
  try {
    //connect to mongodb
    await connectDB();

    //Power-up the server
    app.listen(port, async () => {
      console.log(`Connected to Database, Listening on PORT: ${port}!`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
