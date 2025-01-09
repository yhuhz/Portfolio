const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI); // Connect to the MongoDB database using the DATABASE_URI environment variable
  } catch (err) {
    console.log(err);
  }
}; // The connectDB function is an async function that connects to the MongoDB database using the DATABASE_URI environment variable.

module.exports = connectDB;
