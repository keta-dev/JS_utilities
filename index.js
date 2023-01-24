 "use strict";

const newMap = require('./src/map');

function init() {
  // Object
  Object.prototype.newMap = newMap;

  // String
  String.prototype.newMap = newMap;

  // Array
  Array.prototype.newMap = newMap;
}

module.exports = init;
