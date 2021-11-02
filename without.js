
const eqArrays = function (arr1, arr2) {

  for (let i = 0; i <= arr1.length - 1; i++) {
    // console.log(arr1[i],arr2[i]);
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



const without = function (arr1, arr2) {
  let new_arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let matching = false;
    for (let j = 0; j < arr2.length; j++) {
      //  console.log(typeof arr1[i], typeof arr2[j]);
      //  console.log(arr1[i], arr2[j]);
      if (arr1[i] !== arr2[j]) {//if element in j not in 

        if (typeof arr1[i] == typeof arr2[j]) {
          // console.log("pushed"+arr1[i]);
          new_arr.push(arr1[i]);

        }
      }
    }
  }
  return new_arr;  // return new_arr;
}

// =================================test data

const words = ["hello", "world", "lighthouse"];
console.log(without([1, 2, 3], [2])) // => [1, 3]
console.log(without(["1", "2", "3", "l"], [1, 2, "3"]))// => ["1", "2"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports=without;
//inside for//for
// let new_arr=[];
// for (let i = 0; i < source.length; i++) {
//   for (let j = 0; i < itemtoremove.length; i++) {
// new_array=source.filter(function(item){
//   return !itemtoremove.include(item)
// });
// }
// }return newArray}
// )