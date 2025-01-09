const { logEvents } = require("./logger"); // Import the logEvents function from the logger module

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "error.log"
  ); // Log the error message, request method, URL, and origin
  console.log(err.stack); // Log the error stack to the console

  const status = res.statusCode ? res.statusCode : 500; // Server error

  res.status(status); // Set the status code

  res.json({ message: err.message }); // Send the error message as JSON
};

module.exports = errorHandler; // Export the errorHandler middleware
