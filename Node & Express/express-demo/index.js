const logger = require("./middleware/logger");
// Structuring P1 importing route from course folder
const courses = require("./route/courses");
const home = require("./route/home");
//Debug Package
const startupDebugger = require("debug")("app:startup"); // second argument is namespace
const dbDebugger = require("debug")("app:db"); // second argument is namespace
// Confrigation Module/Folder
const config = require("config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Joi = require("joi");
const morgan = require("morgan"); //
// Validation Library
const { validate } = require("joi");
const { application } = require("express");

// Adding routes to the middleware to use the routes
app.use("/", home);
app.use("/courses/api", courses);

// ----------------------Templating Engine PUG ----------------
//-------------------------
app.set("view engine", "pug");
app.set("views", "./view");

//-------------------

// ------------------------
// logging request

// app.use(morgan("tiny"));

// const { logger } = require("./logger");

//--------------------------------------

// app.use(logger); // custom middle ware
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// ENVIRONMENTS

// undefined// console.log(process.env.NODE_ENV);
console.log(app.get("env"));

// if (app.get("env") == "development") {
//   app.use(morgan("tiny"));
// }
// command line : $export NODE_ENV=production to set/change the production environment.

// --------------------------------------
// Confrigation
// npm i config
// mkdir config
// make three files for every environamenrt: - default, development, production
// define settings for individial envirionment and console log to check here
console.log("Application Name :" + config.get("name"));
console.log("Mail Server : " + config.get("mail.host"));
// --------------------------

// --------------------Debugging Package Debug -------------------------

startupDebugger("Debugging msg 1");

//db code (for example)
let db = 0;
if (db == 0) {
  dbDebugger("connected to the database");
}

//---------------------------------------------------------

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
