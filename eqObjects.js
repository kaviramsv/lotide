
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(obj1, obj2) {

  let keys_1=Object.keys(obj1);
  let keys_2=Object.keys(obj2);

 if(keys_1.length!==keys_2.length){
  //console.log("false");
   return false;
 }
 for(const key of keys_1){
    if(obj1[key]!==obj2[key]){
      if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
        return(eqArrays(obj1[key],obj2[key]));
      
     }else{   
      return eqObjects(obj1[key],obj2[key]);
     }
    }
 }
 //console.log("true");
 return true;
};

// ====test data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba); // => false
eqObjects(ab, ba); // => true
const abc = { a: "1", b: "2", c: "3" };
// // assertEqual(ab, abc); // => false
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2",3] ,e :[]};
const dc = { d: ["2", 3], c: "1" ,e :[]};
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// //eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2),false);

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) );

module.exports=eqObjects;
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// two objects are equal when:

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object
// First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
// After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. 
//Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false
// Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
// const eqArrays = function (arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   } else {
//     for (let i = 0; i <= arr1.length - 1; i++) {
//       if (arr1[i] !== arr2[i]) {      
//         return false;
//       }
//     }
//     return true;
//   }
// }