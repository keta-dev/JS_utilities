 "use strict";

// const newMap = require('./src/map');

const newReduce = require('./src/reduce');

function init() {
  // Object
  // Object.prototype.newReduce = newReduce;

  // String
  String.prototype.newReduce = newReduce;

  // Array
  // Array.prototype.newReduce = newReduce;
}

module.exports = init;
