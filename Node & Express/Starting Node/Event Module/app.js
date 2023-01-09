const { log } = require("console");
const EventEmitter = require("events");

const Logger = require("./logger");

const logger = new Logger();

logger.on("login", (msg) => {
  console.log("listener", msg);
});

logger.log("log call");
