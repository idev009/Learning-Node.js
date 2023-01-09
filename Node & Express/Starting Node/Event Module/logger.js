const EventEmitter = require("events");
var url = "http://";
class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);

    this.emit("login", {
      id: 1,
      msg: "Welcome to the Instagram",
      url: "http://instagram.com",
    });
  }
}

module.exports = Logger;
