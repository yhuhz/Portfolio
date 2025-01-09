const express = require("express"); // Import express
const app = express(); // Create an express app
const path = require("path"); // Import path
const PORT = process.env.PORT || 3500; // Set the port

app.use("/", express.static(path.join(__dirname, "/public"))); // Serve the static files

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // Start the server
