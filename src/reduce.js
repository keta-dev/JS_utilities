'use strict';

function newReduce (callback) {
  if (typeof this === 'string') {
    // For String
    const strLength = this.length;
    if (strLength < 1) return undefined;

    let counter = 0;
    let accumulator = this[counter];
  
    while (counter < strLength - 1) {
      accumulator = callback(
        accumulator,
        this[counter + 1],
      ) || undefined;
      counter++;
    }
    return accumulator;

  } else if (Array.prototype) {
      // For Array
      const arrLength = this.length;
      console.log(arrLength);
      if (arrLength < 1) return [];

      let counter = 0;
      let accumulator = this[counter];
      console.log("accumulator", accumulator);
      console.log("counter", counter);

      while (counter < arrLength - 1) {
        accumulator = callback(
          accumulator,
          this[counter],
        );
        counter++
      }
      console.log(accumulator);
      return accumulator;

  } else {
    throw new Error("Invalid Type: Map function can only work with Object, String and Array");
  }
}

module.exports = newReduce;

// Array.prototype.customReduce = function (callback, initial=0) {
//   let result = initial;
//   for (let i = 0; i < this.length; i++) {
//     result = callback(result, this[i]);
//   }
//   return result;
// };