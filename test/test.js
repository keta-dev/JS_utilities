const newReduce = require("../src/reduce");
const utilities = require("./../");

utilities();

// const a = "abcde".newMap(({value}) => value.toUpperCase());
// const b = {name: "Miriam", age: 20}
// console.log({a});

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
console.log(countedNames);

// sum(2, 3);
// getYearOfBirth(age);
// yearToDays(50);

// const tree = {
//   root: {
//     main: {name: "Tree", subject: "Branches"},
//     body: {
//       1: "Data 1",
//       2: "Data 2",
//       3: {
//         data3: "Data 3",
//         params: {1: "Param 1", 2: "Param 2", 3: "Param 3"},
//       },
//     },
//     head: {title: "Main Tree", subTitle: "My Tree"},
//   },
// };

// treeShaking(tree); = ["Tree", "Branches", "Data 1", "Data 2", "Data 3", "Param 1", "Param 2", "Param 3", "Main Tree", "My Tree"]

// function treeShaking(treeObject) {
//   const keys = Object.keys(treeObject);
//   const values = [];
//   keys.forEach(function (key) {
//     const value = treeObject[key];
//     if (typeof value === "string") {
//       values.push(value);
//     } else {
//       const returnedValue = treeShaking(value);
//       values.splice(values.length - 1, 0, ...returnedValue);
//     }
//   });
//   return values;
// }

// console.log(treeShaking(tree));

// const nums = [1,23,4,93,4,856,6,94,4]
// forEach = [1,[2,3],4,[9,3],4,[8,5,6],6,[9,4],4]
// [1,5,4,[1,2],4,8,6,4,4]
// 32

// function binomial(nums) {
//   const values = [];

//   nums.forEach((num) => {
//     if (num > 9) {
//       const arr = num.toString().split("").map(x => Number(x));
//       console.log({arr, num})
//       values.push(binomial(arr));
//     } else {
//       values.push(num);
//     }
//   })
//   if (values.every((val) => val < 10)) {
//     return values.reduce((a, b) => a + b)
//   } else {
//     return binomial(values);
//   }
// }

// console.log(
//   binomial([1,23,4,93,4,856,6,94,4])
// )
