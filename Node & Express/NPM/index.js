var _ = require("underscore");

var list = [
  [5, 1, 7],
  [3, 2, 1],
];

let result = _.invoke(list, "sort");
// => [[1, 5, 7], [1, 2, 3]]
console.log(result);
