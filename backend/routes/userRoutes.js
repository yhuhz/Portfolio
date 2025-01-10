const express = require("express"); // Import express
const router = express.Router(); // Create a router
const usersController = require("../controllers/usersController"); // Import the usersController

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router; // Export the router
