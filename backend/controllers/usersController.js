const User = require("../models/User"); // Import the user model
const Note = require("../models/Note"); // Import the Note model
const asyncHandler = require("express-async-handler"); // Import the express-async-handler module
const bcrypt = require("bcrypt"); // Import the bcryptjs module
const { use } = require("../routes/root");

// @desc    Get all users
// @route   GET /users
// @access  Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean(); // Find all users //-password means password will not be returned //lean() converts the mongoose object to plain JS object
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});

// @desc    Create new user
// @route   POST /users
// @access  Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body; // Destructure the username, password, and roles from the request body

  //Confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicates
  const duplicate = await User.findOne({ username }).lean().exec(); // Check if the username already exists using findOne() //lean() converts the mongoose object to plain JS object //exec() executes the query

  if (duplicate) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Hash the password
  const hashedPwd = await bcrypt.hash(password, 10); // Generate a salt

  const userObject = { username, password: hashedPwd, roles }; // Create a user object with the username, hashed password, and roles

  //Create and store new user
  const user = await User.create(userObject); // Create a new user

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "User creation failed" });
  }
});

// @desc    Update a user
// @route   PATCH /users
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, active, roles, password } = req.body; // Destructure the id, username, password, and roles from the request body

  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findById(id).exec(); // Find the user by ID

  //Check for existing user
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  //Check for duplicates
  const duplicate = await User.findOne({ username }).lean().exec(); // Allow updates to the original username
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  user.username = username; // Update the username
  user.roles = roles; // Update the roles
  user.active = active; // Update the active status

  if (password) {
    user.password = await bcrypt.hash(password, 10); // Update the password, if the user wants to update a password
  }

  const updatedUser = await user.save(); // Save the updated user

  res.json({ message: `${updatedUser.username} updated` });
});

// @desc    Delete a user
// @route   DELETE /users
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body; // Destructure the id from the request body

  if (!id) {
    res.status(400).json({ message: "ID is required" });
  }

  const note = await Note.findOne({ user: id }).lean().exec(); // Find the notes by user ID
  if (note?.length) {
    res.status(400).json({ message: "User has assigned notes" });
  }

  // Does the user exist to delete?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await User.findByIdAndDelete(id).exec(); // if you use deleteOne, you will not get the deleted document back but if you use findByIdAndDelete, you will get the deleted document back which will display the username and id

  const reply = `Username ${user.username} with ID ${user._id} deleted`;

  res.json(reply);
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
