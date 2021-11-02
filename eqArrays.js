
const assertEqual = require('./assertEqual');
const eqArrays = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {//
        if(Array.isArray(arr1[i])&&Array.isArray(arr2[i])){//if is array true
          return eqArrays(arr1[i],arr2[i])
        }//nested_array
        return false;
      }
    }
    return true;
  }
}
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// console.log(eqArrays([1, [2, 3]], [1,[ 2, 3]])) // => true
// //assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports=eqArrays;