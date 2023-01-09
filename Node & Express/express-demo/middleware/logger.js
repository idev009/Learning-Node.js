function logger(req, res, next) {
  console.log("Logging Request");
  next(); // passes control to next middleware in the request-response pipeline
}

module.exports.logger = logger;
