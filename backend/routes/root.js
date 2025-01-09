const express = require("express"); // Import express
const router = express.Router(); // Create a router
const path = require("path"); // Import path

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
}); // Serve the index.html file

module.exports = router; // Export the router
