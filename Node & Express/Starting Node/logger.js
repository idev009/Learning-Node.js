var events = require("events");
var eventEmitter = new events.EventEmitter();
var url = "http://mylogger.io/log";

function log(message) {
  // Send an Http request
  console.log(message);
  eventEmitter.emit("loggingin", { id: 1, message: "loggingin" });
}

module.exports.log = log;
module.exports.endPoint = url;
