const { format } = require("date-fns"); // date-fns is a library that provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.
const { v4: uuid } = require("uuid"); // uuid is a library that provides unique identifiers (UUIDs) for Node.js and the browser.
const fs = require("fs"); // fs is a built-in Node.js module that provides file system-related functionality.
const fsPromises = require("fs").promises; // fsPromises is a built-in Node.js module that provides file system-related functionality using promises.
const path = require("path"); // path is a built-in Node.js module that provides utilities for working with file and directory paths.

const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`; // format the current date and time.
  const logItem = `${dateTime}/t${uuid()}\t${message}\n`; // create a log item with the current date and time, a unique identifier, and the message.

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      // check if the logs directory exists.
      await fsPromises.mkdir(path.join(__dirname, "..", "logs")); // create the logs directory if it doesn't exist.
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    ); // append the log item to the log file.
  } catch (err) {
    console.log(err); // log any errors to the console.
  }
}; // create a log item with the current date and time, a unique identifier, and the message.

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log"); // log the request method, URL, and origin.
  console.log(`${req.methos} ${req.path}`); // log the request method and path to the console.
  next(); // call the next middleware in the stack.
};

module.exports = { logEvents, logger }; // export the logger middleware.
