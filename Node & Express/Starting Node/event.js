var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on("loggingin", (data) => {
  console.log("logged in .", data);
});
const logger = require("./logger");
logger.log("message");
