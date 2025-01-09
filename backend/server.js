const express = require("express"); // Import express
const app = express(); // Create an express app
const path = require("path"); // Import path
const { logger } = require("./middleware/logger"); // Import the logEvents function from the logger module
const errorHandler = require("./middleware/errorHandler"); // Import the errorHandler middleware
const cookieParser = require("cookie-parser"); // Import the cookie-parser module
const cors = require("cors"); // Import the cors module
const corsOptions = require("./config/corsOptions"); // Import the corsOptions module
const PORT = process.env.PORT || 3500; // Set the port

app.use(logger); // Use the logger middleware

app.use(cors(corsOptions)); // Use the cors middleware with options

app.use(cors()); // Use the cors middleware

app.use(express.json()); // Parse JSON bodies

app.use(cookieParser()); // Parse cookies

app.use("/", express.static(path.join(__dirname, "public"))); // Serve the static files

app.use("/", require("./routes/root")); // Use the root router

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
}); // Handle all other routes. PUT THIS LAST

app.use(errorHandler); // Use the errorHandler middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // Start the server
