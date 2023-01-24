"use strict";

function newMap(callback) {
  if (typeof this === "string") {
    // String
    const lengthOfStr = this.length;
    if (lengthOfStr < 1) return "";

    let str = "";
    let count = 0;

    while (count < lengthOfStr) {
      const newStr = callback({
        value: this[count],
        index: count,
        context: this
      }) || undefined;
      str += newStr;
      count++;
    }
    return str;

  } else if (typeof this.prototype.length === "undefined") {
    // Object
    const objectKeys = Object.keys(this);
    const lengthOfObj = objectKeys.length;
    if (lengthOfObj < 1) return {};

    const newObject = {};
    let count = 0;

    while (count < lengthOfObj) {
      const item = callback({
        value: this[objectKeys[count]],
        index: count,
        context: this,
        keys: objectKeys[count],
      }) || undefined;
      count++;
    }

    return newObject;

  } else if (typeof this.prototype.length === "number") {
    // Array
    const arrayLength = this.length;
    if (arrayLength < 1) return [];

    const newArray = [];
    let counter = 0;

    while (counter < arrayLength) {
      const newItem = callback({
        value: this[counter],
        index: counter,
        context: this,
      }) || undefined;
      newArray.push(newItem);
      counter++;
    }

    return newArray;
  } else {
    throw new Error("Invalid Type: Map function can only work with Object, String and Array");
  }
}

module.exports = newMap;
// Yes