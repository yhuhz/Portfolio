const express = require("express"); // Import express
const app = express(); // Create an express app
const path = require("path"); // Import path
const PORT = process.env.PORT || 3500; // Set the port

app.use(express.json()); // Parse JSON bodies

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // Start the server
