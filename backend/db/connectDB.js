const mongoose = require("mongoose");

async function connectDB() {
  return await mongoose.connect(process.env.MONGO_URL);
}

module.exports = connectDB;
