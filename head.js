// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${actual}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${actual}`);
//   }
// };
//const assertEqual = require('./assertEqual');

const assertEqual = require('./assertEqual');
const head = function(arr) {
  if (arr.length >= 0) {
    return arr[0];
  } else {
    return undefined;
  }

};

module.exports = head;