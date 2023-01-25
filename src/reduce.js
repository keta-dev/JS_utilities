'use strict';

function newReduce (callback) {
  if (typeof this === 'string') {
    // For String
    const strLength = this.length;
    console.log(strLength);
    if (strLength < 1) return undefined;

    let counter = 0;
    let accumulator = this[counter];
    console.log(accumulator);
    console.log(this);
  
    while (counter < strLength - 1) {
      accumulator = callback(
        accumulator,
        this[counter + 1],
      ) || undefined;
      counter++;
    }
    return accumulator;

  } else {
    throw new Error("Invalid Type: Map function can only work with Object, String and Array");
  }
}

module.exports = newReduce;
