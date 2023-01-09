const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);

// const logger = require("./logger");
// logger = 1;
// logger.log("Ishan");
