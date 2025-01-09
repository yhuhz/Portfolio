const mongoose = require("mongoose");

// Schema is a class that defines the structure of the documents in a collection
// You can create a schema for a collection by passing an object to the Schema class. Example, a userSchema for a collection of users, messageSchema for a collection of messages, etc.

//THIS IS A SAMPLE SCHEMA
//You may not need to use this but you can use it as a reference
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes whitespace from both ends of a string
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: [
    {
      type: String,
      default: "Employee",
    },
  ], // Array of strings for the role, you can add more roles enclosed in {}
  active: {
    type: Boolean,
    default: true,
  },
}); // This userSchema is a schema for a collection of users. It defines a user with a username, password, role, and active status.

module.exports = mongoose.model("User", userSchema);
